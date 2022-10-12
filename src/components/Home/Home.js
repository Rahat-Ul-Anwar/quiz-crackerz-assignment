import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Topic from '../Topic/Topic';

const Home = () => {

    const topics = useLoaderData();
    
    return (

     
        <div className='m-12'>
               <Header></Header>
             <div className='grid sm:grid-cols-1 g-8 md:grid-cols-3 gap-8'>
            {/* <h2 className='text-3xl font-bold'>Total Topics : {topics.data.length}</h2> */}

            {

        topics.data.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                
            }

        </div>
       </div>
    );
};

export default Home;