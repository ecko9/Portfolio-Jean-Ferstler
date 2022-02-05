import React from 'react';
import Cube from '../Cube';

const Line = ({ isAnimated, i, isMiddleCube }) => {

  const linesNumber = 9
  const animationsDelayTimes = [1, 11, 5, 7, 3, 9, 16, 0, 2, 7, 4, 11, 15]
  const animationsColors = ["black", "blue", "red", "yellow", "white", "grey", "purple", "orange", "green", "pink"]

  return (
    <div className='line' >
      <div
        className={isAnimated(i) ? 'line-overlay animation-left-and-right' : 'line-overlay'}
        style={{ animationDelay: `${animationsDelayTimes[i]}s` }}
      >
        {Array.from({ length: linesNumber }).map((n, i2) => (
          <Cube
            key={i2}
            isMiddleCube={isMiddleCube}
            i={i}
            i2={i2}
            animationsColors={animationsColors}
            animationsDelayTimes={animationsDelayTimes}
          />
        ))}
      </div>

    </div>
  );
};

export default Line;