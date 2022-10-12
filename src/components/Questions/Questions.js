import React from 'react';
import Quiz from '../Quiz/Quiz';

const Questions = (props) => {

     const { question, options } = props.question;
    
   
    
    return (
        <div className='w-4/6 mx-auto bg-amber-200 p-10 m-10'>
            <h2 className='text-xl font-medium'> {question}</h2>
            
            <div className="my-10">
                    {
                    
                    // options.map(options => <input type="radio" className='bg-red-300 m-3 p-4'>{options}></input>)    
                    options.map(option => <Quiz option={option}></Quiz>)    
                        
                            
                    } 
                            
            </div>
        </div>
    );
};

export default Questions;