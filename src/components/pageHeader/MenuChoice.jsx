
import './MenuChoice.css';


function MenuChoice({text, onClick, isActive}){


    return (
        <div className={`MenuChoice ${isActive ? 'active' : ''}`}  onClick={onClick}>

            {text}

        </div>
    );
}

//component returns a single menu option element
export default MenuChoice;