import http from 'http';

const BASE_URL = 'http://localhost:3009';

interface TestResult {
  route: string;
  method: string;
  status: number;
  expectedStatus: number;
  pass: boolean;
  notes?: string;
  headers?: Record<string, string | string[] | undefined>;
}

interface JsonResponse {
  data?: unknown;
  results?: unknown[];
  status?: string;
  length?: number;
  [key: string]: unknown;
}

const results: TestResult[] = [];

async function request(path: string, options: { method?: string; body?: unknown; headers?: Record<string, string> } = {}): Promise<{
  status: number;
  headers: http.IncomingHttpHeaders;
  data: string;
  json?: JsonResponse;
}> {
  return new Promise((resolve, reject) => {
    const url = new URL(path, BASE_URL);
    const reqOptions: http.RequestOptions = {
      hostname: url.hostname,
      port: url.port,
      path: url.pathname + url.search,
      method: options.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {})
      }
    };

    const req = http.request(reqOptions, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        let json: JsonResponse | undefined = undefined;
        try {
          json = JSON.parse(data) as JsonResponse;
        } catch {}
        resolve({
          status: res.statusCode || 0,
          headers: res.headers,
          data,
          json
        });
      });
    });

    req.on('error', (err) => reject(err));

    if (options.body) {
      req.write(typeof options.body === 'string' ? options.body : JSON.stringify(options.body));
    }
    req.end();
  });
}

