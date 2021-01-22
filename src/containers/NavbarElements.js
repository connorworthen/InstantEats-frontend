import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`

export const NavLink = styled(Link)`
  color: #fff;
  diplay: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 30px;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    postion: absolute;
    top: 0;
    right: 0;
    transform: translate(-100px, 75px);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none
  }
`

export const NavBtn = styled.nav`
  display: flex;
  aligin-items: center;
  margin-right: 24px;

  @media screen and (max-wdith: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(Link)`
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid $red;
  border-radius: 0.6em;
  color: $red;
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  margin: 20px;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;

  &:hover,
  &:focus {
    color: #fff;
    outline: 0;
  }
}
`