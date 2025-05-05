import styled from "styled-components";

export const PageWrapper = styled.div`
  color: teal;
  padding: 32px;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 24px;
  color: teal;
  font-weight: 600;
  text-align: center;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
  border: 1px solid teal;
  border-radius: 8px;
  overflow: hidden;
`;

export const Th = styled.th`
  padding: 12px;
  border-bottom: 1px solid teal;
  text-align: left;
  background-color: teal;
  color: white;
  font-weight: bold;
`;

export const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #222;
  color: teal;
  font-size: 14px;
`;
export const ActionButton = styled.button<{ delete?: boolean }>`
  padding: 6px 12px;
  margin: 0 4px;
  background-color: transparent;
  color: teal;
  border: 2px solid teal;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`;


export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalWrapper = styled.div`
  background-color: #111;
  color: teal;
  padding: 32px;
  width: 100%;
  max-width: 420px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.2);
`;

export const InputField = styled.input`
  background-color: #222;
  color: teal;
  border: 1px solid teal;
  padding: 10px 12px;
  margin-bottom: 14px;
  border-radius: 6px;
  font-size: 14px;

  &::placeholder {
    color: #66cccc;
  }

  &:focus {
    outline: none;
    border-color: #00ffff;
  }
`;

export const ModalButton = styled.button`
  background-color: teal;
  color: black;
  border: none;
  padding: 12px;
  margin-top: 10px;
  cursor: pointer;
  font-weight: 600;
  border-radius: 6px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #008080;
  }
`;
