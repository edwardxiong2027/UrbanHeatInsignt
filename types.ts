
export interface CityDataPoint {
  year: number;
  isa: number; // Impervious Surface Area %
  uhi: number; // UHI Intensity °C
}

export interface CityStats {
  meanISA: number;
  meanUHI: number;
  stdDevISA: number;
  stdDevUHI: number;
}

export interface RegressionStats {
  slope: number;
  intercept: number;
  r2: number;
  rValue: number; // Added Pearson correlation
  pValue: number;
  strength: 'Very strong' | 'Moderate' | 'Very weak' | 'Weak';
}

export interface City {
  id: string;
  name: string;
  climate: string;
  data: CityDataPoint[];
  stats: CityStats;
  regression: RegressionStats;
  description: string;
  tier: 1 | 2 | 3; // Added hierarchy tier
}

export interface Message {
  role: 'user' | 'model' | 'system';
  content: string;
}
