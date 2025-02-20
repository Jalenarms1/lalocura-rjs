import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import MenuSection from './Pages/MenuSection';
import { ORDER_INIT } from './data';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import AdminView from './Pages/AdminView';
import { ClerkProvider } from '@clerk/clerk-react';

const pkey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

function App() {
  const [order, setOrder] = useLocalStorage("lalocura_order", ORDER_INIT)

  return (
    <ClerkProvider publishableKey={pkey} >
      <Elements stripe={loadStripe(import.meta.env.VITE_STRIPE_PKEY)}>
        <Router>
          <Routes>
            <Route path='/' element={<Home order={order} setOrder={setOrder} />} />
            <Route path='/menu/:sectionType' element={<MenuSection order={order} setOrder={setOrder} />} />
            <Route path='/menu/:sectionType/:existingItemId' element={<MenuSection order={order} setOrder={setOrder} />} />
            <Route path='/admin' element={<AdminView signUp={false} />} />
            <Route path='/admin/sign-up' element={<AdminView signUp={true} />} />

          </Routes>
        </Router>

      </Elements>

    </ClerkProvider>

  )
}

export default App
