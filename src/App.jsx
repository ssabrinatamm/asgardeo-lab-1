import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import EmployeeMgmt from './pages/EmployeeMgmt'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, SignOutButton, User, UserDropdown, UserProfile } from '@asgardeo/react'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee-mgmt" element={<EmployeeMgmt />} />
      </Routes>
      <SignedIn> 
        <Footer />
      </SignedIn>
    </Router>
  )
}

export default App
