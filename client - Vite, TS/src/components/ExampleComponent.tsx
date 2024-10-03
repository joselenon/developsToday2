import React from 'react';
import SmartTable from './Generics/SmartTable';
import { DefaultContainer } from '@/styles/GlobalStyles';

export default function ExampleComponent() {
  return (
    <DefaultContainer>
      <h4 style={{ marginBottom: 16 }}>Reusable Table</h4>

      <SmartTable
        titles={undefined}
        data={
          [
            /* { Name: 'this is a test', Age: 22, Married: 'Soon', Profession: 'Full stack Developer' } */
          ]
        }
      />
    </DefaultContainer>
  );
}
