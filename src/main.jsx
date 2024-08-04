import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './components/aboutMe/AboutMe';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children:[
            {
                index: true,
                element: <AboutMe />,
            },
            {
                path: '/Contact',
                element: <Contact />,
            },
            {
                path: '/Portfolio',
                element: <Portfolio />,
            },
            {
                path: '/Resume',
                element: <Resume />,
            },
            {
                path: '/AboutMe',
                element:<AboutMe />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />

);
