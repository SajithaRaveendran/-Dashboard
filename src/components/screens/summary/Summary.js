import React from "react";
import styled from "styled-components";
import Graph from "../graph/Graph";
import Nav from "../navbar/Nav";

function Summary() {
  return (
    <SummeryContainer>
      <SummaryHeader>
        <MenuBar id="MenuBar">
          <Nav />
        </MenuBar>

        <BusinessLogo>
          <LogoImage
            src={require("../../Assets/images/logo.svg").default}
            alt="logo"
          />
        </BusinessLogo>
      </SummaryHeader>

      <Search>
        <FormInput placeholder="Search here" />
        <SearchImage>
          <SearchIcon
            src={require("../../Assets/images/search.svg").default}
            alt="search"
          />
        </SearchImage>
      </Search>

      <StaticContainer>
        <StaticTop>
          <StaticName>Statistic</StaticName>
          <StaticMonth>
            <select>
              <option>6 Month</option>
              <option>5 Month</option>
              <option>4 Month</option>
              <option>3 Month</option>
              <option>2 Month</option>
              <option>1 Month</option>
            </select>
          </StaticMonth>
        </StaticTop>

        <StaticMiddle>
          <StaticItem>
            <StaticOrder>
              <OrderImage
                src={require("../../Assets/images/order2.svg").default}
                alt="order"
              />
            </StaticOrder>
            <OrderStatus>Awaiting delivery</OrderStatus>
            <OrderCount>150K Orders</OrderCount>
          </StaticItem>

          <StaticItem>
            <GraphContainer>
              <GraphImage>
                <Graph />
              </GraphImage>
              <StatusGraph
                src={require("../../Assets/images/sales-graph.svg").default}
                alt="sales-graph"
              />
            </GraphContainer>
          </StaticItem>

          <StaticItem>
            <StaticOrder>
              <OrderImage
                src={require("../../Assets/images/order2.svg").default}
                alt="order"
              />
            </StaticOrder>
            <OrderStatus>Awaiting delivery</OrderStatus>
            <OrderCount>150K Orders</OrderCount>
          </StaticItem>
        </StaticMiddle>

        <StaticBottom>
          <BottomLeft>
            <BottomTitle>Create Ads for Your Business </BottomTitle>
            <BottomImage>
              <BusinessManImage
                src={require("../../Assets/images/man.svg").default}
                alt="man"
              />
            </BottomImage>
          </BottomLeft>

          <BottomRight>
            <BottomTitle>Secure Your Payments</BottomTitle>
            <BottomBussiness>
              <BussinessImage
                src={require("../../Assets/images/businessman2.svg").default}
                alt="businessman2"
              />
            </BottomBussiness>
          </BottomRight>
        </StaticBottom>
      </StaticContainer>
    </SummeryContainer>
  );
}

const SummeryContainer = styled.section`
  width: 50%;
  @media all and (max-width: 980px) {
    width: 60%;
  }
  @media all and (max-width: 480px) {
    width: 100%;
  }
`;
const SummaryHeader = styled.div`
  display: none;
  @media all and (max-width: 980px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
  }
`;
const BusinessLogo = styled.div`
  @media all and (max-width: 640px) {
    width: 50%;
  }
`;
const LogoImage = styled.img`
  display: block;
  width: 100%;
`;
const MenuBar = styled.div`
 
`;

const Search = styled.div`
  position: relative;
  @media all and (max-width: 980px) {
    display: none;
  }
`;
const FormInput = styled.input`
  margin-left: 72px;
  margin-top: 30px;
  padding: 13px 4px;
  border-radius: 8px;
  width: 71%;
  height: 21px;
  background: #d9d9d9;
  border: none;
  padding-left: 10px;
  @media all and (max-width: 1380px) {
    width: 76%;
  }
  @media all and (max-width: 1380px) {
    margin-left: 30px;
    width: 81%;
  }
`;
const SearchImage = styled.div`
  position: absolute;
  top: 41px;
  right: 135px;
  width: 23px;
  @media all and (max-width: 1380px) {
    right: 76px;
  }
`;
const SearchIcon = styled.img`
  display: block;
  width: 100%;
`;
const StaticContainer = styled.section`
  padding: 30px;
  @media all and (max-width: 360px) {
    padding: 10px;
  }
`;
const StaticTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StaticName = styled.h3`
  font-size: 24px;
  font-weight: 600;
  font-family: "Poppins-Regular";
  margin-left: 43px;
  @media all and (max-width: 1380px) {
    font-size: 20px;
    margin: 2px;
  }
`;
const StaticMonth = styled.div`
  display: flex;
  align-items: center;
  margin-right: 14%;
  @media all and (max-width: 1380px) {
    margin-right: 6%;
  }
  @media all and (max-width: 640px) {
    margin-right: 0;
  }
`;

