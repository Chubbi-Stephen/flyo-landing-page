import React from 'react'
// import { Link } from 'react-router-dom'
import logo from '../../Assets/images/logo.svg'

const index = () => {
  return (
    <nav className="nav w-full flex justify-between py-20 px-16">
      <img src={logo} alt="" className="w-50 h-14" />

      <ul className="w-96 flex justify-around">
        <li className="nav-link">feaures</li>
        <li className="nav-link">team</li>
        <li className="nav-link">sign in</li>
      </ul>
    </nav>
  )
}

export default index
