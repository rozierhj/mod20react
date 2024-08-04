import './ProjectImage.css';

function ProjectImage({picture, repo, selected, hovered}){
console.log(picture);
    return (
        <div className={`ProjectImage ${selected ? 'wasSelected':'notSelected'} ${hovered ? 'wasHovered':'notHovered'}`}>
            <img src={picture} alt="Project Image" />
        </div>
    );
}

// returns artistic image chosen for this project
export default ProjectImage;