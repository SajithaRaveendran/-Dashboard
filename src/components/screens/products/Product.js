import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Chat from "../chatbox/Chat";

const products = [
    {
      image: require("../../Assets/images/dominoes.jpg"),
      name: "Dominoes Caffee Table Game",
      sales: "50k Sales",
      price: "$30",
    },
    {
      image: require("../../Assets/images/wirless-speaker.jpg"),
      name: " Photive Wireless Speakers",
      sales: "44k Sales",
      price: "$19",
    },
    {
      image: require("../../Assets/images/urbanears-speakers.jpg"),
      name: " Urbanears Lotson Speaker",
      sales: "42k Sales",
      price: "$79",
    },
    {
      image: require("../../Assets/images/headphones.jpg"),
      name: "Platttan 2 Headphones",
      sales: "38k Sales",
      price: "$35",
    },
    {
      image: require("../../Assets/images/solar.jpg"),
      name: "Solar Hand Crank Radio",
      sales: "30k Sales",
      price: "$28",
    },
  ];

function Product() {
  
  const [more, setMore] = useState(false);
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
            {products.map((val, key) => (
            <ProductItem>
              <ImageContainer>
                <ProductImage
                  src={val.image}
                />
              </ImageContainer>
              <ProductDetails>
                <ProductName>{val.name}</ProductName>
                <ProductSale>{val.sales}</ProductSale>
              </ProductDetails>
              <ProductPrice>{val.price}</ProductPrice>
            </ProductItem>
            ))}
          </ProductItems>

          <BottomFooter>
            <FooterLeft>
              <Help>What can We help you with ?</Help>
              <Contact>
                {/* <Chat1 exact to={"/chat"}>Chat with us</Chat1> */}
                <Chat1
                  onClick={() => {
                    setMore(true);
                  }}
                  text={"+3 More"}
                >
                  Chat with us
                </Chat1>
                {more && (
                  <>
                    <div
                      onClick={() => {
                        setMore(false);
                      }}
                      style={{
                        backdropfilter: "blur(5px)",
                        position: "fixed",
                        right: "0%",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        zIndex: "10",
                        bottom: "2%",
                      }}
                    ></div>{" "}
                    <div
                      style={{
                        position: "absolute",
                        zIndex: "100",
                        right: "10px",
                        top: "15%",
                      }}
                    >
                      <Chat />
                    </div>
                  </>
                )}
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
  width: 30%;
  padding: 20px;
  @media all and (max-width: 980px) {
    width: 40%;
  }
  @media all and (max-width: 480px) {
    display: none;
  }
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
  @media all and (max-width: 640px) {
    display: none;
  }
`;
const MessageContainer = styled.div`
  width: 30px;
  margin-left: 60px;
  &:hover {
    cursor: pointer;
  }
  @media all and (max-width: 640px) {
    display: none;
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
  @media all and (max-width: 1380px) {
    margin-top: 44px;
  }
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
  @media all and (max-width: 1380px) {
    margin: 0;
  }
  @media all and (max-width: 1280px) {
    font-size: 16px;
  }
`;
const ProductOptions = styled.h5`
  margin: 0px;
  font-family: "Poppins-regular";
  font-weight: 600;
  @media all and (max-width: 640px) {
    display: none;
  }
`;
const ProductItems = styled.ul`
  @media all and (max-width: 1380px) {
    padding: 0;
  }
`;
const ProductItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0px;
  }
  @media all and (max-width: 1380px) {
    margin-bottom: 17px;
  }
  @media all and (max-width: 1080px) {
    margin-bottom: 32px;
  }
  @media all and (max-width: 980px) {
    &:last-child {
      display: none;
    }
  }
  @media all and (max-width: 640px) {
    margin-bottom: 15px;
  }
`;
const ImageContainer = styled.div`
  width: 23%;
  @media all and (max-width: 640px) {
    display: none;
  }
`;
const ProductImage = styled.img`
  display: block;
  width: 100%;
  border-radius: 8px;
`;
const ProductDetails = styled.div`
  width: 55%;
  @media all and (max-width: 640px) {
    width: 70%;
  }
`;
const ProductName = styled.h4`
  font-size: 14px;
  margin: 0;
  @media all and (max-width: 1280px) {
    font-size: 12px;
  }
`;
const ProductSale = styled.h5`
  margin: 0;
  font-family: "Poppins-Bold";
  font-size: 12px;
  @media all and (max-width: 1280px) {
    font-size: 10px;
  }
  @media all and (max-width: 1080px) {
    font-family: "Poppins-regular";
  }
`;
const ProductPrice = styled.h3`
  font-family: "Poppins-regular";
  font-size: 16px;
  margin: 0px 0px 13px;
  @media all and (max-width: 1280px) {
    font-size: 12px;
  }
`;
const BottomFooter = styled.div`
  display: flex;
  margin: 40px;
  @media all and (max-width: 1380px) {
    margin: 80px 40px 40px;
  }
  @media all and (max-width: 1280px) {
    margin: 0;
  }
`;
const FooterLeft = styled.div``;
const Help = styled.p`
  font-family: "Poppins-Bold";
  font-size: 18px;
  @media all and (max-width: 1280px) {
    font-size: 16px;
  }
`;
const Contact = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
const Chat1 = styled(Link)`
  font-family: "Poppins-Regular";
  color: #373c8b;
  font-size: 16px;
  text-decoration: none;
  @media all and (max-width: 1280px) {
    font-size: 14px;
  }
`;
const Arrow = styled.div`
  @media all and (max-width: 1280px) {
    width: 20%;
  }
`;
const ImageArrow = styled.img`
  display: block;
  width: 100%;
  transform: rotate(270deg);
  filter: invert(0.2) sepia(1) hue-rotate(200deg) saturate(4) brightness(1);
`;
const FooterRight = styled.div`
  margin-top: 69px;
  width: 70%;
  @media all and (max-width: 1380px) {
    width: 95%;
  }
  @media all and (max-width: 1280px) {
    margin-top: 0;
  }
  @media all and (max-width: 1051px) {
    margin-top: 69px;
  }
`;
const FooterImage = styled.img`
  display: block;
  width: 100%;
`;

export default Product;
