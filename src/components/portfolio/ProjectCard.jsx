import './ProjectCard.css';
import ProjectName from './ProjectName';
import ProjectImage from './ProjectImage';


function ProjectCard({name, picture, webpage, repo}){


    return (
        <div className="ProjectCard">

            <ProjectName name={name}/>
            <ProjectImage picture={picture} webpage={webpage} repo={repo}/>


        </div>
    );
}

export default ProjectCard;