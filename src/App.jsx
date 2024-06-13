import { Route, Routes } from "react-router-dom";
import "./App.css"
import Home from "./styles/tailwindcss/components/home";
import Navbar from "./hooks/components/Navbar";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";

import TeamComposition from "./components/Team";
import GetCep from "./request";



function App() {
  return (
    <body>   
      <Routes>
        <Route path="/" Component={GetCep}/>
        <Route path="/navbar" Component={Navbar}/>
        <Route path="/page-one" Component={PageOne}/>
        <Route path="/page-two" Component={PageTwo}/>
        <Route path="/page-three" Component={PageThree}/>
        <Route path="/teams" Component={TeamComposition}/>
      </Routes>
    </body>
  );
}

export default App;


