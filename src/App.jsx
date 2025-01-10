import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import MenuSection from './Pages/MenuSection';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu/:sectionType' element={<MenuSection />} />

      </Routes>
    </Router>
  )
}

export default App
