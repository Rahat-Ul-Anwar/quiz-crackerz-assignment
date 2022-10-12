import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
 

const Navbar = () => {
    return (
        <nav className='bg-amber-300 py-4 sm:flex items-center justify-around p-8'>

            <div className='ml-10 sm:text-center'>
                <h3 className='text-2xl font-extrabold'>QuizApp</h3>
                
            </div>
            <div className='mr-20 p-2'>
                <NavLink className={({isActive})=> isActive ? 'active' : undefined } to="/">Home</NavLink>
                <NavLink className={({isActive})=> isActive ? 'active' : undefined } to="/topics">Topics</NavLink>
                <NavLink className={({isActive})=> isActive ? 'active' : undefined } to="/statistics">Statistics</NavLink>
                <NavLink  className={({isActive})=> isActive ? 'active' : undefined }to="/blog">Blog</NavLink>
             </div>
        </nav>
    );
};

export default Navbar;