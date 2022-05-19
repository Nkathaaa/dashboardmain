
import './App.css';
import Router from "./route.js"
import { BrowserRouter, Route,Routes, Link,Switch } from 'react-router-dom';

import MainLayout from "./Hoc/mainLayout";
import Auth from "./components/auth"
import Home from "./components/home.js"

function App() {
  return (
  
    <BrowserRouter>
    <MainLayout>
    <Routes>
  
    
      <Route path="/home" element={<Home />}/>

      <Route path="/" element={<Auth />}/>
   
     
    </Routes>
    </MainLayout>
  </BrowserRouter>
  )
}

export default App;
