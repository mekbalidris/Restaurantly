import './App.css'
import Nav from './pages/Nav'
import Home from './pages/Home'
import About from './pages/About'
import UnderAbout from './pages/UnderAbout'
import Menu from './pages/Menu'

function App() {

  return (
    <>
    <div className='flex flex-col'>

      <Nav />
      <Home />
      <About />
      <UnderAbout />
      <Menu />
    
      </div>
    </>
  )
}

export default App
