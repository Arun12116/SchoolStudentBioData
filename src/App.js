import { useState } from "react";
import Header from "./Components/Header/Header";
import Add from "./Components/Add/Add";
import Retrieve from "./Components/Retrieve/Retrieve";
import Tab from "./Components/Tabs/Tab";


function App() {

  const tabs = {
    Add: "Add",
    Reterive: "Reterive"


  }
  const [currentTabs, setCurrentTabs] = useState(tabs.Add)

  const changeTabes=(value)=>{
    setCurrentTabs(value)

  }
  return (

    <>
      <Header />
      <div className="wrapper" style={{margin:"auto",width:"1024px"}}>
      <Tab changeTabes={changeTabes}/>
        {
          currentTabs === tabs.Add ? <Add /> : <Retrieve />
          }
      </div>

    </>
  );
}

export default App;
