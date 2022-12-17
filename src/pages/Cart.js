import Navbar from "../Components/Navbar"
import Announcement from "../Components/Announcement"
import Footer from "../Components/Footer"
import styled from "styled-components"
import { Add, Remove } from "@material-ui/icons"
import { mobile } from "../Responsive"
import { Link } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import {incNumber, decNumber} from '../actions/index'


const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`
const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`
const Bottom = styled.div`
    display: flex;
    justify-content:space-between;
    ${mobile({ flexDirection: "column" })}
`

const Info = styled.div`
    flex: 3;
 `
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
 `

const ProductDetails = styled.div`
    flex: 2;
    display: flex;
 `

const Image = styled.img`
 width: 200px;
 `

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
 `

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`   
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};

 `

const ProductSize = styled.span``

const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
 `
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 6px;
    ${mobile({ margin: "5px 15px" })}
`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })} 
`
const Summary = styled.div`
    flex: 1;
    border:1px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
 `
const Hr = styled.hr`
    background-color: #eee;
    height: 2.5px;
    border: none;
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`

const SummaryItemText = styled.span`

`

const SummaryItemPrice= styled.span``

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
 
`

const Cart = () => {
    const myState=useSelector((state)=>state.changeNumber);
    const dispatch=useDispatch();

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <Link to='/productlist'><TopButton>CONTINUE SHOPPING</TopButton></Link>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <Image src="https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80 " />
                                <Details>
                                    <ProductName><b>Product: </b>Leather Jacket</ProductName>
                                    <ProductId><b>ID: </b> 22345675</ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize><b>Size: </b>L</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                <a title="decrement" onClick={()=>dispatch(decNumber())} className="minus"><span>-</span></a>                            
                                    <input type="text" name="quantity" className="quantity_input" value={myState}/>
                                    <a title="increment" onClick={()=>dispatch(incNumber())} className="plus"><span>+</span></a> 
                                </ProductAmountContainer>
                                <ProductPrice>$ 35</ProductPrice>
                            </PriceDetails>
                        </Product>
                    <Hr/>    
                        <Product>
                            <ProductDetails>
                                <Image src="https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=369&q=80 " />
                                <Details>
                                    <ProductName><b>Product: </b>Denim Jacket</ProductName>
                                    <ProductId><b>ID: </b> 2212365</ProductId>
                                    <ProductColor color="blue" />
                                    <ProductSize><b>Size: </b>M</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>                          
                                    <a title="decrement" onClick={()=>dispatch(decNumber())} className="minus"><span>-</span></a>                            
                                    <input type="text" name="quantity" className="quantity_input" value={myState}/>
                                    <a title="increment" onClick={()=>dispatch(incNumber())} className="plus"><span>+</span></a>                          
                                </ProductAmountContainer>
                                <ProductPrice>$ 26</ProductPrice>
                            </PriceDetails>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Sub Total</SummaryItemText>
                            <SummaryItemPrice>$ 55</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping discount</SummaryItemText>
                            <SummaryItemPrice>$ 5</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type = "total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 55</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart