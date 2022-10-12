import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {

    const topics = useLoaderData();
    
    return (
        <div className='m-12'>
             <div className='grid grid-cols-2 first-line:-rows-2 gap-8'>
            {/* <h2 className='text-3xl font-bold'>Total Topics : {topics.data.length}</h2> */}

            {

        topics.data.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                
            }

        </div>
       </div>
    );
};

export default Home;