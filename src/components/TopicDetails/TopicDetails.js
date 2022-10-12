 
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const TopicDetails = () => {

    const topic = useLoaderData();
    // console.log(topic)
    const { name, questions} = topic.data;
    const options = questions;
    console.log(options)



    

    return (
        <div>

            <h2 className='text-2xl font-bold'> Quiz of {name}</h2>
               
                <div className='bg-orange-200'>
                {
                        questions.map(question => <Questions key={question.id} question={question}></Questions>
                )}
            {/* <p className='text-xl font-medium' key={question.id}>{question.question}  </p>) */}
                    
                {
                    options.map((option,index) => <li> {option.index}{option.options}</li>)    
                    
                 } 
                    
                </div>
        </div>
    );
};

export default TopicDetails;