import Image from 'next/image'

const Form = () => {
    return (
<section className="form-section" id="form">
<div className="layout container">
    <h2>Contact Us</h2>
    <form>
        <div className="form-group">
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" required></textarea>
        </div>

        <button type="submit">Submit</button>
    </form>
</div>
</section>

);
  }
   
  export default Form;