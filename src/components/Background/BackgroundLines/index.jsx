import React from 'react';
import Line from '../Line';

const BackgroundLines = ({ bgSize, linesNumber }) => {
  return (
    <div
      className='bg-lines'
      style={{
        width: `${bgSize}px`,
        height: `${bgSize}px`,
        top: `-${Math.floor((bgSize - window.screen.height) / 2)}px`,
        left: `-${Math.floor((bgSize - window.screen.width) / 2)}px`
      }}
    >
      {Array.from({ length: linesNumber }).map((n, i) => (
        <Line
          key={i} i={i}
          linesNumber={linesNumber}
        />
      ))}

    </div>
  );
};

export default BackgroundLines;