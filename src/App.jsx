import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import TopBar from './Components/TopBar'
import HeroCarousel from './Components/Carousel';
import Home from './Sections/Home';
function App() {

  return (
    <BrowserRouter>
    {/* <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/" element={<About />} />
    </Routes> */}
    <TopBar/>
    <Navbar/>
    <HeroCarousel/>
    <Home/>
    </BrowserRouter>
  )
}

export default App
