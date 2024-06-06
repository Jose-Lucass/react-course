import styled from "styled-components";


export const Container = styled.div`
width: 368px;
height: 340px;

display: flex;
flex-direction: column;
border: 1px solid black;
justify-content: center;
align-items: center;
`

export const Content = styled.div`
display: flex;
padding: 8px 0;
width: 320px;
gap: 12px;
`
export const ContentText = styled.div`
display: flex;
flex-direction: column;

`

export const Title = styled.h1`
font-size: 16px;
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const Description = styled.p`
font-size: 14px;
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const Image = styled.img`
width: 24px;
height: 24px;
`
