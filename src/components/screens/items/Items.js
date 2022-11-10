import React from 'react'
import styled from 'styled-components';

export default function Items() {
  return (
    <Container>
        <Title>Products.....</Title>
    </Container>
  )
}
const Container =styled.section`

`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: blue;
  text-align: center;
  margin: 0 auto;
`;