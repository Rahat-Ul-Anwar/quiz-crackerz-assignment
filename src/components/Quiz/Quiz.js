import React from 'react';

const Quiz = (props) => {
  
    const option = props.option;
    return (
        <div className=''>
         
            {/* <p className='bg-red-300 m-2 p-3'>{option}</p> */}
            <input type="radio" value="" id={option} />
            <label for={option}>
                <p className='bg-red-300 m-2 p-3'>{option}</p> 
            </label>
            
        </div>
    );
};

export default Quiz;