import {Outlet} from 'react-router-dom';
import PageHeader from './components/pageHeader/PageHeader';
import PageFooter from './components/pageFooter/PageFooter';
import './App.css'

function App() {

  return (
    <div className='App'>
    <PageHeader />
    <main className=' Pages'>
      <Outlet />
    </main>
    < PageFooter />
    </div>
  )
}

export default App;
