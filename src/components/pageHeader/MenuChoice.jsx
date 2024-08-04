
import './MenuChoice.css';


function MenuChoice({text, onClick}){


    return (
        <div className="MenuChoice" onClick={onClick}>

            {text}

        </div>
    );
}

export default MenuChoice;