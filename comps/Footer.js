import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-content container">
            <div className="layout">
                <p>2024 All rights reserved.</p>
            </div>
            <div className="footer-icons icon-link">
                <Image src="/insta.png" alt="Instagram" height={30} width={0} style={{ width:'auto'}} />
                <Image src="/whatsapp.png" alt="WhatsApp" height={30} width={0} style={{ width:'auto'}}/>
                <Image src="/youtube.png" alt="YouTube" height={30} width={0} style={{ width:'auto'}}/>
            </div>
        </div>
    </footer>
    );
  }
   
  export default Footer;

