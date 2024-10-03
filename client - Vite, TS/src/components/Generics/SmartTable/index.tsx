import React from 'react';
import styled from 'styled-components';
import LoadingTable from './LoadingTable';
import { CommonStyles } from './CommonStyles';

const StyledTable = styled.table`
  ${CommonStyles}
`;

const TableWrapper = styled.div`
  width: 100%;
  height: fit-content;
  overflow-x: scroll;
`;

export interface ISmartTableProps {
  titles: undefined | string[];
  data: undefined | { [any: string]: any }[] | null;
}

const SmartTable = ({ data, titles }: ISmartTableProps) => {
  if (!data || data.length <= 0) return <LoadingTable titles={titles} data={data} />;

  const titlesFromObject = Object.keys(data[0]);

  const dataWithFiveItems = [...data];
  while (dataWithFiveItems.length < 7) {
    dataWithFiveItems.push(titlesFromObject.reduce((acc, title) => ({ ...acc, [title]: '' }), {}));
  }

  return <TableMarkup titles={titlesFromObject} data={dataWithFiveItems} />;
};

const TableMarkup = ({ titles, data }: { titles: string[]; data: ISmartTableProps['data'] }) => (
  <TableWrapper>
    <StyledTable>
      <colgroup>
        {titles.map((_, index) => (
          <col key={index} />
        ))}
      </colgroup>

      <thead>
        <tr>
          {titles.map((title, index) => (
            <th key={index}>{title}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data &&
          data.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {titles.map((title, colIndex) => (
                <td key={colIndex}>{item[title]}</td>
              ))}
            </tr>
          ))}
      </tbody>
    </StyledTable>
  </TableWrapper>
);

export default SmartTable;
