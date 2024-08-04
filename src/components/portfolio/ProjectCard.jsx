import './ProjectCard.css';
import ProjectName from './ProjectName';
import ProjectImage from './ProjectImage';


function ProjectCard({name, picture, webpage, repo}){


    return (
        <div className="ProjectCard">

            <ProjectName name={name} webpage={webpage} repo={repo}/>
            <ProjectImage picture={picture} repo={repo}/>


        </div>
    );
}

export default ProjectCard;