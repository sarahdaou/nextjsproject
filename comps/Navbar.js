import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

const Navbar = () => {
  useEffect(() => {
    const burger = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.navlinks');

    if (!burger || !navLinks) {
      console.error("Elements not found: ", { burger, navLinks });
      return; // Exit if elements are not found
    }

    const toggleNav = () => {
      navLinks.classList.toggle('active');
      console.log("burger clicked", navLinks.classList); // Log the class list to see if 'active' is added
    };

    burger.addEventListener('click', toggleNav);

    // Clean up the event listener on component unmount
    return () => {
      burger.removeEventListener('click', toggleNav);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-content container">
        <div className="logo">
          <Image src="/logo.png" alt="Site Logo" width={100} height={0} style={{ height: 'auto' }} />
        </div>
        <button className="burger-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className="navlinks">
          <div className="links">
            <Link href="#about-us">About</Link>
          </div>
          <div className="links">
            <Link href="#target">Channels</Link>
          </div>
          <div className="last-link">
            <Link href="#form">Contact Us</Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
