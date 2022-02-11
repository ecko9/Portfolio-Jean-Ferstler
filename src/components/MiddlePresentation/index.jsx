import React from 'react';
import AboutMe from '../AboutMe';
import Career from '../Career';
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
      {displayElement === "Career" &&
        <Career />
      }
    </div>
  );
};

export default MiddlePresentation;