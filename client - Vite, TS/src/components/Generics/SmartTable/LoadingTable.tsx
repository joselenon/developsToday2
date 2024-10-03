import React from 'react';
import styled from 'styled-components';
import { CommonStyles } from './CommonStyles';
import { ISmartTableProps } from '.';
import { combineSlices } from '@reduxjs/toolkit';

const TableMarkupContainer = styled.div`
  width: 100%;
`;

const StyledTable = styled.table`
  ${CommonStyles}

  tbody {
    position: relative;
  }
`;

const NoDataContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-secondary);

  span {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 32px;
    opacity: 0.35;
  }
`;

const LoadingTable = ({ titles, data }: ISmartTableProps) => {
  let titlesFiltered = titles ? titles : [''];
  console.log(titlesFiltered);
  let dataFiltered = data
    ? data
    : [
        { '': '' },
        { '': '' },
        { '': '' },
        { '': '' },
        { '': '' },
        { '': '' },
        { '': '' },
        { '': '' },
        { '': '' },
        { '': '' },
      ];
  return <TableMarkup titles={titlesFiltered} data={dataFiltered} />;
};

const TableMarkup = ({ titles, data }: { titles: string[]; data: { [any: string]: any }[] }) => {
  return (
    <TableMarkupContainer>
      <StyledTable>
        <colgroup>{titles && titles.map((_, index) => <col key={index} />)}</colgroup>

        <thead>
          <tr>
            {titles.map((title, index) => (
              <th key={index}>{title}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {['', '', '', '', '', '', '', '', '', ''].map((item, rowIndex) => (
            <tr key={rowIndex}>
              {titles.map((_, colIndex) => (
                <td key={colIndex}></td>
              ))}
            </tr>
          ))}

          <NoDataContainer>
            {data?.length === 0 && <span>No Data</span>}
            {data === null && <></>}
            {data === undefined && <span>loading...</span>}
          </NoDataContainer>
        </tbody>
      </StyledTable>
    </TableMarkupContainer>
  );
};

export default LoadingTable;
