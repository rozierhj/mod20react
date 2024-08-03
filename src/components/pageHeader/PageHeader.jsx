
import './PageHeader.css';
import MenuOptions from './MenuOptions';
import Name from './Name';
import githubIcon from '../../assets/github.svg';

function PageHeader(){


    return (
        <div className="PageHeader">

            <Name />
            <MenuOptions />
            

        </div>
    );
}

export default PageHeader;