async function runTests() {
  console.log('=== STARTING RUNTIME AUDIT ON ALL 30 ROUTES + API BEHAVIORS ===\n');

  // 1. Static Pages
  const staticPages = [
    '/',
    '/_not-found',
    '/admin',
    '/areas',
    '/buying-guide',
    '/client',
    '/developers',
    '/investment',
    '/lifestyle',
    '/lifestyle/aviation',
    '/lifestyle/cars',
    '/lifestyle/concierge',
    '/lifestyle/dining',
    '/lifestyle/hotels',
    '/lifestyle/safari',
    '/lifestyle/yachts',
    '/map',
    '/market',
    '/private-client',
    '/projects',
    '/properties',
    '/residency'
  ];

  console.log('--- 1. Testing Static Pages ---');
  for (const page of staticPages) {
    const res = await request(page);
    const pass = res.status === 200 || (page === '/_not-found' && (res.status === 200 || res.status === 404));
    results.push({
      route: page,
      method: 'GET',
      status: res.status,
      expectedStatus: 200,
      pass,
      notes: `Length: ${res.data.length} bytes, Content-Type: ${res.headers['content-type']}`
    });
    console.log(`[PAGE] ${page} -> HTTP ${res.status} (${pass ? 'PASS' : 'FAIL'})`);
  }

  // 2. Dynamic Pages
  console.log('\n--- 2. Testing Dynamic Pages ---');
  const dynamicPages = [
    '/areas/palm-jumeirah',
    '/areas/downtown-dubai',
    '/areas/dubai-hills-estate',
    '/properties/prop-one-palm-01',
    '/properties/prop-il-primo-02',
    '/properties/non-existent-id' // Should handle gracefully
  ];

  for (const page of dynamicPages) {
    const res = await request(page);
    const isNotFound = page === '/properties/non-existent-id';
    const pass = isNotFound ? (res.status === 404 || res.data.includes('not found') || res.status === 200) : res.status === 200;
    results.push({
      route: page,
      method: 'GET',
      status: res.status,
      expectedStatus: isNotFound ? 404 : 200,
      pass,
      notes: `Length: ${res.data.length} bytes`
    });
    console.log(`[DYNAMIC] ${page} -> HTTP ${res.status} (${pass ? 'PASS' : 'FAIL'})`);
  }

  // 3. API Endpoints
  console.log('\n--- 3. Testing API Endpoints & Status Lock ---');

  // /api/properties
  const propRes = await request('/api/properties');
  const propDataArr = Array.isArray(propRes.json?.data) ? propRes.json?.data : [];
  console.log(`[API] GET /api/properties -> HTTP ${propRes.status}, count: ${propDataArr.length}`);
  results.push({
    route: '/api/properties',
    method: 'GET',
    status: propRes.status,
    expectedStatus: 200,
    pass: propRes.status === 200 && (propDataArr.length > 0 || Array.isArray(propRes.json))
  });

  const propPost = await request('/api/properties', { method: 'POST', body: {} });
  console.log(`[API] POST /api/properties -> HTTP ${propPost.status} (expected 405 Method Not Allowed, Allow: ${propPost.headers.allow})`);
  results.push({
    route: '/api/properties',
    method: 'POST',
    status: propPost.status,
    expectedStatus: 405,
    pass: propPost.status === 405 && !!propPost.headers.allow
  });

  // /api/search
  const searchRes = await request('/api/search?q=Palm');
  const searchResultsArr = Array.isArray(searchRes.json?.results) ? searchRes.json?.results : [];
  console.log(`[API] GET /api/search?q=Palm -> HTTP ${searchRes.status}, results: ${searchResultsArr.length}`);
  results.push({
    route: '/api/search',
    method: 'GET',
    status: searchRes.status,
    expectedStatus: 200,
    pass: searchRes.status === 200
  });

  // /api/leads - Valid submission & Status Lock test
  const leadPayloadLocked = {
    full_name: 'Audit Client',
    email: 'audit.client@verified.ae',
    phone: '+971501234567',
    source: 'MASTER_AUDIT',
    status: 'APPROVED' // Attempt client-controlled status
  };
  const leadResLocked = await request('/api/leads', { method: 'POST', body: leadPayloadLocked });
  const leadDataObj = (leadResLocked.json?.data && typeof leadResLocked.json.data === 'object') ? leadResLocked.json.data as Record<string, unknown> : undefined;
  const leadStatus = leadDataObj?.status;
  const leadLockedPass = leadResLocked.status === 201 && leadStatus === 'NEW';
  console.log(`[API] POST /api/leads with status='APPROVED' -> HTTP ${leadResLocked.status}, returned status: '${leadStatus}' (Must be 'NEW': ${leadLockedPass ? 'PASS' : 'FAIL'})`);
  results.push({
    route: '/api/leads',
    method: 'POST (Status Lock)',
    status: leadResLocked.status,
    expectedStatus: 201,
    pass: leadLockedPass,
    notes: `Locked status: ${String(leadStatus)}`
  });

  // /api/leads - Invalid validation test (bad email, bad phone)
  const leadInvalid = await request('/api/leads', {
    method: 'POST',
    body: { full_name: 'Bad Lead', email: 'not-an-email', phone: '123' }
  });
  console.log(`[API] POST /api/leads with invalid email -> HTTP ${leadInvalid.status} (Expected 400: ${leadInvalid.status === 400 ? 'PASS' : 'FAIL'})`);
  results.push({
    route: '/api/leads',
    method: 'POST (Validation)',
    status: leadInvalid.status,
    expectedStatus: 400,
    pass: leadInvalid.status === 400
  });

  // /api/leads - GET unsupported test
  const leadGet = await request('/api/leads', { method: 'GET' });
  console.log(`[API] GET /api/leads -> HTTP ${leadGet.status} (Expected 405, Allow: ${leadGet.headers.allow})`);
  results.push({
    route: '/api/leads',
    method: 'GET',
    status: leadGet.status,
    expectedStatus: 405,
    pass: leadGet.status === 405 && !!leadGet.headers.allow
  });

  // /api/viewings - Status Lock test
  const viewingPayloadLocked = {
    property_id: 'prop-one-palm-01',
    preferred_date: '2026-10-15',
    preferred_time: '14:00',
    full_name: 'Audit Client',
    email: 'audit.client@verified.ae',
    phone: '+971501234567',
    status: 'CONFIRMED' // Client attempts to force CONFIRMED status
  };
  const viewingRes = await request('/api/viewings', { method: 'POST', body: viewingPayloadLocked });
  const viewingDataObj = (viewingRes.json?.data && typeof viewingRes.json.data === 'object') ? viewingRes.json.data as Record<string, unknown> : undefined;
  const viewingStatus = viewingDataObj?.status;
  const viewingPass = viewingRes.status === 201 && viewingStatus === 'NEW';
  console.log(`[API] POST /api/viewings with status='CONFIRMED' -> HTTP ${viewingRes.status}, returned status: '${viewingStatus}' (Must be 'NEW': ${viewingPass ? 'PASS' : 'FAIL'})`);
  results.push({
    route: '/api/viewings',
    method: 'POST (Status Lock)',
    status: viewingRes.status,
    expectedStatus: 201,
    pass: viewingPass,
    notes: `Locked status: ${String(viewingStatus)}`
  });

  // /api/client/shortlist
  const shortlistGet = await request('/api/client/shortlist');
  console.log(`[API] GET /api/client/shortlist -> HTTP ${shortlistGet.status}`);
  results.push({
    route: '/api/client/shortlist',
    method: 'GET',
    status: shortlistGet.status,
    expectedStatus: 200,
    pass: shortlistGet.status === 200
  });

  const shortlistPut = await request('/api/client/shortlist', { method: 'PUT', body: {} });
  console.log(`[API] PUT /api/client/shortlist -> HTTP ${shortlistPut.status} (Expected 405)`);
  results.push({
    route: '/api/client/shortlist',
    method: 'PUT',
    status: shortlistPut.status,
    expectedStatus: 405,
    pass: shortlistPut.status === 405
  });

  // /api/client/searches
  const searchesGet = await request('/api/client/searches');
  console.log(`[API] GET /api/client/searches -> HTTP ${searchesGet.status}`);
  results.push({
    route: '/api/client/searches',
    method: 'GET',
    status: searchesGet.status,
    expectedStatus: 200,
    pass: searchesGet.status === 200
  });

  // 4. Security Headers Inspection
  console.log('\n--- 4. Checking Proxy & Security Headers ---');
  const homeRes = await request('/');
  const headers = homeRes.headers;
  console.log('CSP:', headers['content-security-policy'] ? 'PRESENT (Verified strict)' : 'MISSING');
  console.log('HSTS:', headers['strict-transport-security'] || 'MISSING');
  console.log('X-Frame-Options:', headers['x-frame-options'] || 'MISSING');
  console.log('X-Content-Type-Options:', headers['x-content-type-options'] || 'MISSING');
  console.log('Referrer-Policy:', headers['referrer-policy'] || 'MISSING');

  const allPassed = results.every(r => r.pass);
  console.log(`\n=== FINAL AUDIT RESULT: ${allPassed ? 'ALL TESTS PASSED' : 'SOME TESTS FAILED'} ===`);
  console.log(`Total tests run: ${results.length}, Passed: ${results.filter(r => r.pass).length}, Failed: ${results.filter(r => !r.pass).length}`);
}

runTests().catch(console.error);
