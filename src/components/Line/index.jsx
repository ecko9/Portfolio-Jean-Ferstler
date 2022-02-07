import React from 'react';
import Cube from '../Cube';

const Line = ({ i, linesNumber }) => {

  const animationsDelayTimes = [1, 11, 5, 7, 3, 9, 16, 0, 2, 7, 4, 11, 15]

  return (
    <div className='line' >

      <div
        className={'line-overlay animation-left-and-right'}
        style={{ animationDelay: `${animationsDelayTimes[i]}s` }}
      >
        {Array.from({ length: linesNumber }).map((n, i2) => (
          <Cube
            key={i2} i={i} i2={i2}
            linesNumber={linesNumber}
            animationsDelayTimes={animationsDelayTimes}
          />
        ))}
      </div>

    </div>
  );
};

export default Line;