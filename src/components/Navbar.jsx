import React from 'react';
import { BiSearchAlt } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { BsFillCaretDownFill } from "react-icons/bs";
import avatar from "../assets/avatarImagesm.jpg";

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="title">
          <h2>Dashboard</h2>
          <span>Informacion detallada de tu tienda</span>
      </div>
      <div className="container">
          <div className="search">
              <BiSearchAlt />
              <input type="text" placeholder="Buscar..." />
          </div>
          <div className="profile">
          <div className="profile__name">
                  <h4>Robertto Flores</h4>
                  <h6>Admin</h6>
              </div>
              
              <div className="image">
                  <img src={avatar} alt="avatar" />
              </div>
              <FiBell className='bell' />
              <BsFillCaretDownFill />
          </div>
      </div>
    </div>
  )
}
