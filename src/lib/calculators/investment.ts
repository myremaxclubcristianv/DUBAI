export type DldMapCategory =
  | 'VILLA_OR_APARTMENT' // AED 250
  | 'UNIFIED_DUBAI_MUNICIPALITY' // AED 225
  | 'LAND_OUTSIDE_DUBAI_MUNICIPALITY' // AED 100

export const DLD_MAP_TARIFFS: Record<DldMapCategory, { amount: number; label: string; description: string }> = {
  VILLA_OR_APARTMENT: {
    amount: 250,
    label: 'AED 250 — Villas & Apartments',
    description: 'Statutory site plan map fee for completed residential villas and apartments.',
  },
  UNIFIED_DUBAI_MUNICIPALITY: {
    amount: 225,
    label: 'AED 225 — Unified Dubai Municipality Map',
    description: 'Unified planning map issued under Dubai Municipality authority.',
  },
  LAND_OUTSIDE_DUBAI_MUNICIPALITY: {
    amount: 100,
    label: 'AED 100 — Lands outside Dubai Municipality',
    description: 'Statutory map fee for land plots outside Dubai Municipality planning jurisdiction.',
  },
}

export interface AcquisitionCostBreakdown {
  purchase_price: number
  is_mortgage: boolean
  loan_amount: number
  property_type: 'apartment' | 'villa' | 'land' | 'commercial'
  map_category: DldMapCategory
  
  // DLD Transfer Fee (Statutory 4% total, customary 2% buyer share)
  dld_buyer_transfer_fee: number // 2%
  dld_seller_transfer_fee: number // 2%
  dld_total_transfer_fee: number // 4%
  
  // Buyer-side additional DLD / document fees (calculated separately)
  dld_title_deed_fee: number // AED 250
  dld_map_fee: number // AED 250 (villas/apartments) OR AED 225 (unified municipality) OR AED 100 (land outside DM)
  dld_knowledge_fee: number // AED 10
  dld_innovation_fee: number // AED 10
  dld_total_document_fees: number // AED 520 for villa/apt, AED 495 for DM unified, AED 370 for land outside DM
  
  // DLD Registration Trustee / Service Partner Fee (AED 4,000 / AED 2,000 + 5% VAT)
  trustee_fee_base: number // AED 4,000 or AED 2,000
  trustee_vat: number // AED 200 or AED 100 (5% VAT)
  trustee_fee: number // AED 4,200 or AED 2,100 (VAT inclusive)
  
  // Customary Brokerage (2% + 5% VAT = 2.1%)
  brokerage_fee_base: number // 2%
  brokerage_vat: number // 5% VAT on commission
  brokerage_fee: number // 2.1% net
  
  // Mortgage Registration & Processing (if isMortgage)
  mortgage_registration_statutory_fee: number // 0.25% of mortgage value
  mortgage_document_fees: number // AED 250 title deed + AED 10 knowledge + AED 10 innovation = AED 270
  mortgage_total_dld_fee: number // 0.25% + document fees
  bank_processing_fee: number // 1% of loan + 5% VAT
  valuation_fee: number // AED 2,500 + 5% VAT = AED 2,625
  
  transaction_type: 'ready' | 'off_plan'
  
  // Categorized Regulatory Totals
  statutory_government_dld_total: number // DLD Transfer / Oqood + DLD Documents + (Mortgage DLD Reg if applicable)
  regulated_trustee_total: number // Trustee Base + VAT (AED 0 for off-plan)
  commercial_third_party_total: number // Brokerage + Bank Processing + Valuation
  total_vat_component: number // Itemized 5% VAT across Trustee, Brokerage, and Banking
  
  // Legacy / Aliased accessors for backward compatibility
  dld_transfer_fee: number
  dld_admin_fee: number
  mortgage_registration_fee: number
  total_statutory_fees: number
  total_acquisition_cost: number
  fees_as_percentage_of_price: number
  
  line_items: {
    label: string
    amount: number
    legal_source: string
    vat_included: boolean
    vat_amount: number
    category: 'GOVERNMENT' | 'TRUSTEE' | 'AGENCY' | 'BANK'
    regulatory_tier: 'MANDATORY_STATUTORY' | 'REGULATED_PARTNER' | 'COMMERCIAL_MARKET_PRACTICE'
    assumptions?: string
  }[]
}

