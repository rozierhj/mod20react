import './Resume.css';
import ResumeContent from './ResumeContent';
import PageTitle from './PageTitle';

function Resume(){


    return (
        <div className="Resume">

            <PageTitle />
            <ResumeContent />

        </div>
    );
}

//returns combination of the resume elements and the page title
export default Resume;