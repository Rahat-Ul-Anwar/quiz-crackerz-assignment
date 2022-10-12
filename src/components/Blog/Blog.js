import React from 'react';

const Blog = () => {
    return (
        <div className='w-4/6 mx-auto p-4'>
            <h4 className='text-xl font-medium'>What is the purpose of React-Router?</h4>
            <p className='w-100'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>

            <h4 className='text-xl font-medium'>How does context api work?</h4>
            <p className='w-100'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on</p>
            
            <h4 className='text-xl font-medium'>What is useRef hook?</h4>
            <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
        </div>
    );
};

export default Blog;