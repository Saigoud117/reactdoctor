import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='navbar'>
      <Link to="/">Home</Link>
      <Link to="/doctor">Doctors</Link>
      <Link to="/patient">Patients</Link>
    </div>
  )
}