export function calculateAcquisitionCosts(
  purchasePrice: number,
  isMortgage: boolean = false,
  loanToValuePct: number = 75,
  propertyType: 'apartment' | 'villa' | 'land' | 'commercial' = 'apartment',
  buyerTransferSharePct: number = 2.0,
  mapCategory?: DldMapCategory,
  transactionType: 'ready' | 'off_plan' = 'ready'
): AcquisitionCostBreakdown {
  const resolvedMapCategory: DldMapCategory =
    mapCategory ||
    (propertyType === 'land' ? 'UNIFIED_DUBAI_MUNICIPALITY' : 'VILLA_OR_APARTMENT')

  if (!purchasePrice || purchasePrice <= 0) {
    return {
      purchase_price: 0,
      is_mortgage: isMortgage,
      loan_amount: 0,
      property_type: propertyType,
      transaction_type: transactionType,
      map_category: resolvedMapCategory,
      dld_buyer_transfer_fee: 0,
      dld_seller_transfer_fee: 0,
      dld_total_transfer_fee: 0,
      dld_title_deed_fee: 0,
      dld_map_fee: 0,
      dld_knowledge_fee: 0,
      dld_innovation_fee: 0,
      dld_total_document_fees: 0,
      trustee_fee_base: 0,
      trustee_vat: 0,
      trustee_fee: 0,
      brokerage_fee_base: 0,
      brokerage_vat: 0,
      brokerage_fee: 0,
      mortgage_registration_statutory_fee: 0,
      mortgage_document_fees: 0,
      mortgage_total_dld_fee: 0,
      bank_processing_fee: 0,
      valuation_fee: 0,
      statutory_government_dld_total: 0,
      regulated_trustee_total: 0,
      commercial_third_party_total: 0,
      total_vat_component: 0,
      dld_transfer_fee: 0,
      dld_admin_fee: 0,
      mortgage_registration_fee: 0,
      total_statutory_fees: 0,
      total_acquisition_cost: 0,
      fees_as_percentage_of_price: 0,
      line_items: [],
    }
  }

  const isOffPlan = transactionType === 'off_plan'

  // 1. DLD Transfer / Oqood Fee:
  // Ready: Total 4% statutory under Law No. 7/2006 & Res. 30/2013 (customarily 2% buyer + 2% seller)
  // Off-plan: Total 4% statutory under Law No. 13/2008 (standard practice: 4% paid by buyer upon booking)
  const dld_total_transfer_fee = purchasePrice * 0.04
  const dld_buyer_transfer_fee = isOffPlan
    ? purchasePrice * 0.04
    : purchasePrice * (buyerTransferSharePct / 100)
  const dld_seller_transfer_fee = isOffPlan ? 0 : dld_total_transfer_fee - dld_buyer_transfer_fee

  // 2. DLD Additional Document Fees
  // Ready: Title Deed (AED 250) + Map (AED 250/100/225) + Knowledge (AED 10) + Innovation (AED 10) = AED 520
  // Off-plan: Oqood Certificate (AED 1,000) + Knowledge (AED 10) + Innovation (AED 10) = AED 1,020
  const dld_title_deed_fee = isOffPlan ? 0 : 250
  let dld_map_fee = isOffPlan ? 0 : 250
  if (!isOffPlan) {
    if (resolvedMapCategory === 'LAND_OUTSIDE_DUBAI_MUNICIPALITY') {
      dld_map_fee = 100
    } else if (resolvedMapCategory === 'UNIFIED_DUBAI_MUNICIPALITY') {
      dld_map_fee = 225
    } else {
      dld_map_fee = 250
    }
  }
  const dld_knowledge_fee = 10
  const dld_innovation_fee = 10
  const dld_total_document_fees = isOffPlan
    ? 1000 + dld_knowledge_fee + dld_innovation_fee // AED 1,020
    : dld_title_deed_fee + dld_map_fee + dld_knowledge_fee + dld_innovation_fee // AED 520 / 495 / 370

  // 3. DLD Registration Trustee / Service Partner Fee:
  // Ready: AED 4,000 + 5% VAT (AED 4,200) for price >= AED 500,000; AED 2,000 + 5% VAT for < AED 500k
  // Off-plan: AED 0 (Developer registers directly through DLD Mollak/Oqood developer portal)
  const trustee_fee_base = isOffPlan ? 0 : purchasePrice >= 500000 ? 4000 : 2000
  const trustee_vat = trustee_fee_base * 0.05
  const trustee_fee = trustee_fee_base + trustee_vat

  // 4. Brokerage Commission:
  // Ready: 2% of price + 5% VAT (Law No. 85 of 2006 market practice)
  // Off-plan: AED 0 to buyer (Commercial standard: developer pays broker commission directly)
  const brokerage_fee_base = isOffPlan ? 0 : purchasePrice * 0.02
  const brokerage_vat = brokerage_fee_base * 0.05
  const brokerage_fee = brokerage_fee_base + brokerage_vat

  // 5. Mortgage specific statutory and banking costs
  let loan_amount = 0
  let mortgage_registration_statutory_fee = 0
  let mortgage_document_fees = 0
  let mortgage_total_dld_fee = 0
  let bank_processing_fee = 0
  let valuation_fee = 0

  if (isMortgage) {
    const effectiveLtv = isOffPlan ? Math.min(loanToValuePct, 50) : loanToValuePct
    loan_amount = purchasePrice * (effectiveLtv / 100)
    // DLD Mortgage Reg statutory fee: 0.25% of mortgage value
    mortgage_registration_statutory_fee = loan_amount * 0.0025
    // Mortgage document fees: AED 250 title deed + AED 10 knowledge + AED 10 innovation
    mortgage_document_fees = 250 + 10 + 10
    mortgage_total_dld_fee = mortgage_registration_statutory_fee + mortgage_document_fees
    // Bank processing fee: 1% of loan + 5% VAT
    bank_processing_fee = loan_amount * 0.01 * 1.05
    // Valuation fee: AED 2,500 + 5% VAT
    valuation_fee = 2500 * 1.05
  }

  const bank_processing_vat = isMortgage ? loan_amount * 0.01 * 0.05 : 0
  const valuation_vat = isMortgage ? 2500 * 0.05 : 0
  const total_vat_component = trustee_vat + brokerage_vat + bank_processing_vat + valuation_vat
  const statutory_government_dld_total = dld_buyer_transfer_fee + dld_total_document_fees + mortgage_total_dld_fee
  const regulated_trustee_total = trustee_fee
  const commercial_third_party_total = brokerage_fee + bank_processing_fee + valuation_fee

  const total_statutory_fees =
    statutory_government_dld_total +
    regulated_trustee_total +
    commercial_third_party_total

  const total_acquisition_cost = purchasePrice + total_statutory_fees
  const fees_as_percentage_of_price = (total_statutory_fees / purchasePrice) * 100

  const line_items: AcquisitionCostBreakdown['line_items'] = isOffPlan
    ? [
        {
          label: 'DLD Oqood Statutory Registration Fee (4.0% statutory under Law No. 13/2008)',
          amount: dld_buyer_transfer_fee,
          legal_source: 'Dubai Law No. 13 of 2008 & Law No. 7 of 2013 (Interim Property Register)',
          vat_included: false,
          vat_amount: 0,
          category: 'GOVERNMENT',
          regulatory_tier: 'MANDATORY_STATUTORY',
          assumptions: 'Statutory 4% registration in the interim property register (Oqood). Exempt from UAE VAT under Federal Decree-Law No. 8/2017. Standard off-plan practice requires 100% payment by purchaser upon booking unless developer runs a fee-waiver promotion.',
        },
        {
          label: 'DLD Oqood Certificate & Administrative Tariffs (AED 1,000 Certificate + AED 20 Knowledge/Innovation)',
          amount: dld_total_document_fees,
          legal_source: 'Official DLD Oqood Tariff Schedule (Executive Council Resolution No. 30 of 2013)',
          vat_included: false,
          vat_amount: 0,
          category: 'GOVERNMENT',
          regulatory_tier: 'MANDATORY_STATUTORY',
          assumptions: 'Statutory administrative fee for issuing electronic Oqood registration certificate and recording in interim registry.',
        },
        {
          label: 'Registration Trustee Partner Fee: Not Applicable (AED 0)',
          amount: 0,
          legal_source: 'DLD Developer Self-Service Portal Regulations',
          vat_included: false,
          vat_amount: 0,
          category: 'TRUSTEE',
          regulatory_tier: 'REGULATED_PARTNER',
          assumptions: 'Registration Trustee partner fees do not apply to off-plan transactions; developer registers purchase directly via DLD Mollak/Oqood portal.',
        },
        {
          label: 'Agency Brokerage Commission: Standard AED 0 Buyer Cost (Developer Paid)',
          amount: 0,
          legal_source: 'Standard UAE Real Estate Commercial Market Practice',
          vat_included: false,
          vat_amount: 0,
          category: 'AGENCY',
          regulatory_tier: 'COMMERCIAL_MARKET_PRACTICE',
          assumptions: 'In Dubai off-plan developments, marketing agency commissions are paid directly by the master developer, not the individual buyer.',
        },
      ]
    : [
        {
          label: `Buyer DLD Transfer Fee (${buyerTransferSharePct.toFixed(1)}% contractual allocation of 4% statutory fee)`,
          amount: dld_buyer_transfer_fee,
          legal_source: 'Dubai Law No. 7 of 2006 & Executive Council Resolution No. 30 of 2013',
          vat_included: false,
          vat_amount: 0,
          category: 'GOVERNMENT',
          regulatory_tier: 'MANDATORY_STATUTORY',
          assumptions: 'Exempt from UAE VAT under Federal Decree-Law No. 8/2017. Statutory DLD transfer fee is 4% total; allocation between buyer and seller is governed contractually in the sales agreement (statutory default is joint/equal split unless agreed otherwise).',
        },
        {
          label: `DLD Title Deed & Document Tariffs (AED 250 Title + AED ${dld_map_fee} Map + AED 20 Knowledge/Innovation)`,
          amount: dld_total_document_fees,
          legal_source: `Official DLD Property Sale Registration Service Tariff (Law No. 7/2006 & Decree No. 43/2013)`,
          vat_included: false,
          vat_amount: 0,
          category: 'GOVERNMENT',
          regulatory_tier: 'MANDATORY_STATUTORY',
          assumptions: 'Statutory government administrative tariffs (Title deed AED 250 + Map AED 250/100/225 + Knowledge AED 10 + Innovation AED 10). Exempt from VAT.',
        },
        {
          label: `DLD Registration Trustee Service Partner Fee (AED ${trustee_fee_base.toLocaleString()} + 5% VAT)`,
          amount: trustee_fee,
          legal_source: 'Official DLD Property Sale Registration Service Tariff (Partner Office Schedule)',
          vat_included: true,
          vat_amount: trustee_vat,
          category: 'TRUSTEE',
          regulatory_tier: 'REGULATED_PARTNER',
          assumptions: 'Regulated tariff for DLD-authorized Registration Trustee offices (AED 4,000 for price >= 500k, AED 2,000 for price < 500k). Standard 5% UAE VAT applies.',
        },
        {
          label: 'Customary Real Estate Brokerage Assumption (2.0% + 5% VAT)',
          amount: brokerage_fee,
          legal_source: 'Dubai Law No. 85 of 2006 (Real Estate Brokers Register)',
          vat_included: true,
          vat_amount: brokerage_vat,
          category: 'AGENCY',
          regulatory_tier: 'COMMERCIAL_MARKET_PRACTICE',
          assumptions: 'Commercial agency commission practice (standard 2% of transaction price + 5% VAT). Commercial practice, negotiable between parties, not a statutory tax.',
        },
      ]

  if (isMortgage) {
    line_items.push(
      {
        label: `DLD Mortgage Registration Statutory Fee (0.25% + AED ${mortgage_document_fees} tariffs)`,
        amount: mortgage_total_dld_fee,
        legal_source: 'Dubai Law No. 14 of 2008 & Official DLD Mortgage Registration Tariff',
        vat_included: false,
        vat_amount: 0,
        category: 'GOVERNMENT',
        regulatory_tier: 'MANDATORY_STATUTORY',
        assumptions: 'Official DLD mortgage registration fee (0.25% of loan amount + AED 250 title deed + AED 20 Knowledge/Innovation fees). Exempt from VAT.',
      },
      {
        label: 'Bank Loan Processing Fee (1.0% of loan + 5% VAT)',
        amount: bank_processing_fee,
        legal_source: 'UAE Commercial Banking Discretionary Tariff (CBUAE Consumer Protection Standards)',
        vat_included: true,
        vat_amount: bank_processing_vat,
        category: 'BANK',
        regulatory_tier: 'COMMERCIAL_MARKET_PRACTICE',
        assumptions: 'Commercial bank loan arrangement fee (standard 1% of loan amount + 5% VAT). Subject to commercial bank promotional waivers and caps.',
      },
      {
        label: 'Independent Property Valuation Fee',
        amount: valuation_fee,
        legal_source: 'UAE Banking Mortgage Valuation Standard (RICS accredited valuation)',
        vat_included: true,
        vat_amount: valuation_vat,
        category: 'BANK',
        regulatory_tier: 'COMMERCIAL_MARKET_PRACTICE',
        assumptions: 'Commercial valuation fee paid to bank-appointed RICS-certified surveyor (typically AED 2,500 + 5% VAT).',
      }
    )
  }

  return {
    purchase_price: purchasePrice,
    is_mortgage: isMortgage,
    loan_amount,
    property_type: propertyType,
    transaction_type: transactionType,
    map_category: resolvedMapCategory,
    dld_buyer_transfer_fee,
    dld_seller_transfer_fee,
    dld_total_transfer_fee,
    dld_title_deed_fee,
    dld_map_fee,
    dld_knowledge_fee,
    dld_innovation_fee,
    dld_total_document_fees,
    trustee_fee_base,
    trustee_vat,
    trustee_fee,
    brokerage_fee_base,
    brokerage_vat,
    brokerage_fee,
    mortgage_registration_statutory_fee,
    mortgage_document_fees,
    mortgage_total_dld_fee,
    bank_processing_fee,
    valuation_fee,
    statutory_government_dld_total,
    regulated_trustee_total,
    commercial_third_party_total,
    total_vat_component,
    dld_transfer_fee: dld_buyer_transfer_fee,
    dld_admin_fee: dld_total_document_fees,
    mortgage_registration_fee: mortgage_total_dld_fee,
    total_statutory_fees,
    total_acquisition_cost,
    fees_as_percentage_of_price,
    line_items,
  }
}

