import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Topic.css';

const Topic = ({ topic }) => {
    const { id, logo, name,total } = topic;
    console.log(topic)
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/topic/${id}`);
    }


    return (
        <div className='bg-slate-100 w-80 p-4'>
            <img src={logo} alt="" className='p-3' />
            <h3 className='text-xl'>Total Question: {total}</h3>
            
            <div className='flex items-center justify-between my-5'>
            <h3 className='text-2xl font-bold'>{name}</h3>
            <button onClick={handleClick} >Start Practice</button>

            </div>
          

            
        </div>
    );
};

export default Topic;