import './ProjectName.css';
import githubIcon from '../../assets/github.svg';


function ProjectName({name, webpage, repo}){


    return (
        <div className="ProjectName">
            
            <a href={webpage} target='_blank' rel='noopener noreferrer'>
                {name}
            </a>

            <a href={repo} target="_blank" rel="noopener noreferrer" >
                <img src={githubIcon} alt="github" className='github-icon'/>
            </a>

        </div>
    );
}

export default ProjectName;