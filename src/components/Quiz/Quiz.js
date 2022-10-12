import React from 'react';

const Quiz = (props) => {
    const option = props.option;
    return (
        <div>
            <h2 className='bg-red-300 m-3 p-4'>{option}</h2>
        </div>
    );
};

export default Quiz;