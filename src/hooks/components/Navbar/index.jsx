import { useState } from "react"
import * as S from "./style"
import DropdownMenu from "../DropdownMenu"
import { AngleDown, AngleUp } from "../accordion/src/svg"
import { Link } from "react-router-dom"

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
              <S.Link>
                <Link to="/teams">Teams</Link>
              </S.Link>
                <S.Link>
                  <Link to="/page-one"> Link 1 </Link>
                  </S.Link>
                <S.Link>
                  
                  <Link to="/page-two">Link 2</Link>
                </S.Link>
                <S.Link>
                  <Link to="/page-three">Link 3</Link>
                </S.Link>
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