import Image from 'next/image'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import { useState } from 'react';

const Form = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
<section className="form-section" id="form">
<div className="layout container">
    <h2 className='text-title'>Contact Us</h2>
    <form>
        <div className="form-group">
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group date">
            <label htmlFor="release-date">Select Release Date</label>
            <DatePicker
                id="release-date"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="MMMM d, yyyy"
                className="date-picker"
            />
        </div>

        <div className="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" required></textarea>
        </div>

        <button type="submit" className="buttons">Submit</button>
    </form>
</div>
</section>

);
  }
   
  export default Form;