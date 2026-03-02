import React from 'react'
import { SignedIn, SignedOut, SignInButton, SignOutButton, User, UserDropdown, UserProfile } from '@asgardeo/react'

const EmployeeMgmt = () => {
  return (
    <>
    <SignedOut> 
      <h1>Employee Management Page</h1>
      <p> You must sign in to view this page. </p>
      <img src="https://plus.unsplash.com/premium_photo-1763556883533-fa27d070fc7d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="secret" />
    </SignedOut>
    <SignedIn> 
    <section>
            <h2>Employee List</h2>
            <table className="employee-table">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Birthday</th>
                  <th>Salary</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John</td>
                  <td>Doe</td>
                  <td>johndoe@example.com</td>
                  <td>April 01, 1980</td>
                  <td>50000</td>
                  <td>
                    <button className="btn-edit">Edit</button>
                    <button className="btn-delete">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>Jane</td>
                  <td>Smith</td>
                  <td>janesmith@example.com</td>
                  <td>January 01, 2000</td>
                  <td>80000</td>
                  <td>
                    <button className="btn-edit">Edit</button>
                    <button className="btn-delete">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <section>
            <h2>Add New Employee</h2>
            <form className="horizontal-form">
               <div className="input-group">
                  <label htmlFor="first_name">First Name:</label>
                  <input type="text" id="first_name" />
               </div>
               <div className="input-group">
                  <label htmlFor="last_name">Last Name:</label>
                  <input type="text" id="last_name" />
               </div>
               <div className="input-group">
                  <label htmlFor="email">Email:</label>
                  <input type="text" id="email" />
               </div>
               <div className="input-group">
                  <label htmlFor="birthday">Birthday:</label>
                  <input type="text" id="birthday" />
               </div>
               <div className="input-group">
                  <label htmlFor="salary">Salary:</label>
                  <input type="text" id="salary" />
               </div>
               <button type="submit" className="btn-add">Add Employee</button>
            </form>
          </section>
    </SignedIn>
    {/* <h3>Challenge 2</h3>
    <p>Update the code so that the Home page is visible without auth but require people to log in to see EmployeeMgmt page.</p> */}
    </>
  )
}

export default EmployeeMgmt