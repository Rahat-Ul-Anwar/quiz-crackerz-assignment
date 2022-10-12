import React from 'react';
import img from '../../images/side-img.png';

const Header = () => {
    return (
        <div className='grid grid-cols-2 gap-5 items-center justify-between mt-0 p-10 bg-yellow-100'>
            <div>
              <img src={img} alt="" srcset="" />
                    
            </div>

            <div>
                <h2 className='text-2xl font-medium'> This is the quiz application app where you can find technology related quiz such as HTML, CSS, JavaScript, Git and many more. This app is very helpful for the beginners..</h2>
            </div>
             
        </div>
    );
};

export default Header;