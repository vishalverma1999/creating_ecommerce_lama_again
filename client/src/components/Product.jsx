import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"

const Info = styled.div`
opacity: 0;     // setting initial opacity to be 0, and jab hover karenge tab info container dikhega, container component ke upar, b/c hum container component mein se info container ki opacity ko 1 kar denge 
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0,0,0,0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;
`
const Container = styled.div`
flex: 1 0 21%;      // done so that per row 4 hi product aayein link--> https://stackoverflow.com/questions/29546550/flexbox-4-items-per-row. The flex property is a shorthand property for the flex-grow, flex-shrink, and flex-basis properties.
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #eef3f5;
position: relative;

// to affect other elements when one element is hovered, we just need to refer in curly bracket with ${Info}
&:hover ${Info} {
    opacity: 1;
}
`
const Circle = styled.div`
height: 200px;
width: 200px;
border-radius: 50%;
background-color: white;
// kyunki display flex hai, hence circle ek row mein aa jayega, so to make it over the image/container, pos ko absolute krna padega
position: absolute;
`
const Image = styled.img`
height: 75%;
z-index: 2;
`
const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
cursor: pointer;
transition: all 0.5s ease;

&:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
}
`

const Product = ({item}) => {
    return (
        <Container>
            <Circle />    {/* it is just created to give a circular background, to look fancier. Although Container has its own bg */}
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product