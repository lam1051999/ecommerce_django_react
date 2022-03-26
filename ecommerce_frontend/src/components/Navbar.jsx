import React from 'react'
import styled from 'styled-components';
import {BsSearch, BsCart} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
`

const Wrapper = styled.div`
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Left = styled.div`
    flex: 1;
`
const SearchContainer = styled.div`
    width: 60%;
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    padding: 5px;
    justify-content: space-around;
    height: 20px;
`
const Input = styled.input`
    height: 100%;
    width: 80%;
    border: none;
    font-size: 0.8em;
    &:focus {
        outline: none;
    }
`
const Center = styled.div`
    flex: 1;
`
const BrandName = styled.div`
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    font-weight: bold;
    font-size: 30px;
    padding: 10px 0px;
    font-size: 40px;
`
const Right = styled.div`
    flex: 1;
    padding-right: 30px;
`
const RightContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const ActionAuthText = styled.div`
    margin: 0px 10px;
    padding: 5px 10px;
    cursor: pointer;
`
const IconContainer = styled.div`
    position: relative;
    padding: 3px 3px;
    cursor: pointer;
`
const BadgeContainer = styled.div`
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: #512da8;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const BadgeText = styled.div`
    font-size: 10px;
    color: white;
`

export default function Navbar() {
    const navigate = useNavigate()

    return (
    <Container>
        <Wrapper> 
            <Left>
                <SearchContainer>
                    <Input placeholder='Search'/>
                    <BsSearch />
                </SearchContainer>
            </Left>
            <Center>
                <BrandName onClick={() => navigate("/")}>
                    ONTOP.
                </BrandName>
            </Center>
            <Right>
                <RightContainer>
                    <ActionAuthText>REGISTER</ActionAuthText>
                    <ActionAuthText>SIGN IN</ActionAuthText>
                    <IconContainer>
                        <BadgeContainer>
                            <BadgeText>4</BadgeText>
                        </BadgeContainer>
                        <BsCart size={20}/>
                    </IconContainer>
                </RightContainer>
            </Right>
        </Wrapper>
    </Container>
  )
}
