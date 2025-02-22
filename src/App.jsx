import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import MenuSection from './Pages/MenuSection';
import { ORDER_INIT } from './data';
import { useLocalStorage } from './hooks/useLocalStorage';


function App() {
  const [order, setOrder] = useLocalStorage("lalocura_order", ORDER_INIT)


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home order={order} setOrder={setOrder} />} />
        <Route path='/menu/:sectionType' element={<MenuSection order={order} setOrder={setOrder} />} />
        <Route path='/menu/:sectionType/:existingItemId' element={<MenuSection order={order} setOrder={setOrder} />} />
        {/* <Route path='/admin' element={<AdminView signUp={false} />} /> */}
        {/* <Route path='/admin/sign-up' element={<AdminView signUp={true} />} /> */}

      </Routes>
    </Router>

    // <ClerkProvider publishableKey={pkey} >

    // </ClerkProvider>

  )
}

export default App
