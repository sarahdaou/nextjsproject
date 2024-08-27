import Image from 'next/image'

const AboutUs = () => {
    return (

<div class="container">
  <div class="about-us" id="about-us">
  <h2 className='text-title'>About Us</h2>
    <div className="wrapper">
        <img src="/about-us.png" alt="About Us" class="about-image" />
        <div class="about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus lacinia odio vitae vestibulum. Vestibulum lorem lorem, 
        malesuada in venenatis vitae, porta ac ante. Donec in dolor eget 
        tortor commodo fermentum. Nulla facilisi.
        </div>
    </div>
  </div>
</div>

        

                    
    );
  }
   
  export default AboutUs;