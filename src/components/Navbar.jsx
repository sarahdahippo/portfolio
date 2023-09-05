import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

        {/* logo */}
        <Link
          to="/"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <img
            src={logo}
            alt="logo"
            className="w-[48px] h-[48px] object-contain"
          />
        </Link>

        {/* web menu */}
        <ul className="list-none hidden sm:flex flex-row gap-12">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={styles.navText}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile menu */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div className={styles.navMobile}>

              {/* close button */}
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[20px] h-[20px] object-contain cursor-pointer mb-2"
                  onClick={() => setToggle(!toggle)}
                />
              </div>

              {/* mobile menu items */}
              <ul className={styles.navMobileList}>
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={styles.navText}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            // hamburger icon when mobile menu is closed
            <img
              src={menu}
              alt="menu"
              className="w-[36px] h-[36px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
