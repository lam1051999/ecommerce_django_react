import React from 'react'
import { SiFacebook } from "react-icons/si";
import {AiFillInstagram, AiOutlineMail} from 'react-icons/ai'
import {BsPinterest, BsYoutube, BsFillTelephoneFill} from 'react-icons/bs'
import styled from 'styled-components'
import {IoLocationSharp} from 'react-icons/io5'

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 10px 30px 100px 30px;
`
const CompanyContainer = styled.div`
    flex: 1;
`
const CompanyName = styled.h1`
`
const CompanyDesc = styled.p`
`
const CompanySocialContainer = styled.div`
    display: flex;
    align-items: center;
    padding-top: 20px;
`
const IconWrapper = styled.div`
    padding-right: 10px;
`
const UsefulLinkContainer = styled.div`
    flex: 1;
`
const UsefulLinkTitle = styled.h3`
`
const UsefulLinkWrapper = styled.div`
    display: flex;

`
const UsefulLinkItemWrapper = styled.div`
    padding-right: 40px;
`
const UseFulLinkItem = styled.p`
    cursor: pointer;
`
const ContactContainer = styled.div`
    flex: 1;
`
const ContactTitle = styled.h3`
`
const ContactInfoContainer = styled.div`
    padding: 10px 0px;
`
const ContactItem = styled.div`
    display: flex;
    align-items: center;
`
const ContactItemText = styled.div`
    padding: 10px 10px;
`
const ContactCardContainer = styled.div`
    display: flex;
`
const ContactCardWrapper = styled.div`
    padding-right: 20px;
`
const ContactCard = styled.img`
    height: 25px;
    cursor: pointer;
`

export default function Footer() {
  return (
    <FooterContainer>
        <CompanyContainer>
            <CompanyName>ONTOP.</CompanyName>
            <CompanyDesc>ONTOP is a Local Brand under Rayma Asia Corp - with the desire to bring unique and dynamic designs aimed at young people, especially students.</CompanyDesc>
            <CompanySocialContainer>
                <IconWrapper>
                    <SiFacebook color='#4267B2' size={30} cursor='pointer' />
                </IconWrapper>
                <IconWrapper>
                    <AiFillInstagram color='#C13584' size={30} cursor='pointer' />
                </IconWrapper>
                <IconWrapper>
                    <BsYoutube color='#FF0000' size={30} cursor='pointer' />
                </IconWrapper>
                <IconWrapper>
                    <BsPinterest color='#E60023' size={30} cursor='pointer' />
                </IconWrapper>
            </CompanySocialContainer>
        </CompanyContainer>
        <UsefulLinkContainer>
            <UsefulLinkTitle>Useful Links</UsefulLinkTitle>
            <UsefulLinkWrapper>
                <UsefulLinkItemWrapper>
                    <UseFulLinkItem>Home</UseFulLinkItem>
                    <UseFulLinkItem>Jackets & Coats</UseFulLinkItem>
                    <UseFulLinkItem>Polos & T-Shirts</UseFulLinkItem>
                    <UseFulLinkItem>Hoodie & Sweater</UseFulLinkItem>
                    <UseFulLinkItem>Accessories</UseFulLinkItem>
                    <UseFulLinkItem>Shorts & Jeans</UseFulLinkItem>
                </UsefulLinkItemWrapper>
                <UsefulLinkItemWrapper>
                    <UseFulLinkItem>Shirts</UseFulLinkItem>
                    <UseFulLinkItem>Cart</UseFulLinkItem>
                    <UseFulLinkItem>Order Tracking</UseFulLinkItem>
                    <UseFulLinkItem>My Account</UseFulLinkItem>
                </UsefulLinkItemWrapper>
            </UsefulLinkWrapper>
        </UsefulLinkContainer>
        <ContactContainer>
            <ContactTitle>Contact</ContactTitle>
            <ContactInfoContainer>
                <ContactItem>
                    <IoLocationSharp size={25} />
                    <ContactItemText>CT1 The Pride, To Huu Street, La Khe Ward, Ha Dong District, Ha Noi</ContactItemText>
                </ContactItem>
                <ContactItem>
                    <BsFillTelephoneFill size={25} />
                    <ContactItemText>(+84) 962 007 024</ContactItemText>
                </ContactItem>
                <ContactItem>
                    <AiOutlineMail size={25} />
                    <ContactItemText>lam1051999@gmail.com</ContactItemText>
                </ContactItem>
            </ContactInfoContainer>
            <ContactCardContainer>
                <ContactCardWrapper>
                    <ContactCard src='https://taichinh.online/wp-content/uploads/2017/02/the-mastercard.png'/>
                </ContactCardWrapper>
                <ContactCardWrapper>
                    <ContactCard src='https://quyetdao.com/wp-content/uploads/2019/04/paypal-logo.png'/>
                </ContactCardWrapper>
                <ContactCardWrapper>
                    <ContactCard src='https://www.investo.vn/wp-content/uploads/2021/05/visa-1.png.webp'/>
                </ContactCardWrapper>
                <ContactCardWrapper>
                    <ContactCard src='https://remote-europe.com/sites/default/files/2020-11/americanexpress.jpg'/>
                </ContactCardWrapper>
                <ContactCardWrapper>
                    <ContactCard src='https://www.investopedia.com/thmb/jXHWp56gMqrRjSpZu3qoDSeGt1w=/735x0/Discover-logo-28a70026a79d4023adafb0f5e2e773cf.jpg'/>
                </ContactCardWrapper>
            </ContactCardContainer>
        </ContactContainer>
    </FooterContainer>
  )
}