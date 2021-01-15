import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { SidebarData } from './Sidebardata';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <Router>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className="menu-header">
            <p className="text" data-text="Estelo Abellanosa">Estelo Abellanosa</p>
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
           <ul class="menu">
            <li className="nav-text"><a href="#home">Home</a></li>
            <li className="nav-text"><a href="#about">About</a></li>
            {/* <li className="nav-text"><a href="#services">Services</a></li> */}
            <li className="nav-text"><a href="#portfolio">Projects</a></li>
            <li className="nav-text"><a href="#contact">Contact</a></li>
           </ul>
          </ul>
        </nav>
      </IconContext.Provider>
    </Router>
  );
}

export default Navbar;