import Image from 'next/image'

const AboutUs = () => {
    return (

<section className="about-us" id="about-us">
            <div className="container">
                <Image src="/about-us.png" alt="About Us" quality={100} className="about-image" width={345} height={271}/> 
                <div className="about-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vivamus lacinia odio vitae vestibulum. Vestibulum lorem lorem, 
                    malesuada in venenatis vitae, porta ac ante. Donec in dolor eget 
                    tortor commodo fermentum. Nulla facilisi.
                </div>
            </div>
        </section>

    );
  }
   
  export default AboutUs;