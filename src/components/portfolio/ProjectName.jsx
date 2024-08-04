import './ProjectName.css';
import githubIcon from '../../assets/github.svg';


function ProjectName({name, webpage, repo}){


    return (
        <div className="ProjectName">
            {/* link to webpage */}
            <a href={webpage} target='_blank' rel='noopener noreferrer'>
                {name}
            </a>
        {/* link to repo */}
            <a href={repo} target="_blank" rel="noopener noreferrer" >
                <img src={githubIcon} alt="github" className='github-icon'/>
            </a>

        </div>
    );
}
//returns the name of the project that is a live link to the live website
//also returns the github icon as a live link to the github repo for that project
export default ProjectName;