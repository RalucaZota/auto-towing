import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import TopBar from './Components/TopBar'
function App() {

  return (
    <BrowserRouter>
    {/* <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/" element={<About />} />
    </Routes> */}
    <TopBar/>
    <Navbar/>
    </BrowserRouter>
  )
}

export default App
