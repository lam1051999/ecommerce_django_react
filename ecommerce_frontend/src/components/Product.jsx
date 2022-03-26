import React from "react";
import { BsCart, BsSearch } from "react-icons/bs";
import styled, { keyframes } from "styled-components";

const SampleProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: center;
  background-color: #fafafa;
`;
const SampleProductAction = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  z-index: -1;
`;
const SampleProductWrapper = styled.div`
  position: relative;
  width: 18%;
  padding: 10px 10px 70px 10px;
  &:hover ${SampleProductAction} {
    background-color: rgba(1, 1, 1, 0.2);
    z-index: 2;
  }
  padding-bottom: 70px;
`;
const SampleProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.2);
  }
`;
const SampleProductPrice = styled.div`
  line-height: 40px;
  font-weight: bold;
`;

const SampleProductName = styled.div``;
const NoProductText = styled.p`
  text-align: center;
`;
const SampleProductWrapperLoading = styled(SampleProductWrapper)`
  padding: 10px;
`;
const wave = keyframes`
  0% {
    background-position: -800px 0
  }
  100% {
    background-position: 800px 0
  }
`;
const LoadingTemplate = styled.div`
  width: 100%;
  height: 15em;
  animation: ${wave} 2s linear infinite forwards;
  background: linear-gradient(to right, #f5f5f5 8%, #e0e0e0 18%, #f5f5f5 33%);
  background-size: 800px 104px;
  position: relative;
`;

const LoadingWave = styled.div`
  background-color: #fff;
  position: absolute;
`;

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

function capitalizeFirst(text) {
  return text
    .split(" ")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
    .join(" ");
}

export default function Product({ sample, isLoading }) {
  const loadingItemsCount = Array.from(Array(12).keys());

  return (
    <SampleProductContainer>
      {isLoading ? (
        loadingItemsCount.map((item) => (
          <SampleProductWrapperLoading key={item}>
            <LoadingTemplate>
              <LoadingWave />
            </LoadingTemplate>
          </SampleProductWrapperLoading>
        ))
      ) : sample.length == 0 ? (
        <NoProductText>There is no products to display</NoProductText>
      ) : (
        sample.map((item) => (
          <SampleProductWrapper key={item.id}>
            <SampleProductImage src={item.images[0]} />
            <SampleProductAction>
              <IconWrapper>
                <BsCart size={20} />
              </IconWrapper>
              <IconWrapper>
                <BsSearch size={20} />
              </IconWrapper>
            </SampleProductAction>
            <SampleProductPrice>
              {formatter.format(item.price / 22872.5)}
            </SampleProductPrice>
            <SampleProductName>{capitalizeFirst(item.name)}</SampleProductName>
          </SampleProductWrapper>
        ))
      )}
    </SampleProductContainer>
  );
}