export interface YieldAnalysisResult {
  purchase_price: number
  total_acquisition_cost: number
  annual_gross_rent: number
  area_sqft: number
  
  service_charge_annual: number
  maintenance_reserve_annual: number
  property_management_annual: number
  insurance_annual: number
  
  total_annual_expenses: number
  net_operating_income: number // NOI
  
  gross_rental_yield_pct: number // (Rent / Total Cost) * 100
  net_rental_yield_pct: number // (NOI / Total Cost) * 100
  
  formula_inputs_exposed: {
    gross_yield_formula: string
    net_yield_formula: string
    source_attribution: string
  }
}

export function calculateYieldAnalysis(params: {
  purchasePrice: number
  annualRent: number
  areaSqft?: number
  serviceChargePerSqft?: number
  maintenanceReservePct?: number // e.g. 5%
  managementFeePct?: number // e.g. 5%
  insuranceAnnual?: number
}): YieldAnalysisResult {
  const {
    purchasePrice,
    annualRent,
    areaSqft = 1000,
    serviceChargePerSqft = 18,
    maintenanceReservePct = 5,
    managementFeePct = 5,
    insuranceAnnual = 1500,
  } = params

  const acquisition = calculateAcquisitionCosts(purchasePrice, false)
  const total_acquisition_cost = acquisition.total_acquisition_cost || purchasePrice

  const service_charge_annual = (areaSqft || 0) * (serviceChargePerSqft || 0)
  const maintenance_reserve_annual = annualRent * (maintenanceReservePct / 100)
  const property_management_annual = annualRent * (managementFeePct / 100)
  const insurance_annual = insuranceAnnual || 0

  const total_annual_expenses =
    service_charge_annual +
    maintenance_reserve_annual +
    property_management_annual +
    insurance_annual

  const net_operating_income = Math.max(0, annualRent - total_annual_expenses)

  const gross_rental_yield_pct = total_acquisition_cost > 0 ? (annualRent / total_acquisition_cost) * 100 : 0
  const net_rental_yield_pct = total_acquisition_cost > 0 ? (net_operating_income / total_acquisition_cost) * 100 : 0

  return {
    purchase_price: purchasePrice,
    total_acquisition_cost,
    annual_gross_rent: annualRent,
    area_sqft: areaSqft,
    service_charge_annual,
    maintenance_reserve_annual,
    property_management_annual,
    insurance_annual,
    total_annual_expenses,
    net_operating_income,
    gross_rental_yield_pct,
    net_rental_yield_pct,
    formula_inputs_exposed: {
      gross_yield_formula: `(Annual Rent [AED ${annualRent.toLocaleString()}] / Total Acquisition Cost [AED ${total_acquisition_cost.toLocaleString()}]) × 100`,
      net_yield_formula: `(Net Operating Income [AED ${net_operating_income.toLocaleString()}] / Total Acquisition Cost [AED ${total_acquisition_cost.toLocaleString()}]) × 100`,
      source_attribution: 'Calculated using verified statutory DLD fees and user-entered rental parameters.',
    },
  }
}

