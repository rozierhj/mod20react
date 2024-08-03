

import './FooterOptions.css';
import FooterChoice from './FooterChoice';
import githubIcon from '../../assets/github.svg';
import linkedinIcon from '../../assets/linkedin.svg';
import stackOverflowIcon from '../../assets/stack-overflow.svg';

function FooterOptions(){

    
    const choices = [
        <img src={githubIcon} alt="GitHub Icon" className = 'icon'/>,
        <img src={linkedinIcon} alt="GitHub Icon" className = 'icon'/>,
        <img src={stackOverflowIcon} alt="GitHub Icon" className = 'icon'/>
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