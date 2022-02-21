import React from 'react';
import Cube from '../Cube';
import WelcomeAnimation from '../../WelcomeAnimation';

const Col = ({ i, linesNumber, bgSize, displayWelcomeAnimation, setDisplayWelcomeAnimation }) => {

  const animationsDelayTimes = [1, 11, 5, 7, 3, 9, 16, 0, 2, 7, 4, 11, 15]

  return (
    <div className='col' >

      {i === 3 && displayWelcomeAnimation &&
        <WelcomeAnimation
          bgSize={bgSize}
          setDisplayWelcomeAnimation={setDisplayWelcomeAnimation}
        />
      }
      <div
        className={'col-overlay animation-up-and-down'}
        style={{ animationDelay: `${animationsDelayTimes[i]}s` }}
      >
        {Array.from({ length: linesNumber }).map((n, i2) => (
          <Cube
            key={i2} i2={i2}
            animationsDelayTimes={animationsDelayTimes}
          />
        ))}
      </div>

    </div>
  );
};

export default Col;