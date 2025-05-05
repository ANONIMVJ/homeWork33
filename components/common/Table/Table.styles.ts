import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;
  padding: 10px;

  table {
    width: 100%;
    border: 1px solid teal;
    border-collapse: collapse;
    background-color: black;
    color: teal;
  }

  table tr,
  table th,
  table td {
    border: 1px solid teal;
  }

  th, td {
    padding: 8px 6px;
    text-align: left;
  }
`;
