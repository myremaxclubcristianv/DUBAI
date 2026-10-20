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
    category: 'GOVERNMENT' | 'TRUSTEE' | 'AGENCY' | 'BANK'
  }[]
}

export function calculateAcquisitionCosts(
  purchasePrice: number,
  isMortgage: boolean = false,
  loanToValuePct: number = 75,
  propertyType: 'apartment' | 'villa' | 'land' | 'commercial' = 'apartment',
  buyerTransferSharePct: number = 2.0,
  mapCategory?: DldMapCategory
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
      dld_transfer_fee: 0,
      dld_admin_fee: 0,
      mortgage_registration_fee: 0,
      total_statutory_fees: 0,
      total_acquisition_cost: 0,
      fees_as_percentage_of_price: 0,
      line_items: [],
    }
  }

  // 1. DLD Transfer Fee (Total 4% statutory under Law No. 7/2006 & Res. 30/2013; official portal lists 2% buyer + 2% seller)
  const dld_total_transfer_fee = purchasePrice * 0.04
  const dld_buyer_transfer_fee = purchasePrice * (buyerTransferSharePct / 100)
  const dld_seller_transfer_fee = dld_total_transfer_fee - dld_buyer_transfer_fee

  // 2. DLD Additional Document Fees (Buyer-side, discrete components)
  const dld_title_deed_fee = 250 // Official Title Deed Certificate issuance
  let dld_map_fee = 250 // Default for villas & apartments
  if (resolvedMapCategory === 'LAND_OUTSIDE_DUBAI_MUNICIPALITY') {
    dld_map_fee = 100 // Map for lands not under Dubai Municipality
  } else if (resolvedMapCategory === 'UNIFIED_DUBAI_MUNICIPALITY') {
    dld_map_fee = 225 // Unified map under Dubai Municipality
  } else {
    dld_map_fee = 250 // Villas and apartments
  }
  const dld_knowledge_fee = 10
  const dld_innovation_fee = 10
  const dld_total_document_fees = dld_title_deed_fee + dld_map_fee + dld_knowledge_fee + dld_innovation_fee

  // 3. DLD Registration Trustee / Service Partner Fee:
  // AED 4,000 + 5% VAT (AED 4,200) for price >= AED 500,000
  // AED 2,000 + 5% VAT (AED 2,100) for price < AED 500,000
  const trustee_fee_base = purchasePrice >= 500000 ? 4000 : 2000
  const trustee_vat = trustee_fee_base * 0.05
  const trustee_fee = trustee_fee_base + trustee_vat

  // 4. Customary Brokerage: 2% of price + 5% VAT on fee (Law No. 85 of 2006 standard market practice)
  const brokerage_fee_base = purchasePrice * 0.02
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
    loan_amount = purchasePrice * (loanToValuePct / 100)
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

  const total_statutory_fees =
    dld_buyer_transfer_fee +
    dld_total_document_fees +
    trustee_fee +
    brokerage_fee +
    mortgage_total_dld_fee +
    bank_processing_fee +
    valuation_fee

  const total_acquisition_cost = purchasePrice + total_statutory_fees
  const fees_as_percentage_of_price = (total_statutory_fees / purchasePrice) * 100

  const line_items: AcquisitionCostBreakdown['line_items'] = [
    {
      label: `Buyer DLD Transfer Fee (${buyerTransferSharePct.toFixed(1)}% standard buyer share of combined 4% fee)`,
      amount: dld_buyer_transfer_fee,
      legal_source: 'Dubai Law No. 7 of 2006 & Executive Council Resolution No. 30 of 2013 (Combined 4% total transfer fee: 2% buyer + 2% seller standard breakdown)',
      vat_included: false,
      category: 'GOVERNMENT',
    },
    {
      label: `DLD Title Deed & Document Tariffs (AED 250 Title + AED ${dld_map_fee} Map + AED 20 Knowledge/Innovation)`,
      amount: dld_total_document_fees,
      legal_source: `Official DLD Property Sale Registration Service Tariff (AED 250 Title Deed + AED ${dld_map_fee} Map Fee + AED 10 Knowledge + AED 10 Innovation)`,
      vat_included: false,
      category: 'GOVERNMENT',
    },
    {
      label: `DLD Registration Trustee Service Partner Fee (AED ${trustee_fee_base.toLocaleString()} + 5% VAT)`,
      amount: trustee_fee,
      legal_source: 'Official DLD Property Sale Registration Service Tariff (Partner Office Schedule)',
      vat_included: true,
      category: 'TRUSTEE',
    },
    {
      label: 'Customary Real Estate Brokerage Assumption (2.0% + 5% VAT)',
      amount: brokerage_fee,
      legal_source: 'Dubai Law No. 85 of 2006 (Customary brokerage practice, not a statutory tax)',
      vat_included: true,
      category: 'AGENCY',
    },
  ]

  if (isMortgage) {
    line_items.push(
      {
        label: `Estimated DLD Mortgage Registration Costs (0.25% statutory + AED ${mortgage_document_fees} document fees)`,
        amount: mortgage_total_dld_fee,
        legal_source: 'Official DLD Mortgage Registration Service Tariff (dubailand.gov.ae/en/eservices/request-for-mortgage-registration/)',
        vat_included: false,
        category: 'GOVERNMENT',
      },
      {
        label: 'Bank Loan Processing Fee (1.0% of loan + 5% VAT)',
        amount: bank_processing_fee,
        legal_source: 'Standard UAE Commercial Banking Tariff (CBUAE guidelines)',
        vat_included: true,
        category: 'BANK',
      },
      {
        label: 'Independent Property Valuation Fee',
        amount: valuation_fee,
        legal_source: 'UAE Banking Mortgage Valuation Standard (AED 2,500 + 5% VAT)',
        vat_included: true,
        category: 'BANK',
      }
    )
  }

  return {
    purchase_price: purchasePrice,
    is_mortgage: isMortgage,
    loan_amount,
    property_type: propertyType,
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
  source: string
  appliesTo: string
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
      label: 'Off-Plan Property (All Buyers)',
      source: 'CBUAE Mortgage Regulations Notice No. 3871/2013 (Article 4 - Off-plan financing cap)',
      appliesTo: 'Maximum 50% LTV regardless of nationality or first-time purchase status',
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
          label: 'UAE National — First Home (> AED 5M)',
          source: 'Central Bank of the UAE Mortgage Regulations Notice No. 3871/2013',
          appliesTo: 'Maximum 75% LTV (Minimum 25% down payment for properties over AED 5 Million)',
        }
      }
      return {
        maxLtvPct: 85,
        minDownPaymentPct: 15,
        label: 'UAE National — First Home (≤ AED 5M)',
        source: 'Central Bank of the UAE Mortgage Regulations Notice No. 3871/2013',
        appliesTo: 'Maximum 85% LTV (Minimum 15% down payment for properties up to AED 5 Million)',
      }
    }
    case 'UAE_NATIONAL_SUBSEQUENT':
      return {
        maxLtvPct: 65,
        minDownPaymentPct: 35,
        label: 'UAE National — Subsequent / Investment Property',
        source: 'Central Bank of the UAE Mortgage Regulations Notice No. 3871/2013',
        appliesTo: 'Maximum 65% LTV (Minimum 35% down payment on second and subsequent acquisitions)',
      }
    case 'EXPAT_SUBSEQUENT':
      return {
        maxLtvPct: 60,
        minDownPaymentPct: 40,
        label: 'Expatriate Resident — Subsequent / Investment Property',
        source: 'Central Bank of the UAE Mortgage Regulations Notice No. 3871/2013',
        appliesTo: 'Maximum 60% LTV (Minimum 40% down payment on second and subsequent acquisitions)',
      }
    case 'NON_RESIDENT':
      return {
        maxLtvPct: 50,
        minDownPaymentPct: 50,
        label: 'Non-Resident International Buyer',
        source: 'UAE Commercial Banking Discretionary Guidelines',
        appliesTo: 'Standard 50% LTV (Subject to foreign income verification; select banks offer up to 60%)',
      }
    case 'EXPAT_FIRST_HOME':
    case 'EXPAT_FIRST_HOME_LE5M':
    case 'EXPAT_FIRST_HOME_GT5M':
    default: {
      if (isOver5M) {
        return {
          maxLtvPct: 70,
          minDownPaymentPct: 30,
          label: 'Expatriate Resident — First Home (> AED 5M)',
          source: 'Central Bank of the UAE Mortgage Regulations Notice No. 3871/2013 & Rulebook',
          appliesTo: 'Maximum 70% LTV (Minimum 30% down payment for properties over AED 5 Million)',
        }
      }
      return {
        maxLtvPct: 80,
        minDownPaymentPct: 20,
        label: 'Expatriate Resident — First Home (≤ AED 5M)',
        source: 'Central Bank of the UAE Mortgage Regulations Notice No. 3871/2013 & Rulebook',
        appliesTo: 'Maximum 80% LTV (Minimum 20% down payment for properties up to AED 5 Million)',
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
