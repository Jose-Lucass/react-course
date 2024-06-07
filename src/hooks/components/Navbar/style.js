import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 73px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid black;
    padding: 0 64px;

`

export const Logo = styled.h1`
font-size: 30px;
font-weight: 900;
`

export const Navbar = styled.nav`
    display: flex;
    
    gap: 32px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const Containerbutton = styled.div`
display: flex;
gap: 16px;
`

export const Button = styled.button`
    width: 88px;
    height: 40px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.bgColor ? props?.bgColor : 'transparent'};
    color: ${props.bgColor ? 'white' : 'black'};
    
`

export const Link = styled.button`
    background-color: transparent;
    font-size: 16px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`