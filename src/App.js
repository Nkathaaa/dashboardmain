
import './App.css';
import Router from "./route.js"
import { BrowserRouter, Route,Routes, Link,Switch } from 'react-router-dom';

import MainLayout from "./Hoc/mainLayout";
import Auth from "./components/auth"
function App() {
  return (
  
    <BrowserRouter>
    <MainLayout>
    <Routes>
  
      <Route path="/" element={<Auth />}/>
        
      <Route path="/auth" element={<Auth />}/>
     
    </Routes>
    </MainLayout>
  </BrowserRouter>
  )
}

export default App;
