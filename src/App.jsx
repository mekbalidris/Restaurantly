import './App.css'
import Nav from './pages/Nav'
import Home from './pages/Home'
import About from './pages/About'
import UnderNav from './pages/UnderNav'
import Specials from './pages/Specials'

function App() {

  return (
    <>
    <div className='flex flex-col'>

      <Nav />
      <Home />
      <About />
      <UnderNav/>
      <Specials />
    
      </div>
    </>
  )
}

export default App
