import React from 'react';
import Col from '../Col';

const BackgroundCols = ({ bgSize, linesNumber, displayWelcomeAnimation, setDisplayWelcomeAnimation }) => {
  return (
    <div
      className='bg-col '
      style={{
        width: `${bgSize}px`,
        height: `${bgSize}px`,
        top: `-${Math.floor((bgSize - window.innerHeight) / 2)}px`,
        left: `-${Math.floor((bgSize - window.innerWidth) / 2)}px`
      }}
    >
      {Array.from({ length: linesNumber }).map((n, i) => (
        <Col
          key={i} i={i}
          linesNumber={linesNumber}
          bgSize={bgSize}
          displayWelcomeAnimation={displayWelcomeAnimation}
          setDisplayWelcomeAnimation={setDisplayWelcomeAnimation}
        />
      ))}
    </div>
  );
};

export default BackgroundCols;