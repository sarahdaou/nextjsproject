import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

const Navbar = () => {
  useEffect(() => {
    const burger = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.navlinks');
    const overlay = document.querySelector('.overlay');

    if (!burger || !navLinks || !overlay) {
      console.error("Elements not found: ", { burger, navLinks, overlay });
      return; // Exit if elements are not found
    }

    const toggleNav = () => {
      navLinks.classList.toggle('active');
      overlay.classList.toggle('active');
      console.log("burger clicked", navLinks.classList); // Log the class list to see if 'active' is added
    };

    const hideNav = () => {
      navLinks.classList.remove('active');
      overlay.classList.remove('active');
    };

    burger.addEventListener('click', toggleNav);

    // Add event listeners to close nav on link click
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', hideNav);
    });

    // Clean up event listeners on component unmount
    return () => {
      burger.removeEventListener('click', toggleNav);
      links.forEach(link => {
        link.removeEventListener('click', hideNav);
      });
    };
  }, []);

  return (
    <>
      <div className="overlay"></div>
      <nav className="navbar">
        <div className="navbar-content container">
          <Link href="/" target="_blank" rel="noopener noreferrer" className="logo">
            <Image src="/logo.png" alt="Site Logo" width={100} height={0} style={{ height: 'auto' }} />
          </Link>
          <button className="burger-menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <ul className="navlinks">
            <div className="links">
              <Link href="#about-us">About Us</Link>
            </div>
            <div className="links">
              <Link href="#target">Channels</Link>
            </div>
            <div className="links">
              <Link href="#form">Contact Us</Link>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
