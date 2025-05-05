import styled from 'styled-components'

export const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  height: 60px;
  color: teal;
  border-bottom: 1px solid teal;
  box-shadow: 0 2px 4px rgba(0, 255, 255, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`

export const Brand = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`

export const LogoutButton = styled.button`
  background: transparent;
  border: 1px solid teal;
  color: teal;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: teal;
    color: black;
  }
`
