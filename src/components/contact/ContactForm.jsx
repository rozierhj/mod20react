import { useState } from 'react';
import './ContactForm.css';

function ContactForm(){

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log('Form submitted',{name, email, message});

    }


    return(
        <form className = 'ContactForm' onSubmit = {handleSubmit}>
            <label htmlFor='name'>Name:</label>
            <input type="text"
            id='name'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required />

            <label htmlFor="email">Email address:</label>
            <input type="email"
            id='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
             />

             <label htmlFor="message">Message: </label>
             <textarea 
             id="message"
             value={message}
             onChange={(e)=>setMessage(e.target.value)}></textarea>

             <button type='submit'>Submit</button>

        </form>
    )
}

export default ContactForm;