export interface MortgageResult {
  purchase_price: number
  down_payment_aed: number
  down_payment_pct: number
  loan_amount: number
  interest_rate_pct: number
  tenure_years: number
  monthly_payment_aed: number
  total_interest_payable: number
  total_lifetime_cost: number
  initial_equity_outlay: number // Down payment + total acquisition fees
  ltv_ceiling_info: string
  max_ltv_pct: number
  min_down_payment_pct: number
  is_ltv_compliant: boolean
  statutory_citation: string
  framework_type: 'STATUTORY_CBUAE_RULEBOOK' | 'COMMERCIAL_BANK_DISCRETIONARY'
  amortization_schedule_sample: {
    year: number
    principal_paid: number
    interest_paid: number
    remaining_balance: number
  }[]
}

export type MortgageBorrowerCategory =
  | 'EXPAT_FIRST_HOME'
  | 'EXPAT_FIRST_HOME_LE5M'
  | 'EXPAT_FIRST_HOME_GT5M'
  | 'EXPAT_SUBSEQUENT'
  | 'UAE_NATIONAL'
  | 'UAE_NATIONAL_FIRST_HOME_LE5M'
  | 'UAE_NATIONAL_FIRST_HOME_GT5M'
  | 'UAE_NATIONAL_SUBSEQUENT'
  | 'OFF_PLAN'
  | 'NON_RESIDENT'

