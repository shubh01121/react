import {useState} from "react";
import ClassCompo from "./Component/ClassCompo";
import FunctionCompo from "./Component/FunctionCompo";



function App() {

  const[count, setCount] = useState(false);
  // state variable // state function       // initial valueof state variable
  const[data, setData] = useState(false);
  const handleFunction = () => {
    setCount(!count);
  }
  
  const handleClass = () => {
    setData(!data);
  }
  return (
    <>
    <h1 className="head">Styling Using Functional and Class Component</h1>
    <button onClick={handleFunction} className="button1"> To see styling in Functional Components</button>
    <button onClick={handleClass} className="button2"> To see styling in Class Components</button>
    
    {count ?<FunctionCompo/>:null}
    {data ?<ClassCompo/>:null}
      
    </>
  );
}

export default App;
