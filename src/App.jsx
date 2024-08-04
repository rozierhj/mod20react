import { useState } from 'react'
import AboutMe from './components/aboutMe/AboutMe';
import Contact from './components/contact/Contact';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import PageHeader from './components/pageHeader/PageHeader';
import PageFooter from './components/pageFooter/PageFooter';
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('AboutMe');

  const renderPage = () => {
    switch (activePage){
        case 'AboutMe':
            return <AboutMe/>
        case 'Contact':
            return <Contact/>
        case 'Resume':
            return <Resume />
        case 'Portfolio':
            return <Portfolio />
        default:
            return <AboutMe />
    }
}
  return (
    <div className="App">

            <div>
            <PageHeader setActivePage={setActivePage}/>
            </div>

            <div className='Pages'>
                {renderPage()}
            </div>
            
            <div>
            <PageFooter />
            </div>
    

    </div>
  )
}

export default App;
