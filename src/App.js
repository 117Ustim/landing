import Footer from "./js/footer/Footer";
import Header from "./js/header/Header";
import Main from "./js/main/Main";
import { useState } from "react";

function App() {
   const [selectedColor, setSelectedColor] = useState('color__blue');
  return (
  
      <div className="wrapper">
       <Header selectedColor={selectedColor} setSelectedColor={setSelectedColor}/> 
       <Main selectedColor={selectedColor} setSelectedColor={setSelectedColor}/> 
       <Footer/>
      </div>
   
   
  );
}

export default App;
