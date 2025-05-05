import styled from 'styled-components'

export const SidebarWrapper = styled.div`
  width: 250px;
  min-height: 100vh;
  padding: 20px;
  border-right: 1px solid teal;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 30px;
    border: 2px solid teal;
    border-radius: 50%;
  }

  ul {
    list-style: none;
    padding: 0;
    width: 100%;
  }

  li {
    margin: 15px 0;
    text-align: center;
  }
`

export const NavLinkStyled = styled.a`
  display: block;
  color: teal;
  padding: 10px;
  border: 1px solid teal;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: teal;
    color: white;
  }

  &.active {
    background-color: teal;
    color: white;
  }
`