export interface CbuaeLtvRule {
  maxLtvPct: number
  minDownPaymentPct: number
  label: string
  frameworkType: 'STATUTORY_CBUAE_RULEBOOK' | 'COMMERCIAL_BANK_DISCRETIONARY'
  source: string
  appliesTo: string
  legalNotes?: string
}

export function getCbuaeLtvRule(
  buyerType: MortgageBorrowerCategory,
  purchasePrice: number,
  isOffPlan: boolean = false
): CbuaeLtvRule {
  if (isOffPlan || buyerType === 'OFF_PLAN') {
    return {
      maxLtvPct: 50,
      minDownPaymentPct: 50,
      frameworkType: 'STATUTORY_CBUAE_RULEBOOK',
      label: 'Off-Plan Property (All Buyers)',
      source: 'CBUAE Mortgage Regulations Notice No. 3871/2013 (Article 4 - Off-plan financing cap)',
      appliesTo: 'Maximum 50% LTV statutory ceiling regardless of nationality or first-time purchase status',
      legalNotes: 'Mandatory federal regulatory ceiling enacted under CBUAE Notice No. 3871/2013 Article 4. No commercial bank may exceed 50% LTV for properties under construction.',
    }
  }

  const isOver5M = purchasePrice > 5000000

  switch (buyerType) {
    case 'UAE_NATIONAL':
    case 'UAE_NATIONAL_FIRST_HOME_LE5M':
    case 'UAE_NATIONAL_FIRST_HOME_GT5M': {
      if (isOver5M) {
        return {
          maxLtvPct: 75,
          minDownPaymentPct: 25,
          frameworkType: 'STATUTORY_CBUAE_RULEBOOK',
          label: 'UAE National — First Home (> AED 5M)',
          source: 'Central Bank of the UAE Mortgage Regulations Notice No. 3871/2013 (Article 2)',
          appliesTo: 'Maximum 75% LTV (Minimum 25% down payment for properties over AED 5 Million)',
          legalNotes: 'CBUAE statutory ceiling under Notice No. 3871/2013 Article 2.',
        }
      }
      return {
        maxLtvPct: 85,
        minDownPaymentPct: 15,
        frameworkType: 'STATUTORY_CBUAE_RULEBOOK',
        label: 'UAE National — First Home (≤ AED 5M)',
        source: 'Central Bank of the UAE Mortgage Regulations Notice No. 3871/2013 (Article 2)',
        appliesTo: 'Maximum 85% LTV (Minimum 15% down payment for properties up to AED 5 Million)',
        legalNotes: 'CBUAE statutory ceiling under Notice No. 3871/2013 Article 2.',
      }
    }
    case 'UAE_NATIONAL_SUBSEQUENT':
      return {
        maxLtvPct: 65,
        minDownPaymentPct: 35,
        frameworkType: 'STATUTORY_CBUAE_RULEBOOK',
        label: 'UAE National — Subsequent / Investment Property',
        source: 'Central Bank of the UAE Mortgage Regulations Notice No. 3871/2013 (Article 2)',
        appliesTo: 'Maximum 65% LTV (Minimum 35% down payment on second and subsequent acquisitions)',
        legalNotes: 'CBUAE statutory ceiling under Notice No. 3871/2013 Article 2.',
      }
    case 'EXPAT_SUBSEQUENT':
      return {
        maxLtvPct: 60,
        minDownPaymentPct: 40,
        frameworkType: 'STATUTORY_CBUAE_RULEBOOK',
        label: 'Expatriate Resident — Subsequent / Investment Property',
        source: 'Central Bank of the UAE Mortgage Regulations Notice No. 3871/2013 (Article 3)',
        appliesTo: 'Maximum 60% LTV (Minimum 40% down payment on second and subsequent acquisitions)',
        legalNotes: 'CBUAE statutory ceiling under Notice No. 3871/2013 Article 3.',
      }
    case 'NON_RESIDENT':
      return {
        maxLtvPct: 50,
        minDownPaymentPct: 50,
        frameworkType: 'COMMERCIAL_BANK_DISCRETIONARY',
        label: 'Non-Resident International Buyer (Discretionary Bank Policy)',
        source: 'UAE Commercial Banking Discretionary Guidelines (No statutory CBUAE cap in Notice No. 3871/2013)',
        appliesTo: 'Discretionary underwriting criteria by commercial banks (typically 50% to 60% LTV; subject to individual bank risk appetite, foreign income audit, and country tier)',
        legalNotes: 'Notice No. 3871/2013 establishes statutory caps for UAE Nationals and UAE Expatriate Residents. Financing terms for non-residents without UAE residency are set by individual lending institutions, not mandated by federal statutory decree.',
      }
    case 'EXPAT_FIRST_HOME':
    case 'EXPAT_FIRST_HOME_LE5M':
    case 'EXPAT_FIRST_HOME_GT5M':
    default: {
      if (isOver5M) {
        return {
          maxLtvPct: 70,
          minDownPaymentPct: 30,
          frameworkType: 'STATUTORY_CBUAE_RULEBOOK',
          label: 'Expatriate Resident — First Home (> AED 5M)',
          source: 'Central Bank of the UAE Mortgage Regulations Notice No. 3871/2013 (Article 3)',
          appliesTo: 'Maximum 70% LTV (Minimum 30% down payment for properties over AED 5 Million)',
          legalNotes: 'CBUAE statutory ceiling under Notice No. 3871/2013 Article 3.',
        }
      }
      return {
        maxLtvPct: 80,
        minDownPaymentPct: 20,
        frameworkType: 'STATUTORY_CBUAE_RULEBOOK',
        label: 'Expatriate Resident — First Home (≤ AED 5M)',
        source: 'Central Bank of the UAE Mortgage Regulations Notice No. 3871/2013 (Article 3)',
        appliesTo: 'Maximum 80% LTV (Minimum 20% down payment for properties up to AED 5 Million)',
        legalNotes: 'CBUAE statutory ceiling under Notice No. 3871/2013 Article 3.',
      }
    }
  }
}

