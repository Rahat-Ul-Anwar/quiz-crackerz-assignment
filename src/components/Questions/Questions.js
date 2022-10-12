import React from 'react';
import Quiz from '../Quiz/Quiz';
 
  

const Questions = (props) => {
    console.log(props)

    const { question, options, correctAnswer } = props.question;
  
   
return (
        <div className='w-4/6 mx-auto bg-amber-200 p-5 m-5'>
            <h2 className='text-xl font-medium'> {question}</h2>
            
            <div className="my-10">
                    {
                    
                    
                    options.map(option => <Quiz option={option}></Quiz>)    
                        
                            
                } 
                

                            
            </div>

            <p>{correctAnswer}</p>
            
             



            
        </div>
    );
};

export default Questions;