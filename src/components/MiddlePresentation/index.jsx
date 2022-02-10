import React from 'react';
import AboutMe from '../AboutMe';
import Works from '../Works';

const MiddlePresentation = ({ displayElement }) => {
  return (
    <div className='MiddlePresentation'>
      {displayElement === "AboutMe" &&
        <AboutMe />
      }
      {displayElement === "Works" &&
        <Works />
      }
    </div>
  );
};

export default MiddlePresentation;