/**
 * Actuarial remaining mortgage balance formula:
 * B_k = P * ((1+r)^N - (1+r)^k) / ((1+r)^N - 1)
 * where r = monthlyRate, N = totalMonths, k = holdingMonths
 */
export function calculateRemainingMortgageBalance(
  principal: number,
  annualInterestRatePct: number,
  tenureYears: number,
  holdingYears: number
): number {
  if (holdingYears >= tenureYears) return 0
  if (holdingYears <= 0) return principal
  if (principal <= 0) return 0

  const monthlyRate = annualInterestRatePct / 100 / 12
  const totalMonths = tenureYears * 12
  const holdingMonths = Math.min(totalMonths, Math.round(holdingYears * 12))

  if (monthlyRate === 0) {
    return Math.round(principal * (1 - holdingMonths / totalMonths))
  }

  const factorTotal = Math.pow(1 + monthlyRate, totalMonths)
  const factorHolding = Math.pow(1 + monthlyRate, holdingMonths)
  const balance = principal * ((factorTotal - factorHolding) / (factorTotal - 1))
  return Math.max(0, Math.round(balance))
}

export function calculateMortgage(params: {
  purchasePrice: number
  downPaymentPct: number // e.g. 20%
  annualInterestRatePct: number // e.g. 4.5%
  tenureYears: number // e.g. 25
  buyerType?: MortgageBorrowerCategory
  isOffPlan?: boolean
}): MortgageResult {
  const {
    purchasePrice,
    downPaymentPct,
    annualInterestRatePct,
    tenureYears,
    buyerType = 'EXPAT_FIRST_HOME',
    isOffPlan = false,
  } = params

  const ltvRule = getCbuaeLtvRule(buyerType, purchasePrice, isOffPlan)
  const is_ltv_compliant = downPaymentPct >= ltvRule.minDownPaymentPct

  const down_payment_aed = purchasePrice * (downPaymentPct / 100)
  const loan_amount = Math.max(0, purchasePrice - down_payment_aed)

  const monthlyRate = annualInterestRatePct / 100 / 12
  const totalMonths = tenureYears * 12

  let monthly_payment_aed = 0
  if (totalMonths > 0 && loan_amount > 0) {
    if (monthlyRate > 0) {
      monthly_payment_aed =
        (loan_amount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1)
    } else {
      // 0% Interest: pure principal amortization
      monthly_payment_aed = loan_amount / totalMonths
    }
  }

  const rounded_monthly_payment = Math.round(monthly_payment_aed)
  const total_lifetime_payments = rounded_monthly_payment * totalMonths
  const total_interest_payable = Math.max(0, total_lifetime_payments - loan_amount)

  const acquisition = calculateAcquisitionCosts(purchasePrice, true, 100 - downPaymentPct)
  const initial_equity_outlay = down_payment_aed + acquisition.total_statutory_fees

  const ltv_ceiling_info = `${ltvRule.label}: Ceiling ${ltvRule.maxLtvPct}% LTV (Min. ${ltvRule.minDownPaymentPct}% down payment). ${ltvRule.appliesTo}.`

  // Calculate annual sample amortization breakdown for first 5 years and year 10, 15, 20, 25
  const amortization_schedule_sample: MortgageResult['amortization_schedule_sample'] = []
  let balance = loan_amount
  for (let year = 1; year <= tenureYears; year++) {
    let yearInterest = 0
    let yearPrincipal = 0
    for (let m = 0; m < 12; m++) {
      const monthInterest = balance * monthlyRate
      const monthPrincipal = monthly_payment_aed - monthInterest
      yearInterest += monthInterest
      yearPrincipal += monthPrincipal
      balance = Math.max(0, balance - monthPrincipal)
    }
    if (year <= 5 || year === 10 || year === 15 || year === 20 || year === tenureYears) {
      amortization_schedule_sample.push({
        year,
        principal_paid: Math.round(yearPrincipal),
        interest_paid: Math.round(yearInterest),
        remaining_balance: Math.round(balance),
      })
    }
  }

  return {
    purchase_price: purchasePrice,
    down_payment_aed,
    down_payment_pct: downPaymentPct,
    loan_amount,
    interest_rate_pct: annualInterestRatePct,
    tenure_years: tenureYears,
    monthly_payment_aed: Math.round(monthly_payment_aed),
    total_interest_payable: Math.round(total_interest_payable),
    total_lifetime_cost: Math.round(total_lifetime_payments + down_payment_aed),
    initial_equity_outlay: Math.round(initial_equity_outlay),
    ltv_ceiling_info,
    max_ltv_pct: ltvRule.maxLtvPct,
    min_down_payment_pct: ltvRule.minDownPaymentPct,
    is_ltv_compliant,
    statutory_citation: ltvRule.source,
    framework_type: ltvRule.frameworkType,
    amortization_schedule_sample,
  }
}

