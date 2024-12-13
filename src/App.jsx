import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Nav from './pages/Nav'
import Home from './pages/Home'
import About from './pages/About'
import UnderAbout from './pages/UnderAbout'
import Menu from './pages/Menu'
import BookTable from './pages/BookTable'
import Login from './pages/Login-Signup/Login';
import Signup from './pages/Login-Signup/Signup';
import Access from './pages/Login-Signup/Access';
import { useEffect, useState } from 'react';

function App() {
    
const [isAuthenticated, setIsAuthenticated] = useState(false);
const token = localStorage.getItem("accessToken");

useEffect(() => {
    if(token){
        setIsAuthenticated(true);
    }
},[token])

  return (
    <>
    <Router>
    <div className="flex flex-col">
        <Nav setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated}/>
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <Home />
                        <About />
                        <UnderAbout />
                        <Menu />
                    </>
                }
            />
            <Route path="/book-table" element={<BookTable isAuthenticated={isAuthenticated} />} />
            <Route path="/accessaccount" element={<Access />} />
            <Route path="/login" element={<Login setisAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} token={token}/>} />
            <Route path="/signup" element={<Signup setisAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} token={token}/>} />

        </Routes>
    </div>
</Router>
    </>
  )
}

export default App
