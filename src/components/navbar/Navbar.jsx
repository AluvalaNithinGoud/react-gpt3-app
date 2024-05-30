import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assests/logo.svg';
import './navbar.css';

// const Menu = () => {
//   <>
//     <p><a href='#home'>Home</a></p>
//     <p><a href='#wgpt3'>What is gpt?</a></p>
//     <p><a href='#possibility'>Oen AI</a></p>
//     <p><a href='#features'>Case Studies</a></p>
//     <p><a href='#blog'>LIbrary</a></p>
//   </>
// }

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Menu = [
    { "Name": "Home", "Object": "jackfrult" },
    { "Name": " wgpt3", "Object": "jackfrult" },
    { "Name": "possibility", "Object": "jackfrult" },
    { "Name": "features", "Object": "jackfrult" },
    { "Name": "blog", "Object": "jackfrult" }
  ]
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          {/* <Menu /> */}
          {Menu.map((item) => (
                <div>
                  <p>{item.Name}</p>
                  {/* <p>{item.O/bject}</p> */}
                </div>

              ))}
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />

        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              {/* <Menu /> */}
              {Menu.map((item) => (
                <div>
                  <p>{item.Name}</p>
                  {/* <p>{item.Object}</p> */}
                </div>

              ))}
              <div className='gpt3__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar