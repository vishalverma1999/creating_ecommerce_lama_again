import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import { Add, Remove } from "@material-ui/icons"
import { mobile } from "../responsive"

const Container = styled.div``

const Wrapper = styled.div`
padding: 20px;
${mobile({padding: "10px"})}
`

const Title = styled.h1`
font-weight: 200;
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
background-color: ${props => props.type === "filled" ? "black" : "transparent"};
color: ${props => props.type === "filled" && "white"};
border: ${props => props.type === "filled" && "none"};
`

const TopTexts = styled.div`
${mobile({display: "none"})}  
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: "column"})}
`
const Info = styled.div`
flex: 3;
`

const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: "column"})}
`

const ProductDetail = styled.div`
flex: 2;
display: flex;
`

const Image = styled.img`
width:200px;
`

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
/* background-color: burlywood; */
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

const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
${mobile({margin: "5px 15px"})}
`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 300;
${mobile({margin: "20px"})}
`

const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`

const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;    // height isliye set ki hai kyunki jaise jaise no. of products badte jaayenge waise waise summary box ka size badta chala jayega and to prevent this we fixed the height to 50vh
`
const SummaryTitle = styled.h1`
font-weight: 200;
`

const SummaryItem = styled.div`
display: flex;
/* align-items: center; */
justify-content: space-between;
margin: 30px 0px;
font-weight: ${props => props.type === "total" && 500};    // or can be wriiten as- font-weight: ${props => props.type === "total" && "500"};
font-size: ${props => props.type === "total" && 24}px;     // or can be wriiten as- font-size: ${props => props.type === "total" && "24px"};

`

const SummaryItemText = styled.span`

`

const SummaryItemPrice = styled.span`

`

const SummaryButton = styled.button`
width: 100%;
padding: 10px;
color: white;
background-color: black;
font-weight: 600;
cursor: pointer;
`
// const SummaryTitle = styled.div``
// const SummaryTitle = styled.div``

const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton  >CONTINUE SHOPPING</TopButton>

                    <TopTexts>
                        <TopText>Shopping Bag (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>

                    <TopButton type={"filled"} >CHECKOUT NOW</TopButton>
                </Top>

                <Bottom>

                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1619487269-tr3mmst080-shoe-angle-global-mens-tree-runner-mist-white-b11537e4-5c45-4443-a1dd-c70c31779715-png-1619487255.jpg?crop=1xw:1xh;center,top&resize=480:*" />
                                <Details>
                                    <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                                    <ProductId><b>ID:</b> 9639807270</ProductId>
                                    <ProductColor color="gray" ></ProductColor>
                                    <ProductSize><b>Size:</b> 37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$ 50</ProductPrice>
                            </PriceDetail>
                        </Product>

                        <Hr></Hr>

                        <Product>
                            <ProductDetail>
                                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1619487269-tr3mmst080-shoe-angle-global-mens-tree-runner-mist-white-b11537e4-5c45-4443-a1dd-c70c31779715-png-1619487255.jpg?crop=1xw:1xh;center,top&resize=480:*" />
                                <Details>
                                    <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                                    <ProductId><b>ID:</b> 9639807270</ProductId>
                                    <ProductColor color="gray" ></ProductColor>
                                    <ProductSize><b>Size:</b> 37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$ 50</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>


                    {/* ------------------------------------------------------------------------------------------ */}

                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>-$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryButton>CHECKOUT NOW</SummaryButton>
                    </Summary>

                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart
