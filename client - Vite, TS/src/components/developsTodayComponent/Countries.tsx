import * as React from 'react';
import { SearchOptions } from './models/search';
import { ICountry } from './models/country';
import ControlledRadioButtonsGroup from './ControlledRadioButtonsGroup';
import CountriesTable from './CountriesTable';
import Country from './Country';
import axios from 'axios';
import MyAxiosServiceInstance from '@/services/MyAxiosService';

const API_URL = 'http://localhost:3005/countries';

/**
 * Get countries from a previously created endpoint using `API_URL`
 * Render a list of countries using an existing `Country` component
 *
 * Add "GO" button handler to search by selected option:
 * Get countries from previously created endpoints
 * If search input is empty, show all countries
 * Tip: Set the country as an empty array on the query error
 */

const Countries: React.FC = () => {
  const [countries, setCountries] = React.useState<ICountry[]>([]);
  const [filteredCountries, setFilteredCountries] = React.useState<ICountry[]>([]);
  const [searchOption, setSearchOption] = React.useState<string>(SearchOptions.Lan);
  const [searchValue, setSearchValue] = React.useState<string>('');

  const toggleSearch = async (searchOption: string) => {
    if (searchValue === '') return setFilteredCountries(countries);

    if (searchOption === 'Region') {
      const fuilteredSearchValue = countries.filter((country) =>
        country.region.toLowerCase().includes(searchValue.toLowerCase()),
      );
      setFilteredCountries(fuilteredSearchValue);
    }
    if (searchOption === 'Language') {
      const fuilteredSearchValue = countries.filter(
        (country) =>
          country.languages &&
          Object.values(country.languages).some((language) =>
            language.toLowerCase().includes(searchValue.toLowerCase()),
          ),
      );
      setFilteredCountries(fuilteredSearchValue);
    }
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchData = await MyAxiosServiceInstance.request<ICountry[]>({
          requestConfig: {
            method: 'get',
            url: API_URL,
          },
        });

        if (fetchData.data) {
          setCountries(fetchData.data);
          setFilteredCountries(fetchData.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ControlledRadioButtonsGroup setSearchOption={setSearchOption} option={searchOption} />
      <div className="search-container">
        <input className="search-input" placeholder="Search" onChange={(e) => setSearchValue(e.currentTarget.value)} />
        <button className="search-button" onClick={() => toggleSearch(searchOption)}>
          GO
        </button>
      </div>

      <CountriesTable>
        {filteredCountries.map((country) => (
          <Country country={country} />
        ))}
      </CountriesTable>

      {!countries?.length && <p>Not found</p>}
    </div>
  );
};

export default Countries;
