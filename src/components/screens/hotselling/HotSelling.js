import React from "react";
import styled from "styled-components";

function HotSelling() {
  return (
    <>
      <ProductContainer>
        <ProductTop>
          <TopLeft>
            <Bell>
              <BellContainer>
                <BellImage
                  src={require("../../Assets/images/bell.svg").default}
                  alt="bell"
                />
              </BellContainer>
              <BellNotification>6</BellNotification>
            </Bell>

            <MessageContainer>
              <MessageImage
                src={require("../../Assets/images/chat.svg").default}
                alt="chat"
              />
            </MessageContainer>
          </TopLeft>
          <TopRight>
            <Personcontainer>
              <PersonImage src={require("../../Assets/images/person.jpg")} />
            </Personcontainer>
            <ArrowContainer>
              <ArrowImage
                src={require("../../Assets/images/arrow.svg").default}
                alt="arrow"
              />
            </ArrowContainer>
          </TopRight>
        </ProductTop>

        <ProductBottom>
          <BottomTop>
            <ProductTitle>Hot Selling Products</ProductTitle>
            <ProductOptions>See all</ProductOptions>
          </BottomTop>

          <ProductItems>
            <ProductItem>
              <ImageContainer>
                <ProductImage
                  src={require("../../Assets/images/dominoes.jpg")}
                  alt="dominoes"
                />
              </ImageContainer>
              <ProductDetails>
                <ProductName>Dominoes Caffee Table Game</ProductName>
                <ProductSale>50k Sales</ProductSale>
              </ProductDetails>
              <ProductPrice>$30</ProductPrice>
            </ProductItem>

            <ProductItem>
              <ImageContainer>
                <ProductImage
                  src={require("../../Assets/images/wirless-speaker.jpg")}
                  alt="wirless-speaker"
                />
              </ImageContainer>
              <ProductDetails>
                <ProductName>Photive Wireless Speakers</ProductName>
                <ProductSale>44k Sales</ProductSale>
              </ProductDetails>
              <ProductPrice>$19</ProductPrice>
            </ProductItem>

            <ProductItem>
              <ImageContainer>
                <ProductImage
                  src={require("../../Assets/images/urbanears-speakers.jpg")}
                  alt="speakers"
                />
              </ImageContainer>
              <ProductDetails>
                <ProductName>Urbanears Lotson Speaker</ProductName>
                <ProductSale>42k Sales</ProductSale>
              </ProductDetails>
              <ProductPrice>$79</ProductPrice>
            </ProductItem>

            <ProductItem>
              <ImageContainer>
                <ProductImage
                  src={require("../../Assets/images/headphones.jpg")}
                  alt="headphones"
                />
              </ImageContainer>
              <ProductDetails>
                <ProductName>Platttan 2 Headphones</ProductName>
                <ProductSale>38k Sales</ProductSale>
              </ProductDetails>
              <ProductPrice>$35</ProductPrice>
            </ProductItem>

            <ProductItem>
              <ImageContainer>
                <ProductImage
                  src={require("../../Assets/images/solar.jpg")}
                  alt="solar"
                />
              </ImageContainer>
              <ProductDetails>
                <ProductName>Solar Hand Crank Radio</ProductName>
                <ProductSale>30k Sales</ProductSale>
              </ProductDetails>
              <ProductPrice>$28</ProductPrice>
            </ProductItem>
          </ProductItems>

          <BottomFooter>
            <FooterLeft>
              <Help>What can We help you with ?</Help>
              <Contact>
                <Chat>Chat with us</Chat>
                <Arrow>
                  <ImageArrow
                    src={require("../../Assets/images/arrow.svg").default}
                    alt="arrow"
                  />
                </Arrow>
              </Contact>
            </FooterLeft>
            <FooterRight>
              <FooterImage
                src={require("../../Assets/images/businessman3.svg").default}
                alt="businessman3"
              />
            </FooterRight>
          </BottomFooter>
        </ProductBottom>
      </ProductContainer>
    </>
  );
}

const ProductContainer = styled.section`
  background: #f1f1f3;
  width: 50%;
  padding: 20px;
  margin: 0 auto;
`;

const ProductTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TopLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
const Bell = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
const BellContainer = styled.div`
  width: 30px;
`;
const BellImage = styled.img`
  width: 100%;
  display: block;
`;
const BellNotification = styled.div`
  height: 20px;
  width: 20px;
  background: #f89076;
  border-radius: 50%;
  margin: 0 auto;
  font-size: 14px;
  font-weight: 500;
  font-family: "Poppins-Bold";
  text-align: center;
  position: absolute;
  top: -4px;
  right: 88px;
`;
const MessageContainer = styled.div`
  width: 30px;
  margin-left: 60px;
  &:hover {
    cursor: pointer;
  }
`;
const MessageImage = styled.img`
  width: 100%;
  display: block;
`;
const TopRight = styled.div`
  display: flex;
  align-items: center;
`;
const Personcontainer = styled.div`
  width: 45px;
  &:hover {
    cursor: pointer;
  }
`;
const PersonImage = styled.img`
  display: block;
  width: 100%;
  border-radius: 8px;
`;
const ArrowContainer = styled.div`
  width: 20px;
  &:hover {
    cursor: pointer;
  }
`;
const ArrowImage = styled.img`
  display: block;
  width: 100%;
`;
const ProductBottom = styled.div`
  margin-top: 60px;
`;
const BottomTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ProductTitle = styled.h3`
  margin: 0px 0px 0px 44px;
  font-size: 22px;
  font-family: "Poppins-regular";
  font-weight: 600;
`;
const ProductOptions = styled.h5`
  margin: 0px;
  font-family: "Poppins-regular";
  font-weight: 600;
`;
const ProductItems = styled.ul``;
const ProductItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;
const ImageContainer = styled.div`
  width: 23%;
`;
const ProductImage = styled.img`
  display: block;
  width: 100%;
  border-radius: 8px;
`;
const ProductDetails = styled.div`
  width: 55%;
`;
const ProductName = styled.h4`
  font-size: 14px;
  margin: 0;
`;
const ProductSale = styled.h5`
  margin: 0;
  font-family: "Poppins-Bold";
  font-size: 12px;
`;
const ProductPrice = styled.h3`
  font-family: "Poppins-regular";
  font-size: 16px;
  margin: 0px 0px 13px;
`;
const BottomFooter = styled.div`
  display: flex;
  margin: 40px;
`;
const FooterLeft = styled.div``;
const Help = styled.p`
  font-family: "Poppins-Bold";
  font-size: 18px;
`;
const Contact = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
const Chat = styled.h6`
  font-family: "Poppins-Regular";
  color: #373c8b;
  font-size: 16px;
`;
const Arrow = styled.div``;
const ImageArrow = styled.img`
  display: block;
  width: 100%;
  transform: rotate(270deg);
  filter: invert(0.2) sepia(1) hue-rotate(200deg) saturate(4) brightness(1);
`;
const FooterRight = styled.div`
  margin-top: 54px;
  width: 70%;
`;
const FooterImage = styled.img`
  display: block;
  width: 100%;
`;

export default HotSelling;
