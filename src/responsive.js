import { css } from "styled-components"    // using styled component css

export const mobile = (props) => {        // this function will return media query
    return css`                        
    @media only screen and (max-width:380px){
            ${props}
    }
    `
}