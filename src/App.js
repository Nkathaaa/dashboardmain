
import './App.css';
import Router from "./route.js"
import { BrowserRouter, Route,Routes, Link,Switch } from 'react-router-dom';

import MainLayout from "./Hoc/mainLayout";
import Auth from "./components/auth"
import Home from "./components/home.js"
import Movie from "./components/movie.js"
function App() {
  return (
  
    <BrowserRouter>
    <MainLayout>
    <Routes>
  
      <Route path="/" element={<Auth />}/>
      <Route  path="/home" element={<Home />}/>  
      <Route path="/auth" element={<Auth />}/>
      <Route path="/movie" element={<Movie />}/>
     
    </Routes>
    </MainLayout>
  </BrowserRouter>
  )
}

export default App;
