import './MyProfileImage.css';
import myProfileImage from '../../assets/profileImage.png';


function MyProfileImage(){


    return (
        <div className="MyProfileImage">

            <img src={myProfileImage} alt="Profile Image" />

        </div>
    );
}

export default MyProfileImage;