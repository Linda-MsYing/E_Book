import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>

          <Link to='/Home' className='navbar-logo' onClick={closeMobileMenu}>
            Book Store
            <i class='fab fa-typo3' />
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                  to='/Carts'
                  className='nav-links'
                  onClick={closeMobileMenu}
              >
                My Cart
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/Order'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                My Orders
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                  to='/User'
                  className='nav-links'
                  onClick={closeMobileMenu}
              >
                My Profile
              </Link>
            </li>

            <li>
              <Link
                to='/'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' buttonLink='/'>Login</Button>}
        </div>
      </nav> 
    </>
  );
}

export default Navbar;
