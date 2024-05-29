import { SquareContainer, SquareLink } from "./styles";

export default function Square(props){
    
    console.log(props.borderStyle)

    return(
        <SquareContainer borderStyle={props.borderStyle} colorStyles={props.colorStyles}>
            <SquareLink  href="https://styled-components.com/" target="_blank">
                {props.borderStyle ? props.borderStyle : "Adicione a prop no Square"}
                {props.colorStyles ? props.colorStyles : "Adicione a cor"}
                </SquareLink>
        </SquareContainer>
    )
}