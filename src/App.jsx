import "./App.css"
import DropdownMenu from "./hooks/components/DropdownMenu";
import { Description } from "./hooks/components/DropdownMenu/style";
import { Route, Router, Routes } from "react-router-dom"
import Navbar from "./hooks/components/Navbar";
import TeamComposition from "./components/Team"
//import Accordion from "./hooks/components/accordion/src";


function Home(){
  return(
    <Navbar/>
  )
}

function App() {
  return (
    <body>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/teams" Component={TeamComposition}/>
      </Routes>
    </body>
  );
}

export default App;


