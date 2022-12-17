import styled from "styled-components"
import { mobile } from "../Responsive"
import { Link } from "react-router-dom"

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 75vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height:"40vh" })}
`
const Title = styled.h1`
    color: white;
    margin: 20px;
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Button = styled.button`
    border: none;
    background-color: white;
    color: gray;
    padding: 10px;
    cursor: pointer;
    font-weight: 600;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
       <Image src = {item.img}/>
       <Info>
        <Title>{item.title}</Title>
        <Link to="/productlist"><Button>SHOP NOW</Button></Link>
       </Info>
    </Container>
  )
}

export default CategoryItem