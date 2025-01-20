import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./main_component/Layout";
import Home from "./component/Home";

const App =()=> {
  return (
    
      <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home/>}/>

            </Route>
        </Routes>
      </BrowserRouter>
      
      </>
  );
}

export default App;
