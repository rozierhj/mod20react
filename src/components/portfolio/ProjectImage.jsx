import './ProjectImage.css';

function ProjectImage({picture, repo}){
console.log(picture);
    return (
        <div className="ProjectImage">
            <img src={picture} alt="Project Image" />
        </div>
    );
}

export default ProjectImage;