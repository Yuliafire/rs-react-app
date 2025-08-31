export interface YearlyData {
  year: number;
  population?: number;
  co2?: number;
  co2_per_capita?: number;
  [key: string]: number | undefined;
}

export interface CountryData {
  name: string;
  iso_code?: string;
  data: YearlyData[];
}

export interface RawCO2Data {
  [country: string]: { iso_code?: string; data: YearlyData[] };
}

export interface ContinentData {
  country: string;
  continent: string;
}