

import { BrowserRouter, Route,Routes, Link,Switch } from 'react-router-dom';

import MainLayout from "./Hoc/mainLayout";
import Auth from "./components/auth"
import Home from "./components/home.js"
import Header from "./components/Navigation/header"
import Dashboard from "./components/dashboard/dashboard"

function Router() {
  return (
  
    <BrowserRouter>
     <Header/>
      <MainLayout>
        <Routes>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/auth" element={<Auth />}/>
            <Route path="/" element={<Auth />}/>
        </Routes>
     </MainLayout>
  </BrowserRouter>
  )
}

export default Router;
