import { useState } from 'react';
import axios from 'axios';
import type { RawCO2Data, ContinentData,  CountryData } from '../types/types';

export type CO2Data = {
    co2Data: RawCO2Data;
    continentData: ContinentData[];
    countryData: CountryData[];
};

function createResource<T>(promise: Promise<T>) {
  let status: 'pending' | 'success' | 'error' = 'pending';
  let result: T | Error;
  const suspender = promise.then(
    (data) => { status = 'success'; result = data; },
    (err) => { status = 'error'; result = err; }
  );
  return {
    read(): T {
      if (status === 'pending') throw suspender;
      if (status === 'error') throw result;
      return result as T;
    },
  };
}

export function useCO2Data() {
  const co2Url = 'https://nyc3.digitaloceanspaces.com/owid-public/data/co2/owid-co2-data.json';
  const continentUrl = 'https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-continent.json';


  const [co2Resource] = useState(() =>
    createResource<RawCO2Data>(
      axios.get<RawCO2Data>(co2Url).then(res => res.data) as Promise<RawCO2Data>
    )
  );

  const [continentResource] = useState(() =>
    createResource<ContinentData[]>(
      axios.get<ContinentData[]>(continentUrl).then(res => res.data) as Promise<ContinentData[]>
    )
  );

  const co2Data = co2Resource.read();
  const continents = continentResource.read();

  const continentMap = new Map(continents.map(c => [c.country, c.continent]));
  const countries: CountryData[] = Object.entries(co2Data)
    .filter(([name, info]) => info.iso_code && continentMap.has(name))
    .map(([name, info]) => ({
      name,
      iso_code: info.iso_code,
      data: info.data,
      continent: continentMap.get(name)!,
    }));

  return { countries, continentMap };
}