const StaticMiddle = styled.ul`
  display: grid;
  gap: 20px;
  width: 100%;
  @media all and (max-width: 1380px) {
    padding: 0;
  }
  @media all and (max-width: 480px) {
    gap: 9px;
  }
`;
const StaticItem = styled.li`
  list-style: none;
  border-radius: 8px;
  padding: 10px;
  height: 120px;

  &:first-child {
    background: #f4e7e4;
    grid-column: 1;
    grid-row: 1;
    margin-top: 10px;
    @media all and (max-width: 1380px) {
      grid-column: 1 / span 11;
    }
    @media all and (max-width: 768px) {
      grid-column: 1;
    }
    @media all and (max-width: 480px) {
      grid-column: 1 / span 4;
      grid-row: 1;
    }
  }
  &:last-child {
    background: #e6f4ff;
    grid-column: 1;
    grid-row: 2;
    @media all and (max-width: 1380px) {
      grid-column: 1 / span 11;
    }
    @media all and (max-width: 768px) {
      grid-column: 1;
    }
    @media all and (max-width: 640px) {
      display: none;
    }
    @media all and (max-width: 480px) {
      display: block;
      grid-column: 1 / span 4;
      grid-row: 2;
    }
  }
  &:nth-child(2) {
    grid-column: 2;
    grid-row: 1 / span 2;
    @media all and (max-width: 1380px) {
      grid-column: 12;
    }
    @media all and (max-width: 768px) {
      grid-column: 2;
    }
    @media all and (max-width: 640px) {
      grid-row: 3;
      grid-column: 1;
    }
    @media all and (max-width: 480px) {
      grid-column: 5;
      grid-row: 1 / span 2;
    }
  }
  @media all and (max-width: 1380px) {
    height: 137px;
  }
  @media all and (max-width: 1280px) {
    height: 90px;
  }
  @media all and (max-width: 980px) {
    height: 70px;
  }
  @media all and (max-width: 640px) {
    height: 100px;
  }
  @media all and (max-width: 480px) {
    height: 68px;
  }
`;
const StaticOrder = styled.div`
  width: 23%;
`;
const OrderImage = styled.img`
  display: block;
  width: 100%;
`;
const OrderStatus = styled.h3`
  font-family: "Poppins-regular";
  margin: 0;
  font-size: 14px;
  @media all and (max-width: 1080px) {
    font-size: 12px;
  }
`;
const OrderCount = styled.h4`
  font-family: "Poppins-regular";
  margin: 0;
  font-size: 18px;
  @media all and (max-width: 1280px) {
    font-size: 16px;
  }
  @media all and (max-width: 1080px) {
    font-size: 13px;
  }
`;
const GraphContainer = styled.div`
  width: 68%;
  @media all and (max-width: 1380px) {
    width: 91%;
  }
  @media all and (max-width: 1280px) {
    width: 100%;
  }
  @media all and (max-width: 768px) {
    width: 100%;
  }
`;
const StatusGraph = styled.img`
  display: none;
  width: 100%;
  border-radius: 8px;
  @media all and (max-width: 1380px) {
    display: block;
  }
`;
const StaticBottom = styled.div`
  display: flex;
  margin-left: 42px;
  margin-top: 73px;
  @media all and (max-width: 1380px) {
    margin-top: 27px;
    margin-left: 0;
  }
  @media all and (max-width: 640px) {
    display: none;
  }
  @media all and (max-width: 480px) {
    display: flex;
  }
`;

const BottomLeft = styled.div`
  @media all and (max-width: 360px) {
    width: 50%;
  }
`;
const BottomRight = styled.div`
  margin-left: 115px;
  @media all and (max-width: 1380px) {
    margin-left: 70px;
  }
  @media all and (max-width: 980px) {
    margin-left: 44px;
  }
  @media all and (max-width: 768px) {
    margin-left: 0px;
  }
  @media all and (max-width: 360px) {
    width: 50%;
  }
`;
const BottomTitle = styled.h3`
  width: 182px;
  font-family: "Poppins-Regular";
  @media all and (max-width: 1080px) {
    font-size: 14px;
  }
  @media all and (max-width: 360px) {
    width: 125px;
  }
`;
const BottomImage = styled.div`
  width: 49%;
  margin-top: 74px;
  @media all and (max-width: 1380px) {
    margin-top: 60px;
  }
  @media all and (max-width: 768px) {
    margin-top: 20px;
  }
`;
const BusinessManImage = styled.img`
  display: block;
  width: 100%;
`;
const BottomBussiness = styled.div`
  margin-top: 125px;
  width: 73%;
  @media all and (max-width: 1380px) {
    margin-top: 104px;
  }
  @media all and (max-width: 1080px) {
    margin-top: 130px;
  }
  @media all and (max-width: 768px) {
    margin-top: 87px;
  }
  @media all and (max-width: 360px) {
    margin-top: 55px;
  }
`;
const BussinessImage = styled.img`
  display: block;
  width: 100%;
`;
const GraphImage = styled.div`
  @media all and (max-width: 1380px) {
    display: none;
  }
`;

export default Summary;
