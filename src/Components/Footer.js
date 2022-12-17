import { EmailOutlined, Facebook, Instagram, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../Responsive"
import {Link} from 'react-router-dom'

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection:"column" })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``

const Desc = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`


const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul` 
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 45%;
    margin-bottom: 10px;
    cursor: pointer;
`


const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display:"none" })}
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor:"#eee" })}
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Shopzz.</Logo>
            <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid soluta tempora id exercitationem perferendis fugit possimus itaque ducimus eos. Quo.
            </Desc>
            <SocialContainer>
                <SocialIcon color = "3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color = "E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color = "55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color = "E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>

            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Acceseries</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
                
            </List>

        </Center>
        <Right>

            <Title>Contact Us</Title>
            <ContactItem><Room style = {{marginRight:"10px"}}/>Street Chicago town USA</ContactItem>
            <ContactItem><Phone style = {{marginRight:"10px"}}/>+1 234 567</ContactItem>
            <ContactItem><EmailOutlined style = {{marginRight:"10px"}}/>EmailUs@Lama.com</ContactItem>

        </Right>
    </Container>
  )
}

export default Footer