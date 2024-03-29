import styled from "styled-components"
import Navbar from "../Components/Navbar"
import { mobile } from "../Responsive"


const Container = styled.div`
    width: 100vw;
    height: 91vh;
    background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")
    center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`


const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "75%" })}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
   display: flex;
   flex-direction:column
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin:10px 0px;
    padding: 10px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`
const Link = styled.a`
     margin: 5px 0px;
     font-size: 12px;
     text-decoration: underline;
     cursor: pointer;
`
const Navcontainer = styled.div``;

const Login = () => {
  return (
    <>
    <Navcontainer>
    <Navbar/>
    </Navcontainer>
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder = "username"/>
                <Input placeholder = "password"/>
            <Button>LOGIN</Button>
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
    </>
  )
}

export default Login