import './ProjectImage.css';

function ProjectImage({picture, repo, selected}){
console.log(picture);
    return (
        <div className={`ProjectImage ${selected ? 'wasSelected':'notSelected'}`}>
            <img src={picture} alt="Project Image" />
        </div>
    );
}

export default ProjectImage;