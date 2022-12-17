import { PopularProducts } from "../data"
import styled from "styled-components"
import Product from "./Product"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`


const Products = (item) => {
  return (
   <Container>
    {PopularProducts.map(item=>(
        <Product item={item} key = {item.id}/>
    ))}
   </Container>
  )
}

export default Products