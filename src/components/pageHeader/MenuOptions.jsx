
import './MenuOptions.css';
import MenuChoice from './MenuChoice';

function MenuOptions(){

    const choices = ['About Me', 'Portfolio', 'Contact', 'Resume'];

    return (
        <div className="MenuOptions">
            {choices.map((choice, index) =>(
                <MenuChoice key={index} text={choice} />
                            
            ))}
        </div>
    );
}

export default MenuOptions;