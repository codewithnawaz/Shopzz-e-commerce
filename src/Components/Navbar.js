import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"


const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    padding: 5px;
    margin-left: 25px;
`
const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}

`
const Rigth = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 3, justifyContent: "center" })}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "16px" })}
`

const Navbar = () => {
    const myState=useSelector((state)=>state.changeNumber);
    
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link to = "/"><Language>EN</Language></Link>

                    <SearchContainer>
                        <Input placeholder="search" />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center><Logo>Shopzz.</Logo></Center>
                <Rigth>
                    <Link to="/register"><MenuItem>REGISTER</MenuItem></Link>
                    <Link to="/login"><MenuItem>SIGN IN</MenuItem></Link>
                    <Link to = "/cart"><MenuItem>
                        <Badge value={myState} >
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem></Link>
                </Rigth>
            </Wrapper>
        </Container>
    
    )
}

export default Navbar;