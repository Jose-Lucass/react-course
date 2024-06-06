import { useState } from "react";
import styles, { AccordionButton, AccordionContainer, AccordionContent, AccordionImage, AccordionText, AccordionWrapper, ContentText } from "./style"
import { AngleDown, AngleUp } from "./svg";

export default function Accordion(){
    // controle de estado do content
    const [Visible, setVisible ] = useState(false)
    //validação da direção da seta
    const handleAngle = Visible === false ? AngleDown : AngleUp

    //função para abrir e fehcar o accordion
    function HandleAccordion(){
        return setVisible(!Visible)
        
    }
  
    return(
        <AccordionWrapper>
       <AccordionContainer>
        <AccordionText>What is an accordion component?</AccordionText>
        <AccordionButton onClick={HandleAccordion}>
            <AccordionImage src={Visible === false ? AngleDown : AngleUp}/>
        </AccordionButton>
       </AccordionContainer>
       {
        Visible &&( 
        
        <AccordionContent>
            <ContentText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem enim nostrum tenetur fuga consequuntur. Voluptas porro, sed natus corporis dicta, voluptates, doloribus necessitatibus commodi consequuntur suscipit voluptate non at! Dolores?
            </ContentText>
        </AccordionContent>
       )}
       </AccordionWrapper>
    )
}