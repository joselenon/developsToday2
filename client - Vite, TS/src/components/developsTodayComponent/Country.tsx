import * as React from 'react';
import { ICountry } from './models/country';

interface CountryProps {
  country: ICountry;
}

const Country: React.FC<CountryProps> = ({ country }) => {
  const { name, region, languages, capital, flags } = country;

  return (
    <tr>
      <td>
        <div className="flag-wrapper">
          <img src={flags.png} alt={name.common} loading="lazy" />
        </div>
      </td>
      <td>{name.common}</td>
      <td>{region}</td>
      <td>{!!languages ? Object.values(languages).join(', ') : '-'}</td>
      <td>{capital ? capital : '-'}</td>
    </tr>
  );
};

export default Country;
