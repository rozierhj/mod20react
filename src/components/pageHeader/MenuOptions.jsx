
import './MenuOptions.css';
import MenuChoice from './MenuChoice';

function MenuOptions({setActivePage, activePage}){

    const choices = ['About Me', 'Portfolio', 'Contact', 'Resume'];

    return (
        <div className="MenuOptions">
            {choices.map((choice, index) =>(
                <MenuChoice 
                key={index} 
                text={choice} 
                onClick={()=> setActivePage(choice)}
                isActive ={activePage === choice}
                />
                            
            ))}
        </div>
    );
}

export default MenuOptions;