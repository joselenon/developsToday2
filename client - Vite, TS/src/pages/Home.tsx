import React from 'react';

import { DefaultContainer } from '../styles/GlobalStyles';
import styled from 'styled-components';
import ExampleComponent from '@/components/ExampleComponent';
import Countries from '@/components/developsTodayComponent/Countries';

const CountriesButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const CountryButtonContainer = styled.div`
  button {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border: none;
    border-radius: var(--default-br);
  }

  button:hover {
    background-color: var(--color-lightgrey);
    cursor: pointer;
  }

  span {
    font-family: var(--primary-font);
    font-weight: 600;
  }
`;

export default function Home() {
  return (
    <DefaultContainer>
      <h2>This is a Boilerplate</h2>

      <Countries />
    </DefaultContainer>
  );
}
