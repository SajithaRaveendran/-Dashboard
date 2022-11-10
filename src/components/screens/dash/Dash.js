import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../../../App.css";

 const board = [
    {
        name:"Summary",
        image:require("../../Assets/images/book.svg").default,
        NavLink: "/summary"
    },
    {
        name:"Products",
        image:require("../../Assets/images/slide.svg").default,
        NavLink: "/products"
    },
    {
        name:"Hot Selling",
        image:require("../../Assets/images/fire.svg").default,
        NavLink: "/hotselling"

    },
    {
        name:"Manage Order",
        image:require("../../Assets/images/oder.svg").default,
        NavLink: "/orders"

    },
    {
        name:"Payment",
        image:require("../../Assets/images/wallet.svg").default,
        NavLink: "/payments"
    },
    {
        name:"Setting",
        image:require("../../Assets/images/settings.svg").default,
        NavLink: "/settings"

    },
];
function Dash() {
  return (
    <DashContainer>
      <BusinessLogo>
        <LogoImage
          src={require("../../Assets/images/logo.svg").default}
          alt="logo"
        />
      </BusinessLogo>

      <BusinessItems>
        {board.map((val, key) => (
        
        <DashItem>
          <DashItemName  to={val.NavLink}>
            {val.name}
          </DashItemName>
          <DashItemImage
            style={{ filter: "none" }}
            src={val.image}
            alt="book"
          />
        </DashItem>
        ))}
       
      </BusinessItems>
      <BusinessBottom>
        <GraphImage>
          <BusinessGraph
            src={require("../../Assets/images/graph.svg").default}
            alt="graph"
          />
        </GraphImage>
        <BusinessCaption>Power up Your Business</BusinessCaption>
        <ActionButton>
          <ButtonName>Go Pro!</ButtonName>
          <Image>
            <ArrowImage
              src={require("../../Assets/images/arrow.svg").default}
              alt="arrow"
            />
          </Image>
        </ActionButton>
      </BusinessBottom>
    </DashContainer>
  );
}
const DashContainer = styled.section`
  padding: 20px;
  width: 20%;
  border-right: 2px solid #f1f1f3;
  @media all and (max-width: 980px) {
    display: none;
  }
`;
const BusinessLogo = styled.div`
  width: 70%;
  margin-left: 40px;
  @media all and (max-width: 1380px) {
    margin-left: 0;
    width: 80%;
  }
`;
const LogoImage = styled.img`
  display: block;
  width: 100%;
`;
const BusinessItems = styled.ul`
  @media all and (max-width: 1380px) {
    margin-top: 50px;
  }
  @media all and (max-width: 1280px) {
    padding: 0;
    margin-top: 60px;
  }
`;
const DashItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-bottom: 51px;
  &:last-child {
    margin-bottom: 0;
  }
  @media all and (max-width: 1280px) {
    margin-bottom: 31px;
  }
`;
const DashItemName = styled(NavLink)`
  font-size: 16px;
  font-weight: 600;
  font-family: "Poppins-Regular";
  color: #837d7d;
  text-decoration: none;

  &.active {
    color: #323988;
    cursor: pointer;
  }
`;

const DashItemImage = styled.img`
  cursor: pointer;
  filter: invert(80%);
  
`;
const BusinessBottom = styled.div`
  background: #f1f1f3;
  margin: 145px auto 50px;
  padding: 25px;
  width: 50%;
  text-align: center;
  border-radius: 8px;
  @media all and (max-width: 1380px) {
    margin-top: 100px;
  }
  @media all and (max-width: 1280px) {
    width: 70%;
    margin-bottom: 0;
  }
`;
const GraphImage = styled.div`
  width: 75%;
  margin: 0 auto;
`;
const BusinessGraph = styled.img`
  display: block;
  width: 100%;
`;
const BusinessCaption = styled.h3`
  font-family: "Poppins-Bold";
  font-size: 20px;

  @media all and (max-width: 1380px) {
    font-size: 18px;
  }
  @media all and (max-width: 1280px) {
    font-size: 16px;
  }
  @media all and (max-width: 1280px) {
    font-size: 14px;
  }
`;
const ActionButton = styled.button`
  background: #333889;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-family: "Poppins-Bold";
  display: flex;
  align-items: center;
  width: 94%;
  height: 40px;
  margin: 0 auto;
  padding: 0px 20px;
  @media all and (max-width: 1080px) {
    width: 97%;
  }
`;

const ButtonName = styled.h4`
  font-size: 16px;
  font-family: "Poppins-Regular";
  margin: 0;
  @media all and (max-width: 1380px) {
    font-size: 13px;
  }
`;
const Image = styled.div`
  margin-left: 14px;
  width: 20px;
  @media all and (max-width: 1380px) {
    margin-left: 3px;
  }
`;
const ArrowImage = styled.img`
  display: block;
  width: 100%;
  transform: rotate(270deg);
  filter: invert(1);
`;
export default Dash;
