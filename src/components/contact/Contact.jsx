import './Contact.css';
import ContactForm from './ContactForm';
import PageTitle from './PageTitle';

function Contact(){


    return (
        <div className="Contact">

            <div className='container'>
            <PageTitle />
            <ContactForm />
            </div>

        </div>
    );
}

//returns combination of form and title of the page
export default Contact;