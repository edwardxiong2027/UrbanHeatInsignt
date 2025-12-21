
import { City } from './types';

export const CITIES: City[] = [
  {
    id: 'houston',
    name: 'Houston, TX',
    climate: 'Humid Subtropical',
    tier: 1,
    description: 'The "poster child" for ISA-driven heating. Showed an almost deterministic relationship between development and heat island intensity.',
    data: [
      { year: 2001, isa: 28.0, uhi: 2.4 },
      { year: 2006, isa: 30.2, uhi: 2.7 },
      { year: 2011, isa: 32.5, uhi: 3.1 },
      { year: 2016, isa: 34.7, uhi: 3.7 },
      { year: 2019, isa: 36.0, uhi: 3.9 },
    ],
    stats: { meanISA: 32.28, meanUHI: 3.16, stdDevISA: 3.23, stdDevUHI: 0.62 },
    regression: { slope: 0.190, rValue: 0.992, intercept: -2.974, r2: 0.983, pValue: 0.001, strength: 'Very strong' }
  },
  {
    id: 'chicago',
    name: 'Chicago, IL',
    climate: 'Midwestern Continental',
    tier: 2,
    description: 'Demonstrated a moderate association. Higher slope than Houston, but less deterministic R-squared.',
    data: [
      { year: 2001, isa: 43.0, uhi: 1.8 },
      { year: 2006, isa: 44.1, uhi: 2.1 },
      { year: 2011, isa: 44.8, uhi: 2.5 },
      { year: 2016, isa: 44.7, uhi: 2.2 },
      { year: 2019, isa: 45.3, uhi: 2.3 },
    ],
    stats: { meanISA: 44.38, meanUHI: 2.08, stdDevISA: 0.91, stdDevUHI: 0.28 },
    regression: { slope: 0.225, rValue: 0.739, intercept: -7.895, r2: 0.546, pValue: 0.154, strength: 'Moderate' }
  },
  {
    id: 'la',
    name: 'Los Angeles, CA',
    climate: 'Mediterranean',
    tier: 3,
    description: 'Topography and coastal breezes play a larger role in heat distribution than surface material alone.',
    data: [
      { year: 2001, isa: 38.0, uhi: 2.6 },
      { year: 2006, isa: 39.1, uhi: 2.9 },
      { year: 2011, isa: 40.0, uhi: 2.8 },
      { year: 2016, isa: 39.4, uhi: 3.3 },
      { year: 2019, isa: 40.2, uhi: 2.7 },
    ],
    stats: { meanISA: 39.34, meanUHI: 2.86, stdDevISA: 0.85, stdDevUHI: 0.27 },
    regression: { slope: 0.125, rValue: 0.391, intercept: -2.044, r2: 0.153, pValue: 0.515, strength: 'Weak' }
  },
  {
    id: 'miami',
    name: 'Miami, FL',
    climate: 'Tropical',
    tier: 3,
    description: 'Humidity and proximity to the ocean moderate the UHI signal, making ISA growth a secondary driver.',
    data: [
      { year: 2001, isa: 41.0, uhi: 2.1 },
      { year: 2006, isa: 42.2, uhi: 2.3 },
      { year: 2011, isa: 43.1, uhi: 1.9 },
      { year: 2016, isa: 43.5, uhi: 2.5 },
      { year: 2019, isa: 43.8, uhi: 2.0 },
    ],
    stats: { meanISA: 42.46, meanUHI: 2.16, stdDevISA: 1.07, stdDevUHI: 0.24 },
    regression: { slope: 0.088, rValue: 0.391, intercept: -1.590, r2: 0.153, pValue: 0.515, strength: 'Weak' }
  },
  {
    id: 'phoenix',
    name: 'Phoenix, AZ',
    climate: 'Desert',
    tier: 3,
    description: 'Arid environment where the "Oasis Effect" and high baseline heat often mask the specific signal of impervious surfaces.',
    data: [
      { year: 2001, isa: 31.0, uhi: 3.2 },
      { year: 2006, isa: 33.5, uhi: 3.5 },
      { year: 2011, isa: 35.8, uhi: 4.0 },
      { year: 2016, isa: 36.0, uhi: 3.1 },
      { year: 2019, isa: 37.5, uhi: 3.8 },
    ],
    stats: { meanISA: 34.76, meanUHI: 3.52, stdDevISA: 2.44, stdDevUHI: 0.38 },
    regression: { slope: 0.064, rValue: 0.410, intercept: 1.281, r2: 0.168, pValue: 0.493, strength: 'Very weak' }
  },
  {
    id: 'nyc',
    name: 'New York, NY',
    climate: 'Humid Continental',
    tier: 3,
    description: 'Already highly built up. Small changes in ISA did not significantly predict UHI shifts, pointing to atmospheric complexity.',
    data: [
      { year: 2001, isa: 47.0, uhi: 2.3 },
      { year: 2006, isa: 48.2, uhi: 2.5 },
      { year: 2011, isa: 49.0, uhi: 2.0 },
      { year: 2016, isa: 49.2, uhi: 2.7 },
      { year: 2019, isa: 49.5, uhi: 2.4 },
    ],
    stats: { meanISA: 48.58, meanUHI: 2.3, stdDevISA: 0.97, stdDevUHI: 0.27 },
    regression: { slope: 0.045, rValue: 0.160, intercept: 0.097, r2: 0.026, pValue: 0.797, strength: 'Very weak' }
  },
];

export const PAPER_SUMMARY = `
Abstract: This study examines if expansion of impervious surface area (ISA) predicts changes in urban heat island (UHI) intensity across six U.S. cities (2001–2019).
Houston showed an almost deterministic relationship (R² = 0.983, β = 0.190, p = 0.001). 
Chicago was moderate (β = 0.225, R² = 0.546). 
New York, Phoenix, Los Angeles, and Miami exhibited weak or statistically insignificant relationships.
Key takeaway: ISA is a driver, but its predictive strength varies wildly by climate and morphology.
`;