export interface CashFlowResult {
  annual_gross_rent: number
  net_operating_income: number
  annual_debt_service: number
  net_annual_cash_flow: number
  monthly_net_cash_flow: number
  initial_equity_outlay: number
  cash_on_cash_return_pct: number
  break_even_years: number
}

export function calculateCashFlow(params: {
  purchasePrice: number
  downPaymentPct: number
  annualInterestRatePct: number
  tenureYears: number
  annualRent: number
  serviceChargeAnnual: number
  maintenanceReserveAnnual?: number
  propertyManagementAnnual?: number
  insuranceAnnual?: number
}): CashFlowResult {
  const {
    purchasePrice,
    downPaymentPct,
    annualInterestRatePct,
    tenureYears,
    annualRent,
    serviceChargeAnnual,
    maintenanceReserveAnnual = annualRent * 0.05,
    propertyManagementAnnual = annualRent * 0.05,
    insuranceAnnual = 1500,
  } = params

  const mortgage = calculateMortgage({
    purchasePrice,
    downPaymentPct,
    annualInterestRatePct,
    tenureYears,
  })

  const total_expenses =
    serviceChargeAnnual +
    maintenanceReserveAnnual +
    propertyManagementAnnual +
    insuranceAnnual

  const net_operating_income = Math.max(0, annualRent - total_expenses)
  const annual_debt_service = mortgage.monthly_payment_aed * 12
  const net_annual_cash_flow = net_operating_income - annual_debt_service
  const monthly_net_cash_flow = net_annual_cash_flow / 12

  const initial_equity_outlay = mortgage.initial_equity_outlay
  const cash_on_cash_return_pct =
    initial_equity_outlay > 0 ? (net_annual_cash_flow / initial_equity_outlay) * 100 : 0
  const break_even_years =
    net_annual_cash_flow > 0 ? initial_equity_outlay / net_annual_cash_flow : 0

  return {
    annual_gross_rent: annualRent,
    net_operating_income,
    annual_debt_service,
    net_annual_cash_flow,
    monthly_net_cash_flow,
    initial_equity_outlay,
    cash_on_cash_return_pct,
    break_even_years: Number(break_even_years.toFixed(1)),
  }
}

export interface RoTaxCalculationResult {
  fiscalYear: number
  grossRentEur: number
  grossRentRon: number
  eurToRonRate: number
  deductibleFlatExpenseAllowanceRon: number // 20%
  taxableBaseRon: number // 80% of gross
  incomeTaxRon: number // 10% of taxableBase = 8% of gross
  incomeTaxEur: number
  minWageMonthlyRon: number // 4,050 RON for FY 2026 (HG 1506/2024)
  cassThreshold6Ron: number // 24,300 RON
  cassThreshold12Ron: number // 48,600 RON
  cassThreshold24Ron: number // 97,200 RON
  cassDueRon: number
  cassDueEur: number
  cassBracketInfo: string
  totalTaxRon: number
  totalTaxEur: number
  effectiveTaxRatePct: number
  incomeAggregationAssumption: string
  sourceVerificationDate: string
  statutoryCitations: {
    incomeTax: string
    cass: string
    minWage: string
  }
}

