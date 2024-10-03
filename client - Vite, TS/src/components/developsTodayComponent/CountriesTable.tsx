import * as React from 'react';

interface CountriesTableProps {
  children?: React.ReactNode;
}

const CountriesTable: React.FC<CountriesTableProps> = ({ children }) => (
  <div className="table-container">
    <table aria-label="simple table" className="custom-table">
      <thead className="table-header">
        <tr>
          <th>Flag</th>
          <th>Country</th>
          <th>Region</th>
          <th>Languages</th>
          <th>Capital</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  </div>
);

export default CountriesTable;
