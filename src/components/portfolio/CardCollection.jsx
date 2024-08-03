
import './CardCollection.css';
import ProjectCard from './ProjectCard';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import project4 from '../../assets/project4.png';
import project5 from '../../assets/project5.png';
import project6 from '../../assets/project6.png';


function CardCollection(){

    const cardDetails = [
        {name:'Totally Rad Tech Blog', picture:<img src={project1} alt='Totally Rad Tech Blog'/>, webpage:process.env.TECH_BLOG, repo:process.env.TECH_BLOG_REPO},

        {name:'Old Portfolio', picture:<img src={project2} alt='Old Portfolio'/>, webpage:process.env.OLD_PORTFOLIO, repo:process.env.OLD_PORTFOLIO_REPO},

        {name:'Employee Tracker', picture:<img src={project3} alt='Employee Tracker'/>, webpage:process.env.EMPLOYEE_TRACKER, repo:process.env.EMPLOYEE_TRACKER_REPO},

        {name:'First Blog', picture:<img src={project4} alt='First Blog'/>, webpage:process.env.FIRST_BLOG, repo:process.env.FIRST_BLOG_REPO},

        {name:'Weather Dashboard', picture:<img src={project5} alt='Weather Dashboard'/>, webpage:process.env.WEATHER_PAGE, repo:process.env.WEATHER_PAGE_REPO},

        {name:'Task Board', picture:<img src={project6} alt='Task Board'/>, webpage:process.env.TASK_BOARD, repo:process.env.TASK_BOARD_REPO},

    ]


    return (
        <div className="CardCollection">

        {cardDetails.map((card,index)=>(
            <ProjectCard 
            key={index}
            name={card.name}
            picture={card.picture}
            webpage={card.webpage}
            repo={card.repo}
            />
        ))

        }
        
        </div>
    );
}

export default CardCollection;