/**
 * Romanian Rental Taxation Calculator (Cedarea Folosinței Bunurilor)
 * Enforces Romanian Fiscal Code (Law 227/2015, Art. 84 & Art. 170 amended by OUG 115/2023)
 * For FY 2026, baseline gross minimum wage is 4,050 RON/mo under HG nr. 1506/2024.
 * CASS thresholds:
 * - 6 min wages: 24,300 RON -> 2,430 RON CASS
 * - 12 min wages: 48,600 RON -> 4,860 RON CASS
 * - 24 min wages: 97,200 RON -> 9,720 RON CASS (cap)
 */
export function calculateRomanianRentalTax(
  grossEur: number,
  eurToRon: number = 4.9765,
  fiscalYear: number = 2026
): RoTaxCalculationResult {
  const minWageMonthlyRon = fiscalYear === 2026 ? 4050 : 3700
  const grossRentRon = grossEur * eurToRon
  const deductibleFlatExpenseAllowanceRon = grossRentRon * 0.2
  const taxableBaseRon = grossRentRon * 0.8
  const incomeTaxRon = taxableBaseRon * 0.1
  const incomeTaxEur = incomeTaxRon / eurToRon

  const cassThreshold6Ron = 6 * minWageMonthlyRon // 24,300 RON in FY 2026
  const cassThreshold12Ron = 12 * minWageMonthlyRon // 48,600 RON in FY 2026
  const cassThreshold24Ron = 24 * minWageMonthlyRon // 97,200 RON in FY 2026

  let cassDueRon = 0
  let cassBracketInfo = `Sub plafonul de 6 salarii minime (< ${cassThreshold6Ron.toLocaleString()} RON) — CASS 0 RON`

  // Art. 170 alin. (2) lit. d) din Legea 227/2015 Codul Fiscal (venitul net din cedarea folosinței bunurilor)
  if (taxableBaseRon >= cassThreshold24Ron) {
    cassDueRon = cassThreshold24Ron * 0.1 // 9,720 RON in FY 2026
    cassBracketInfo = `Plafon maxim 24 salarii minime (≥ ${cassThreshold24Ron.toLocaleString()} RON) — CASS ${cassDueRon.toLocaleString()} RON/an`
  } else if (taxableBaseRon >= cassThreshold12Ron) {
    cassDueRon = cassThreshold12Ron * 0.1 // 4,860 RON in FY 2026
    cassBracketInfo = `Plafon 12 salarii minime (${cassThreshold12Ron.toLocaleString()} – ${cassThreshold24Ron.toLocaleString()} RON) — CASS ${cassDueRon.toLocaleString()} RON/an`
  } else if (taxableBaseRon >= cassThreshold6Ron) {
    cassDueRon = cassThreshold6Ron * 0.1 // 2,430 RON in FY 2026
    cassBracketInfo = `Plafon 6 salarii minime (${cassThreshold6Ron.toLocaleString()} – ${cassThreshold12Ron.toLocaleString()} RON) — CASS ${cassDueRon.toLocaleString()} RON/an`
  }

  const cassDueEur = cassDueRon / eurToRon
  const totalTaxRon = incomeTaxRon + cassDueRon
  const totalTaxEur = incomeTaxEur + cassDueEur
  const effectiveTaxRatePct = grossRentRon > 0 ? (totalTaxRon / grossRentRon) * 100 : 0

  return {
    fiscalYear,
    grossRentEur: grossEur,
    grossRentRon,
    eurToRonRate: eurToRon,
    deductibleFlatExpenseAllowanceRon,
    taxableBaseRon,
    incomeTaxRon,
    incomeTaxEur,
    minWageMonthlyRon,
    cassThreshold6Ron,
    cassThreshold12Ron,
    cassThreshold24Ron,
    cassDueRon,
    cassDueEur,
    cassBracketInfo,
    totalTaxRon,
    totalTaxEur,
    effectiveTaxRatePct,
    incomeAggregationAssumption:
      'Calculul CASS presupune că venitul din chiria curentă constituie unicul venit extra-salarial al contribuabilului. În caz de cumul cu dividende, dobânzi sau alte activități, plafonul de 24.300 RON se aplică pe totalul veniturilor nete cumulate.',
    sourceVerificationDate: '2026-10-20',
    statutoryCitations: {
      incomeTax: 'Codul Fiscal (Legea nr. 227/2015, art. 84 modificat prin OUG 115/2023: cotă forfetară 20%, cotă impozit 10%)',
      cass: 'Codul Fiscal (Legea nr. 227/2015, art. 170 alin. (2) lit. d): plafoane 6, 12, 24 salarii minime raportate la venitul net)',
      minWage: fiscalYear === 2026
        ? 'HG nr. 1506/2024 pentru stabilirea salariului de bază minim brut pe țară garantat în plată la 4.050 RON'
        : 'HG nr. 598/2024 (salariu minim brut 3.700 RON)',
    },
  }
}
