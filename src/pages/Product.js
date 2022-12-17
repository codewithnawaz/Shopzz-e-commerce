import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../Components/Announcement"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import NewsLetter from "../Components/NewsLetter"
import { mobile } from "../Responsive"


const Container= styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ flexDirection: "column",padding:"10px" })}
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
      flex: 1;
      padding: 0px 50px;
      
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`;


const Filter = styled.div`
    display: flex;
    align-items: center;
  
`;


const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;

`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;


const FilterSizeOption = styled.option``;


const AddContainer = styled.div` 
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div `
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span` 
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`;





const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
            <Image src = "https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80 "/>
            </ImgContainer>
            <InfoContainer>
            <Title>Jacket</Title>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, unde! Eveniet sunt, perferendis voluptatum accusantium pariatur repellendus, incidunt modi explicabo commodi minima totam nam a veritatis distinctio expedita molestiae sequi ad ullam saepe fuga deleniti cum maiores facere nihil! Ex?</Desc>
            <Price>$ 30</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color = "black"/>
                    <FilterColor color = "darkblue"/>
                    <FilterColor color = "gray"/>
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>
                    <Button>ADD TO CART </Button>
            </AddContainer>
            </InfoContainer>
        </Wrapper>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default Product