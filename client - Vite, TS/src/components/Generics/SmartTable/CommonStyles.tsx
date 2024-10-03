import { css } from 'styled-components';

export const CommonStyles = css`
  width: 100%;
  border-collapse: collapse;
  border-radius: var(--default-br);
  overflow: hidden;
  box-shadow: var(--default-bshadow);

  td,
  th {
    font-weight: 500;
    padding: 5px 15px;
    text-align: left;
    white-space: nowrap;
    height: var(--elements-height);
  }

  thead > tr {
    background-color: var(--color-primary);
    color: var(--color-white);
  }

  tbody tr {
    background-color: var(--color-lightgrey);
    &:nth-of-type(odd) {
      background-color: var(--color-white);
    }
    &:hover {
      background-color: var(--color-accent);
    }
  }

  caption {
    font-size: 1.2em;
    padding: 10px;
    font-weight: bold;
  }
`;
