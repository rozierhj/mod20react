import './ResumeContent.css';

function ResumeContent(){

    const jobs = [

        {
            company: 'Amsted Seals',
            position: 'Product Systems Engineer',
            dates: 'Mar 2024 - Present',
            skills: 'Autodesk Fusion Lifecycle PLM · Product Data Management (PDM) · Product Lifecycle Management · JavaScript',
        },
        {
            company: 'Amsted Seals',
            position: 'Design Engineer',
            dates: 'Mar 2022 - Mar 2024',
            skills: 'Autodesk Fusion Lifecycle PLM',
        },
        {
            company: 'Amsted Seals',
            position: 'Computer Aided Design Drafter',
            dates: 'May 2021 - Mar 2022',
            skills: 'SolidWorks',
        },
        {
            company: 'Blair-Dumond, Inc',
            position: 'Construction Estimator',
            dates: 'Sep 2020 - May 2021',
            skills: 'Review architectural drawings and price millwork and casework portions.',
        },
        {
            company: 'Beneficial Systems',
            position: 'Intern',
            dates: 'May 2019 - Dec 2019',
            skills: 'Duties include providing project information packages, including CAD drawings, equipment lists and instructions for clients and contractors. ',
        }



    ]

    const education = {
        school: 'Virginia Commenwealth University',
        degree: 'Bachelors',
        major: 'Mechanical Engineering'
    }

    return (
        <div className="ResumeContent">

        <h2>Experience</h2>
        {jobs.map((job, index)=>(
            <div key={index} className='job'>

            <p><strong>Company: </strong>{job.company}</p>
            <p><strong>Position: </strong>{job.position}</p>
            <p><strong>Dates:</strong>{job.dates}</p>
            <p><strong>Skills: </strong>{job.skills}</p>

            </div>
        ))}

        <h2>Education</h2>
        <div className='education'>
            <p><strong>School: </strong>{education.school}</p>
            <p><strong>Degree: </strong>{education.degree}</p>
            <p><strong>Major: </strong>{education.major}</p>
        </div>

        </div>
    );
}

export default ResumeContent;