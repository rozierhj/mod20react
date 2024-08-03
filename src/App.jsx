import { useState } from 'react'
import PageHeader from './components/pageHeader/PageHeader';
import PageFooter from './components/pageFooter/PageFooter';
import Pages from './components/Pages';
import './App.css'

function App() {

  return (
    <div className="App">

    <PageHeader />
    <div className = "content">
    <Pages />
    </div>
    <PageFooter />
    

    </div>
  )
}

export default App;
