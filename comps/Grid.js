import Image from 'next/image'

const Grid = () => {
    return (
<section className="container">
    <div className="text-title" id="target">My Channels</div>

    <div className="layout grid ">
    <div className="card">
                <div className="image-container">
                    <Image src="/subscribe.png" alt="Channel 1" layout="fill" objectFit="contain" />
                </div>
                <h3>Example #1</h3>
                <h4>Trial #1</h4>
            </div>
            <div className="card">
                <div className="image-container">
                    <Image src="/subscribe.png" alt="Channel 2" layout="fill" objectFit="contain" />
                </div>
                <h3>Example #2</h3>
                <h4>Trial #2</h4>
            </div>
            <div className="card">
                <div className="image-container">
                    <Image src="/subscribe.png" alt="Channel 3" layout="fill" objectFit="contain" />
                </div>
                <h3>Example #3</h3>
                <h4>Trial #3</h4>
            </div>
    </div>
</section>
    );
  }
   
  export default Grid;