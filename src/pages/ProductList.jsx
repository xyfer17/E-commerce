import React from "react";
import styled from "styled-components";
import { Annoucement, Navbar } from "../components";

const Container = styled.div``;
const Title = styled.h1``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Annoucement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>filter1</Filter>
        <Filter>filter2</Filter>
        <Filter>filter3</Filter>
      </FilterContainer>
    </Container>
  );
};

export default ProductList;
