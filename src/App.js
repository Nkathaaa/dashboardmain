
import './App.css';
import Router from "./route.js"
import { BrowserRouter, Route,Routes, Link,Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import MainLayout from "./Hoc/mainLayout"
function App() {
  return (
  
    <BrowserRouter>
    <MainLayout>
    <Routes>
      
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/" element={<Login />}/>
     
    </Routes>
    </MainLayout>
  </BrowserRouter>
  )
}

export default App;
