import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "../../utils/utils";
import Product from "../../components/Product";
import styled from "styled-components";

const Title = styled.h1`
  padding: 0px 20px;
`;
const SortContainer = styled.div`
  padding: 0px 20px;
`;
const SortTitle = styled.label`
  font-weight: bold;
`;
const SortDropdown = styled.select``;
const SortValue = styled.option``;

export default function EachCategory() {
  const query = useQuery();
  const [categoryProducts, setCategoryProducts] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  async function getCategoryProducts() {
    setIsLoading(true);
    try {
      const resp = await axios.get(
        `${process.env.REACT_APP_ECOMMERCE_PROJECT_API}/categories/${query.get(
          "id"
        )}/`
      );
      const tmp = [...resp.data.products];
      tmp.sort((a, b) => (a.name > b.name ? 1 : -1));
      setCategoryProducts({ ...resp.data, products: tmp });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }
  function handleSelectChange(e) {
    let newProductList = [...categoryProducts.products];
    if (e.target.value == "name_asc") {
      newProductList.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else if (e.target.value == "name_desc") {
      newProductList.sort((a, b) => (a.name < b.name ? 1 : -1));
    } else if (e.target.value == "price_asc") {
      newProductList.sort((a, b) => (a.price > b.price ? 1 : -1));
    } else if (e.target.value == "price_desc") {
      newProductList.sort((a, b) => (a.price < b.price ? 1 : -1));
    } else if (e.target.value == "newest") {
      newProductList.sort((a, b) => (a.created_at < b.created_at ? 1 : -1));
    } else if (e.target.value == "top_sellers") {
      newProductList.sort((a, b) =>
        a.size_s_total +
          a.size_m_total +
          a.size_l_total -
          (a.size_s_remain + a.size_m_remain + a.size_l_remain) <
        b.size_s_total +
          b.size_m_total +
          b.size_l_total -
          (b.size_s_remain + b.size_m_remain + b.size_l_remain)
          ? 1
          : -1
      );
    } else if (e.target.value == "size_s") {
      newProductList = [
        ...newProductList.filter((item) => item.size_s_remain > 0),
      ];
    } else if (e.target.value == "size_m") {
      newProductList = [
        ...newProductList.filter((item) => item.size_m_remain > 0),
      ];
    } else if (e.target.value == "size_l") {
      newProductList = [
        ...newProductList.filter((item) => item.size_l_remain > 0),
      ];
    }
    setCategoryProducts({ ...categoryProducts, products: newProductList });
  }
  useEffect(() => {
    getCategoryProducts();
  }, []);

  return (
    <>
      <Title>{categoryProducts.type_tag}</Title>
      <SortContainer>
        <SortTitle>Sort Products: </SortTitle>
        <SortDropdown onChange={handleSelectChange}>
          <SortValue value="name_asc">Name (asc)</SortValue>
          <SortValue value="name_desc">Name (desc)</SortValue>
          <SortValue value="price_asc">Price (asc)</SortValue>
          <SortValue value="price_desc">Price (desc)</SortValue>
          <SortValue value="newest">Newest</SortValue>
          <SortValue value="top_sellers">Top Sellers</SortValue>
          <SortValue value="size_s">Size S</SortValue>
          <SortValue value="size_m">Size M</SortValue>
          <SortValue value="size_l">Size L</SortValue>
        </SortDropdown>
      </SortContainer>
      {categoryProducts.products ? (
        <Product sample={categoryProducts.products} isLoading={isLoading} />
      ) : null}
    </>
  );
}
