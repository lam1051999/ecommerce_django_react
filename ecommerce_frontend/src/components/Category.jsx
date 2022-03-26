import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: center;
`;
const CategoryWrapper = styled.div`
  position: relative;
  width: 32%;
`;
const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const CategoryInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CategoryName = styled.h1`
  color: white;
  transition: all 0.5s ease;
`;
const CategoryButton = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  font-size: 20px;
  background-color: transparent;
  border: 1px solid white;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.5s ease;
`;

export default function Category() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  async function getCategories() {
    try {
      const resp = await axios.get(
        `${process.env.REACT_APP_ECOMMERCE_PROJECT_API}/categories/`
      );
      setCategories(resp.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getCategories();
  }, []);
  function navigateToCategory(item_id, item_url) {
    navigate(`/category?id=${item_id}&category=${item_url}`);
  }

  return (
    <CategoryContainer>
      {categories.map((item) => (
        <CategoryWrapper key={item.type_id}>
          <CategoryImage src={item.refer_image} />
          <CategoryInfo>
            <CategoryName>{item.type_tag}</CategoryName>
            <CategoryButton
              onClick={() => navigateToCategory(item.type_id, item.type_url)}
            >
              SHOP NOW
            </CategoryButton>
          </CategoryInfo>
        </CategoryWrapper>
      ))}
    </CategoryContainer>
  );
}
