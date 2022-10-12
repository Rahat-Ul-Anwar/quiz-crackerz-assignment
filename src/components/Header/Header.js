import React from 'react';
import img from '../../images/side-img.png';
import './Header.css';

const Header = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-5 items-center justify-between mb-10 p-10 bg-yellow-100'>
            <div className='side-img'>
              <img src={img} alt="" srcset="" />
                    
            </div>

            <div>
                <h2 className='text-xl font-medium'> This is the quiz application app where you can find technology related quiz such as HTML, CSS, JavaScript, Git and many more. This app is very helpful for the beginners..</h2>
            </div>
             
        </div>
    );
};

export default Header;