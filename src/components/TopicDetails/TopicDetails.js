 
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const TopicDetails = () => {

    const topic = useLoaderData();
    //  console.log(topic)
    const { name, questions} = topic.data;
    // const options = questions;
    // console.log(options)



    

    return (
        <div>

            <h2 className='text-2xl font-bold'> Quiz of {name}</h2>
               
                <div>
                {
                        questions.map(question => <Questions key={question.id} question={question}></Questions>
                )}
         
                    
                </div>
                    
             
        </div>
    );
};

export default TopicDetails;