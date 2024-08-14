import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
  return (
<nav className="navbar"> 
    <div className="navbar-content container">
        <div className="logo">
            <Image src="/logo.png" alt="Site Logo" width={100} height={0} style={{ height: 'auto' }}/>
        </div>
    <button className="burger-menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
    </button>
      <ul className="navlinks">
            <div className="links">
              <Link href="#about-us">About</Link></div>
            <div className="links">
              <Link href="#target">Channels</Link></div>
            <div className="last-link">
                <Link href="#form">Contact Us</Link></div>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;