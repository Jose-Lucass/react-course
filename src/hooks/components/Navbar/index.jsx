import { useState } from "react"
import * as S from "./style"
import DropdownMenu from "../DropdownMenu"
import { AngleDown, AngleUp } from "../accordion/src/svg"

export default function Navbar(props){
    
    const [Open,setOpen] = useState(false)

    const handleAngle = Open === false ? AngleDown : AngleUp

    function HandleVisible(){

        return setOpen(!Open)
    }

    const pages=[
        {
        title: "page one",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing."
      },
      {
        title: "page one",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing."
      },
      {
        title: "page one",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing."
      },
      {
        title: "page one",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing."
      },
      ]



    return(
        <S.Container>
            <S.Logo>Logo</S.Logo>
            <S.Navbar>
                <S.Link>Link 1</S.Link>
                <S.Link>Link 2</S.Link>
                <S.Link>Link 3</S.Link>
                <S.Link onClick={HandleVisible}>Link 4 <img src={handleAngle} alt="" /></S.Link>
                    {
                        Open && <DropdownMenu pages={pages}/>
                    }
                    <S.Containerbutton>
                        <S.Button >Button</S.Button>
                        <S.Button bgColor = "black" >Button</S.Button>
                    </S.Containerbutton>
                
            </S.Navbar>
        </S.Container>
    )
}