import React from 'react';

const Questions = (props) => {
    const {question} = props.question;
    
    return (
        <div className='w-4/6 mx-auto'>
            <h2 className='text-xl font-medium'> {question}</h2>
        </div>
    );
};

export default Questions;