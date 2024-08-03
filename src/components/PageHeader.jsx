
import './PageHeader.css';
import MenuOptions from './MenuOptions';
import Name from './Name';

function PageHeader(){


    return (
        <div className="PageHeader">

            <Name />
            <MenuOptions />

        </div>
    );
}

export default PageHeader;