import './ProjectCard.css';
import ProjectName from './ProjectName';
import ProjectImage from './ProjectImage';
import {useState} from 'react';


function ProjectCard({name, picture, webpage, repo}){

    const [selected, setSelected] = useState(false);

    const handleClick = () =>{
        setSelected((prevSelected)=>!prevSelected);
    };


    return (
        <div className={`ProjectCard ${selected ? 'selected' : ''}`}
        onClick={handleClick}
        >

            <ProjectName name={name} webpage={webpage} repo={repo}/>
            <ProjectImage picture={picture} repo={repo} selected={selected}/>


        </div>
    );
}

export default ProjectCard;