import Image from 'next/image'
import Link from 'next/link';

const Footer = () => {
    return (
    <footer className="footer">
        <div className="footer-content container">
            <div className="layout">
                <p>2024 All rights reserved.</p>
            </div>
            <div className="footer-icons">
                <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="pics">
                    <Image src="/instagram-icon.png" alt="Instagram" height={30} width={30}  />
                </Link>
                <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="pics">
                    <Image src="/facebook-icon.png" alt="Facebook" height={30} width={30}  />
                </Link>
                <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="pics">
                    <Image src="/twitter-icon.png" alt="Twitter" height={30} width={30}  />
                </Link>
            </div>
        </div>
    </footer>
    );
  }
   
  export default Footer;

