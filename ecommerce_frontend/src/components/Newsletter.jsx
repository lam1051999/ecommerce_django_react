import React from "react";
import styled from "styled-components";
import { IoSendSharp } from "react-icons/io5";

const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px 100px 0px;
`;
const NewsletterTitle = styled.h1`
  font-size: 50px;
`;
const NewsletterText = styled.p`
  font-size: 20px;
`;
const NewsletterMailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const NewsletterMailInput = styled.input`
  height: 100%;
  width: 40%;
  border: 1px solid lightgrey;
  padding: 10px;
  font-size: 1.2em;
  &:focus {
    outline: none;
  }
`;
const NewsletterMailSendContainer = styled.div`
  width: 80px;
  height: 40px;
  background-color: teal;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export default function Newsletter() {
  return (
    <NewsletterContainer>
      <NewsletterTitle>Newsletter</NewsletterTitle>
      <NewsletterText>
        Get timely updates from your favorite products.
      </NewsletterText>
      <NewsletterMailContainer>
        <NewsletterMailInput placeholder="Your email" />
        <NewsletterMailSendContainer>
          <IoSendSharp color="white" />
        </NewsletterMailSendContainer>
      </NewsletterMailContainer>
    </NewsletterContainer>
  );
}
