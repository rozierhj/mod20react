

import './FooterOptions.css';
import FooterChoice from './FooterChoice';
import githubIcon from '../../assets/github.svg';
import linkedinIcon from '../../assets/linkedin.svg';
import stackOverflowIcon from '../../assets/stack-overflow.svg';

function FooterOptions(){

    
    const choices = [
        <a href="https://github.com/rozierhj" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub Icon" className='icon' />
        </a>,
        <a href="https://www.linkedin.com/in/hunter-rozier/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn Icon" className='icon' />
        </a>,
        <a href="https://stackoverflow.com/users/23466604/hunter-rozier" target="_blank" rel="noopener noreferrer">
            <img src={stackOverflowIcon} alt="Stack Overflow Icon" className='icon' />
        </a>
    ];

    return (
        <div className="FooterOptions">
            {choices.map((choice, index) =>(
                <FooterChoice key={index} icon={choice} />
                            
            ))}
        </div>
    );
}

export default FooterOptions;