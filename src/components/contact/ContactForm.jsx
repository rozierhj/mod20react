import { useState } from 'react';
import './ContactForm.css';

function ContactForm(){

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [emailInvalid, setEmailInvalid] = useState(false);

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log('Form submitted',{name, email, message});
    }

    const handleBlur = (field) =>{
        switch(field){
            case 'name':
                if(!name) setNameError(true);
                break;
            case 'email':
                if (!email) {
                    setEmailError(true);
                    setEmailInvalid(false);
                  } else {
                    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    if (!emailPattern.test(email)) {
                      setEmailInvalid(true);
                    } else {
                      setEmailInvalid(false);
                    }
                  }
                  break;
            case 'message':
                if(!message) setMessageError(true);
                break;
            default:
                break;
        }
    };


    return(
        <form className = 'ContactForm' onSubmit = {handleSubmit}>
            <label htmlFor='name'>Name:</label>
            <input type="text"
            id='name'
            value={name}
            onChange={(e)=>{
                setName(e.target.value)
                setNameError(false);
            }}
            onBlur={()=>handleBlur('name')}
            required />
            {nameError && <span className="error">Please fill out name field.</span>}

            <label htmlFor="email">Email address:</label>
            <input type="email"
            id='email'
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
                setEmailError(false);
                setEmailInvalid(false);
            }}
            onBlur={()=>handleBlur('email')}
            required
             />
            {emailError && <span className="error">Please fill out email field.</span>}
            {emailInvalid && <span className="error">Please enter a valid email address.</span>}

             <label htmlFor="message">Message: </label>
             <textarea 
             id="message"
             value={message}
             onChange={(e)=>{
                setMessage(e.target.value)
                setMessageError(false);
            }}
            onBlur={()=>handleBlur('message')}
             required
             > 
             </textarea>
             {messageError && <span className="error">Please fill out message field.</span>}
             <button type='submit'>Submit</button>

        </form>
    )
}

export default ContactForm;