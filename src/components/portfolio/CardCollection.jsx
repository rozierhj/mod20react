
import './CardCollection.css';
import ProjectCard from './ProjectCard';
import project1 from '../../assets/projectBlog2.png';
import project2 from '../../assets/projectPortfolio.png';
import project3 from '../../assets/projectEmployee.png';
import project4 from '../../assets/taskFirstBlog.png';
import project5 from '../../assets/taskWeather.png';
import project6 from '../../assets/projectTask.png';



function CardCollection(){

    const cardDetails = [
        {name:'Totally Rad Tech Blog', picture:project1, webpage:import.meta.env.VITE_TECH_BLOG, repo: import.meta.env.VITE_TECH_BLOG_REPO, selected:false},

        {name:'Old Portfolio', picture:project2, webpage:import.meta.env.VITE_OLD_PORTFOLIO, repo:import.meta.env.VITE_OLD_PORTFOLIO_REPO, selected:false},

        {name:'Employee Tracker', picture:project3, webpage:import.meta.env.VITE_EMPLOYEE_TRACKER, repo:import.meta.env.VITE_EMPLOYEE_TRACKER_REPO, selected:false},

        {name:'First Blog', picture:project4, webpage:import.meta.env.VITE_FIRST_BLOG, repo:import.meta.env.VITE_FIRST_BLOG_REPO, selected:false},

        {name:'Weather Dashboard', picture:project5, webpage:import.meta.env.VITE_WEATHER_PAGE, repo:import.meta.env.VITE_WEATHER_PAGE_REPO, selected:false},

        {name:'Task Board', picture:project6, webpage:import.meta.env.VITE_TASK_BOARD, repo:import.meta.env.VITE_TASK_BOARD_REPO, selected:false},

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
            selected={card.selected}
            />
        ))

        }
        
        </div>
    );
}
//returns all of the cards grouped together in a single parent element
export default CardCollection;