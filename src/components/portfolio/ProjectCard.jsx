import './ProjectCard.css';
import ProjectName from './ProjectName';
import ProjectImage from './ProjectImage';
import {useState} from 'react';


function ProjectCard({name, picture, webpage, repo}){

    const [selected, setSelected] = useState(false);
    const [hovered, setHovered] = useState(false);

    //handle event when user clicks on a card
    const handleClick = () =>{
        setSelected((prevSelected)=>!prevSelected);
    };

    //handle event when user begins to hover over card
    const handleMouseEnter = () => {
        setHovered(true);
      };
    
      //handle event when user stops hovering over card
      const handleMouseLeave = () => {
        setHovered(false);
      };


    return (
        <div
        className={`ProjectCard ${selected ? 'selected' : ''} ${hovered ? 'hovered' : ''}`}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >

            <ProjectName name={name} webpage={webpage} repo={repo}/>
            <ProjectImage picture={picture} repo={repo} selected={selected} hovered={hovered}/>


        </div>
    );
}
//returns the project card which is the combintation of the image with the project name layed on top of it
export default ProjectCard;