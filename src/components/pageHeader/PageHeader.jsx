
import {Link, useLocation} from 'react-router-dom';
import './PageHeader.css';
import './MenuChoice.css';
import './MenuOptions.css';
import Name from './Name';
import headerImage from '../../assets/header.png';

function PageHeader(){
    const currentPage = useLocation().pathname;

    return (
        //header styling image and users name
        <div className="PageHeader">
            <img src={headerImage} alt="header background" className='headerImage' />
            <Name />
        <div className="MenuOptions">

    {/* About me menu selection option */}
      <div className="MenuChoice">
        <Link
          to="/"
          className={currentPage === '/' ? 'MenuChoice active' : 'MenuChoice'}
        >
          About Me
        </Link>
      </div>

    {/* Portfolio menu selection option */}
      <div className="MenuChoice">
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'MenuChoice active' : 'MenuChoice'}
        >
          Portfolio
        </Link>
      </div>

    {/* Contact menu selection option */}
      <div className="MenuChoice">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'MenuChoice active' : 'MenuChoice'}
        >
          Contact
        </Link>
      </div>

    {/* Resume menu selection option */}
      <div className="MenuChoice">
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'MenuChoice active' : 'MenuChoice'}
        >
          Resume
        </Link>
      </div>

        </div>
        </div>
    );
}

//returns page header with user name and four menu options: About Me, Portfolio, Contact and Resume
export default PageHeader;