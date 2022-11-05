import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    height: 60px;
    
    // EXAMPLE OF HOW TO USE MEDIA QUERY IN STYLED COMPONENTS, but hum ise baar baar explicitly na likhkar ek shortcut function bana lenge
    // @media only screen and (max-width:380px){
    //     background: red;
    // }
    ${mobile({height: '50px'})}
`
const Wrapper = styled.div`
padding: 10px 20px;
display:flex;
align-items: center;
justify-content: space-between;
${mobile({padding: "10px 0px"})}
`
// flex: 1 is used to give equal width to each child 
const Left = styled.div`
flex:1;  
display:flex; 
align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})}
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display:flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px
`
const Input = styled.input`
border: none;
${mobile({width: "50px"})}
`

const Center = styled.div`
flex:1;
text-align: center;
`
const Logo = styled.h1`
     font-weight: bold;
     ${mobile({fontSize: "24px"})}
`

const Right = styled.div`
flex:1;
display: flex;
align-items:center;
justify-content: flex-end;
${mobile({flex: 2, justifyContent: "center"})}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: "12px", marginLeft: "10px"})}
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        {/* It is a material ui icon component and not the styled component */}
                        {/* style --> changing inner style of search icon */}
                        <Search style={{color:"gray", fontSize:16}} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>MD.</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">   {/* material ui badge */}
                            < ShoppingCartOutlined />   {/* material ui icon */}
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar