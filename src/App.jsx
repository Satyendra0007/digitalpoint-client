import './App.css'
import 'flowbite'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Service from './Pages/Service'
import Admin from './admin/Admin'
import Users from './admin/Users'
import Messages from './admin/Messages'
import SignOut from './Pages/SignOut'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Service />} />
          <Route path='/admin' element={<Admin />} >
            <Route path='users' element={<Users />} />
            <Route path='messages' element={<Messages />} />
          </Route>
          <Route path="/signout" element={<SignOut />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
