import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: 2rem;
  color: teal;
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
`;

export const ActionButton = styled.button<{ delete?: boolean }>`
  background: ${(props) => (props.delete ? "teal" : "teal")};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.th`
  border: 1px solid teal;
  padding: 0.5rem;
`;

export const TableRow = styled.tr``;

export const TableCell = styled.td`
  border: 1px solid teal;
  padding: 0.5rem;
`;
