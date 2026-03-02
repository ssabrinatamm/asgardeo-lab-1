import React from 'react'
import { SignedIn, SignedOut, SignInButton, SignOutButton, User, UserDropdown, UserProfile } from '@asgardeo/react'
import Main from '../components/Main';
import '../styles/Main.css'

const Home = () => {
  return (
    <>
    <h1>Home Page</h1>
    {/* <h3>Challenge 1</h3>
    <p>Use Asgardeo to require users to log in to see this entire website</p> */}
    <img src='https://images.unsplash.com/photo-1684265441432-11a6ae9c27b1?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    <SignedIn>
    <User>
        {(user) => (
              <div>
                <p>Welcome back, {user.userName || user.username || user.sub}!</p>
              </div>
          )}
      </User>
      <div className="home">
        <Main title = "Highlights"> 
          <h3>Remember to live our our values</h3>
            <ol> 
              <li>Relentless Learning and Growth</li>
              <li>Creative Problem Solving</li>
              <li>Curiosity-Driven Exploration</li>
            </ol>
            <h3>Upcoming Events</h3>
            <ul> 
              <li><strong>Feb 7: </strong>Employee Hack-a-ston</li>
              <li><strong>Mar 7: </strong>Food Bank Volunteering</li>
              <li><strong>Apr 4: </strong>Company Retreat</li>
            </ul>  
        </Main>
        <Main title = "Latest Events">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis animi laudantium eos atque sed debitis eum deleniti cumque saepe aut voluptatibus, dolores commodi corporis quibusdam
              numquam perferendis, molestias tenetur suscipit!.</p>
          <img src = "https://plus.unsplash.com/premium_photo-1709247069711-068d383b8497?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
          <img src = "https://plus.unsplash.com/premium_photo-1661429511577-b165fc04718f?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </Main>
    </div>
    <UserProfile />
    </SignedIn>
    </>
  )
}

export default Home
