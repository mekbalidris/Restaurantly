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

function App() {

  return (
    <>
    <Router>
    <div className="flex flex-col">
        <Nav />
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
            <Route path="/book-table" element={<BookTable />} />
            <Route path="/accessaccount" element={<Access />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

        </Routes>
    </div>
</Router>
    </>
  )
}

export default App
