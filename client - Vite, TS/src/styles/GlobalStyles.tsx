import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
.App {
  text-align: center;
}

#search-options {
  display: flex;
  justify-content: center;
  gap: 10px;
  font-weight: 500;
}

.search-legend {
  font-size: large;
  font-weight: 700;
  color: rgb(28, 106, 170);
}

.search-container {
  display: flex;
  margin: 10px;
  height: 40px;
}

.search-input {
  width: 100%;
  font-size: large;
  padding: 0 10px;
}

.search-button {
  background-color: #00aaff;
  color: white;
  font-weight: 700;
  border: 2px solid #0077cc;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.search-button:hover {
  background-color: #0077cc;
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
}

.table-container {
  overflow-x: auto;
  margin: 20px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
}

.custom-table th,
.custom-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.custom-table th {
  background-color: #50a2ca;
  color: white;
}

.custom-table tr:hover {
  background-color: #f1f1f1;
}

.custom-table td {
  background-color: #fff;
}

.flag-wrapper img {
  width: 40px;
  height: auto;
  border-radius: 4px;
  border: 1px solid #ddd;
}

tr:hover {
  background-color: #f9f9f9;
}

td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

`;

export const PageBody = styled.div`
  padding-top: var(--header-height);
`;

// For customize designs
export const NoPageBodyContainer = styled.div`
  margin-top: calc(-1 * var(--header-height));
`;

export const DefaultContainer = styled.div`
  max-width: var(--page-mx-width);
  margin: 0 auto;
  margin-top: 48px;
`;

export const HRBar = styled.div`
  width: 100%;
  height: 2px;
  background: var(--color-lightgrey);
  border-radius: var(--default-br);
`;
