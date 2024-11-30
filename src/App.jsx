import './App.css'
import Nav from './pages/Nav'
import Home from './pages/Home'
import About from './pages/About'
import UnderAbout from './pages/UnderAbout'
import Specials from './pages/Specials'
import Menu from './pages/Menu'

function App() {

  return (
    <>
    <div className='flex flex-col'>

      <Nav />
      <Home />
      <About />
      <UnderAbout />
      <Specials />
      <Menu />
    
      </div>
    </>
  )
}

export default App
