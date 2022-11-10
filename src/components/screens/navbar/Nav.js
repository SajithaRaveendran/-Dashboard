import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "../../../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink to="/summary">Summary</MenuLink>
        <MenuLink to="/products">Products</MenuLink>
        <MenuLink to="/hotselling">Hot Selling</MenuLink>
        <MenuLink to="/orders">Manage Order</MenuLink>
        <MenuLink to="/payments">Payments</MenuLink>
        <MenuLink to="/settings">Settings</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;

const MenuLink = styled(NavLink)`
  padding: 20px;
  cursor: pointer;
  text-decoration: none;
  color: #323988;
  font-family: "Poppins-bold";
  transition: all 0.5s ease-in;
  font-size: 14px;
`;

const Nav = styled.div`
  padding: 0 0 0 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  @media all and (max-width: 980px) {
    overflow: hidden;
    flex-direction: column;
    height: ${({ isOpen }) => (isOpen ? "400px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
    background-color: #fff;
    z-index: 7;
  }
`;

const Hamburger = styled.div`
  display: none;

  flex-direction: column;
  cursor: pointer;

  span {
    height: 4px;
    width: 30px;
    background: #323988;
    margin-bottom: 5px;
    border-radius: 5px;
  }

  @media all and (max-width: 980px) {
    display: flex;
    margin-top: 20px;
  }
`;
