import { NavLink } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, SignOutButton, User, UserDropdown, UserProfile } from '@asgardeo/react'
import "../styles/Header.css"; 

const Header = () => {
  return (
    <header className="app-header">
      <nav className="app-nav">
        <NavLink to="/" end className="nav-link">
          Home
        </NavLink>
        <NavLink to="/employee-mgmt" className="nav-link">
          EmployeeMgmt
        </NavLink>
      </nav>
      <SignedIn> 
        <SignOutButton />
      </SignedIn>
      <SignedOut> 
        <SignInButton />
      </SignedOut>
    </header>
  )
}

export default Header