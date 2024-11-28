import './App.css'
import Nav from './pages/Nav'
import Home from './pages/Home'
import About from './pages/About'
import UnderAbout from './pages/UnderAbout'
import Specials from './pages/Specials'

function App() {

  return (
    <>
    <div className='flex flex-col'>

      <Nav />
      <Home />
      <About />
      <UnderAbout />
      <Specials />
    
      </div>
    </>
  )
}

export default App
