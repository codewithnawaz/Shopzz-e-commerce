import { Send } from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from '../Responsive'

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`
const Title = styled.h1`
    font-size: 70px;
    margin: 20px;
    ${mobile({ textAlign:"center" })}
`
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign:"center" })}
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width:"80%" })}

`
const Input = styled.input`
    flex: 8;
    border: none;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color:white;
`



const NewsLetter = () => {
  return (
    <Container>
        <Title>News letter</Title>
        <Desc> Get timely updates from your favorite products.</Desc>
        <InputContainer>
        <Input placeholder = "Your email"/>
        <Button>
            <Send/>
        </Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter