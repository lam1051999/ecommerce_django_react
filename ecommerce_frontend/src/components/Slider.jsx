import React, { useState } from 'react'
import styled from 'styled-components'
import {MdArrowLeft, MdArrowRight} from 'react-icons/md'
import slide_data from '../assets/data/slide_data'

const SliderContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    overflow: hidden;
`
const Arrow = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    left: ${props => props.direction === 'left' && "10px"};
    right: ${props => props.direction === 'right' && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 1000;
`
const SliderWrapper = styled.div`
    display: flex;
    transform: translateX(${props => props.slideNumber * -100}vw);
    transition: all 1s ease;
`
const Slide = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.background_color};
`
const ImageContainer = styled.div`
    flex: 1;
`
const ImageMain = styled.img`
    height: 80vh;
`
const InforContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`
const InforDetail = styled.div`
    padding: 0px 100px;
`
const SaleTitle = styled.h1`
    font-size: 50px;
`
const SaleContent = styled.p`
    letter-spacing: 3px;
    margin: 30px 0px;
`
const ShopButton = styled.button`
    cursor: pointer;
    padding: 10px 20px;
    font-size: 20px;
    background-color: transparent;
    border: 1px solid black;
    transition: all 0.2s ease-in-out;
`

export default function Slider() {
    const [slideNumber, setSlideNumber] = useState(0)

    const handleArrowSlide = (direction) => {
        if(direction === 'left'){
            setSlideNumber(slideNumber > 0?slideNumber - 1:2)
        }
        else{
            setSlideNumber(slideNumber < 2?slideNumber + 1:0)
        }
    }

    return (
        <SliderContainer>
            <Arrow direction='left' onClick={() => handleArrowSlide("left")}>
                <MdArrowLeft size={30}/>
            </Arrow>
            <SliderWrapper slideNumber={slideNumber}>
                {slide_data.map(item => 
                    <Slide key={item.id} background_color={item.color}>
                        <ImageContainer>
                            <ImageMain src={item.image_src}></ImageMain>
                        </ImageContainer>
                        <InforContainer>
                            <InforDetail>
                                <SaleTitle>{item.title}</SaleTitle>
                                <SaleContent>{item.content}</SaleContent>
                                <ShopButton>SHOP NOW</ShopButton>
                            </InforDetail>
                        </InforContainer>
                    </Slide>
                )}
            </SliderWrapper>
            <Arrow direction='right' onClick={() => handleArrowSlide("right")}>
                <MdArrowRight size={30}/>
            </Arrow>
        </SliderContainer>
  )
}
