import { useState } from 'react';
import './ContactForm.css';

function ContactForm(){

    //form fields
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    //handle errors in the field entries
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [emailInvalid, setEmailInvalid] = useState(false);

    const handleSubmit = (e) => {

        e.preventDefault();
        //acknowledge you recieved submital then clear form
        alert(`We got your submission!\n\n\nName: ${name}\n\nEmail: ${email}\n\nMessage: ${message}`);
        setName('');
        setEmail('');
        setMessage('');
        setNameError(false);
        setEmailError(false);
        setMessageError(false);
        setEmailInvalid(false);
    }

    //statement defines the different possible errors we will check
    const handleBlur = (field) =>{
        switch(field){
            case 'name':
                //was the name set
                if(!name) setNameError(true);
                break;
            case 'email':
                if (!email) {
                    //was the email set
                    setEmailError(true);
                    //is email valid
                    setEmailInvalid(false);
                  } else {
                    //valid email test
                    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    if (!emailPattern.test(email)) {
                        //is email valid
                      setEmailInvalid(true);
                    } else {
                        //is email valid
                      setEmailInvalid(false);
                    }
                  }
                  break;
            case 'message':
                //is message filled out
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
                //name was not populated
                setNameError(false);
            }}
            //name not populated message
            onBlur={()=>handleBlur('name')}
            required />
            {nameError && <span className="error">Please fill out name field.</span>}

            <label htmlFor="email">Email address:</label>
            <input type="email"
            id='email'
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
                //email not populated
                setEmailError(false);
                //bad email
                setEmailInvalid(false);
            }}
            //messages for email not pipolated or invalid email
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
                //message not populated
                setMessageError(false);
            }}
            //message for message not populated
            onBlur={()=>handleBlur('message')}
             required
             > 
             </textarea>
             {messageError && <span className="error">Please fill out message field.</span>}
             <button type='submit'>Submit</button>

        </form>
    )
}
//returns the created form with all of its fields and buttons
export default ContactForm;