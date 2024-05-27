import { useState } from 'react'
import './App.css'
import "./styles/tailwind.css";
import MainPageholder from './Page/MainPageholder';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MymainPortfolio from './Page/MymainPortfolio';
import WebDesign from './Page/WebDesign';
import WordpressPage from './Page/WordpressPage';
import ContactPage from './Page/ContactPage';





function App() {  
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' font-jakarta '>
    <Router>
          <Routes>
            
            <Route path="/" element={<MainPageholder />} />
            <Route path="/portfolio" element={<MymainPortfolio />} />
            <Route path="/webDesign" element={<WebDesign />} />
            <Route path="/Wordpress" element={<WordpressPage />} />
            <Route path="/contactPage" element={<ContactPage />} />
          </Routes>
        </Router>
   
    </div>
   
    </>
  )
}

export default App;
