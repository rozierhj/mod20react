import './MyProfileImage.css';
import myProfileImage from '../../assets/profileImage.png';


function MyProfileImage(){


    return (
        <div className="MyProfileImage">

            <img src={myProfileImage} alt="Profile Image" />

        </div>
    );
}

//returns the users profile image
export default MyProfileImage;