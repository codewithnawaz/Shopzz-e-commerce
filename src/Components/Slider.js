import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
import { useState } from "react"
import { sliderItems } from "../data"
import { mobile } from "../Responsive"
import { Link } from "react-router-dom"


const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    ${mobile({ display:"none" })}
`
const Arrow = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto; 
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=>props.slideIndex * -100}vw);
    transition: 1s all ease;
`

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
`
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;

`
const Image = styled.img`
   height: 80%;
   
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;

`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;

`


const Slider = () => {

const [slideIndex, setSlideIndex] = useState(0) 
const handleClick = (direction)=>{

    if(direction==="left"){
        setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2 )
    }else{
        setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
    }


};

    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
                <Wrapper slideIndex={slideIndex} >
            {sliderItems.map((item)=>(
                <Slide key = {item.id}>
                    <ImgContainer>
                        <Image src={item.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Link to="/productlist"><Button>SHOP NOW</Button></Link>
                    </InfoContainer>
                </Slide>
               ))} 
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider