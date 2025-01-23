import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./main_component/Layout";
import Home from "./component/Home";
import Service from "./component/Service";
import About from "./component/About";
import Sport from "./component/Sport";
import Contact from "./component/Contact";
import Policy from "./component/Policy";
import TermsAndConditions from "./component/TermsAndConditions";
import Disclaimer from "./component/Disclaimer";

const App =()=> {
  return (
    
      <>
      <BrowserRouter>
        <Routes>
              <Route path="/" element={<Layout/>}>
              <Route path="/" element={<Home/>}/> 
              <Route path="home" element={<Home/>}/> 
              <Route path="service" element={<Service/>}/>
              <Route path="about" element={<About/>}/>
              <Route path="sport" element={<Sport/>}/>
              <Route path="contact" element={<Contact/>}/>
              <Route path="policy" element={<Policy/>}/>
              <Route path="termsAndcondition" element={<TermsAndConditions/>}/>
              <Route path="disclaimer" element={<Disclaimer/>}/>

            </Route>
        </Routes>
      </BrowserRouter>
      
      </>
  );
}

export default App;
