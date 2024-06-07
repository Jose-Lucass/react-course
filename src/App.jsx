import "./App.css"
import DropdownMenu from "./hooks/components/DropdownMenu";
import { Description } from "./hooks/components/DropdownMenu/style";
import Navbar from "./hooks/components/Navbar";
//import Accordion from "./hooks/components/accordion/src";

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
function App() {
  return (
    <body>
      <DropdownMenu pages={pages} />
      <Navbar />
    </body>
  );
}

export default App;


