import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

import './Features.css';

const Features = () => (
  <>
  <div className="Features" >
    <br></br>
 
    <p>
       BMW models are unmistakable at first glance. Not only are they technologically impressive, they are emotionally moving too, with each model perfectly harmonising proportions, surfaces and details.
       Throughout the years, various distinct design features have defined and developed the identity of BMW cars; we were quick to recognise this and have consistently cultivated the value of them. Each and every BMW model bears its own individual interpretation of the features for themselves, underlining their independent character.
    </p>
  
  </div>
  <div className='p-3'>
    <ul className='nav nav-tabs'>
      <li className='nav-item'>
        <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to='/features/calculator'>
          Calculator
        </NavLink>
      </li>
      <li className='nav-item'>
         <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to='/features/todolist'>
          TODO list
         </NavLink>
      </li>
    </ul>
  </div>
  <Outlet className='px-5' />
  </>
);



export default Features;
