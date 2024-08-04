
import './PageHeader.css';
import MenuOptions from './MenuOptions';
import Name from './Name';
import headerImage from '../../assets/header.png';

function PageHeader({setActivePage}){


    return (
        <div className="PageHeader">
            <img src={headerImage} alt="header background" className='headerImage' />

            <Name />
            <MenuOptions setActivePage={setActivePage}/>
            

        </div>
    );
}

export default PageHeader;