import './AboutMe.css';
import MyProfileImage from './MyProfileImage';
import Bio from './Bio';
import PageTitle from './PageTitle';

function AboutMe(){


    return (
        <div className="AboutMe">

        <PageTitle />
        <MyProfileImage />
        <Bio />
            
        </div>
    );
}

export default AboutMe;