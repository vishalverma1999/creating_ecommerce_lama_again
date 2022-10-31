import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
display: flex;
`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1`
font-size: 70px;
`
const Desc = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
display: flex;
`

const SocialIcons = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   color: white;
   background-color: #${props => props.color};
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 20px;
`

const Center = styled.div`
flex: 1;
padding: 20px;
`
const Title = styled.h3`
margin-bottom: 30px;
`
const List = styled.ul`
  margin: 0px;   // ul ki by default  kuch margin and padding hoti hai, isliye margin and padding ko zero kiya hai
  padding: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;         // alternatively we can do it like this also --> flex: 1 0 50%; , here flex-basis is 50%, i.e size of flex item is 50% of flexbox
margin-bottom: 10px;
`
const Right = styled.div`
flex: 1;
padding: 20px;
`
const ContactItem = styled.div`
margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    height: 35px;
    width: 50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>MD.</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit animi velit modi cum nam asperiores natus saepe doloribus at accusantium.</Desc>
                <SocialContainer>
                    <SocialIcons color="3B5999">
                        <Facebook />       {/*mui icon */}
                    </SocialIcons>
                    <SocialIcons color="E4405F">
                        <Instagram />       {/*mui icon */}
                    </SocialIcons>
                    <SocialIcons color="55ACEE">
                        <Twitter />         {/*mui icon */}
                    </SocialIcons>
                    <SocialIcons color="E60023">
                        <Pinterest />       {/*mui icon */}
                    </SocialIcons>
                </SocialContainer>
            </Left>

            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home </ListItem>
                    <ListItem>Cart </ListItem>
                    <ListItem>Man Fashion </ListItem>
                    <ListItem>Woman Fashion </ListItem>
                    <ListItem>Accessories </ListItem>
                    <ListItem>My Account </ListItem>
                    <ListItem>Order Tracking </ListItem>
                    <ListItem>Wishlist </ListItem>
                    <ListItem>Typo Wishlist </ListItem>
                    <ListItem>Terms </ListItem>
                </List>
            </Center>

            <Right>
                <Title>Contact</Title>
                <ContactItem>                             {/*room, phone and mailoutline are mui icons */}
                    <Room style={{ marginRight: "10px" }} /> 622 ballo ki gadiya, chakarnagar
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }} /> +1234567896
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} /> contact@munnu.dada
                </ContactItem>
                <Payment src="https://www.seekpng.com/png/detail/988-9887402_ssl-icon-payment-methods-accepted-uk.png" />    {/*image hai payment, that's why self closing tag */}
            </Right>
        </Container>
    )
}

export default Footer