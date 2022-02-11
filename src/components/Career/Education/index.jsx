import React from 'react';

const Education = () => {
  return (
    <div className='Education'>
      <div className='education-title'>
        <h2>Formations</h2>
        <div className='bar2' />
        <div className='bar' />
      </div>

      <div className='education-list'>

        <div className='education-card'>
          <h3>The Hacking Project - Développeur Web</h3>
          <div className='bar' />
          <span>2021</span>
        </div>

        <div className='education-card'>
          <h3>The Hacking Project - Fullstack Web</h3>
          <div className='bar' />
          <span>2021</span>
        </div>

        <div className='education-card'>
          <h3>BTS Aménagement Paysager</h3>
          <div className='bar' />
          <span>2017</span>
        </div>

        <div className='education-card'>
          <h3>Epitech </h3>
          <div className='bar' />
          <span>2012</span>
        </div>

        <div className='education-card'>
          <h3>Bac Scientifique</h3>
          <div className='bar' />
          <span>2011</span>
        </div>

      </div>
    </div>
  );
};

export default Education;