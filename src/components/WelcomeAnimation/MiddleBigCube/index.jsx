import React from 'react';
import Petal from '../Petal';

const MiddleBigCube = ({ index, bgSize, isAnimated, setIsAnimationFinished }) => {

  return (
    <div className={`middle-big-cube mbc-${index}`} >
      {Array.from({ length: 4 }).map((n, i) => (
        <Petal
          key={i} index={i + 1}
          bgSize={bgSize}
          isAnimated={isAnimated}
          setIsAnimationFinished={setIsAnimationFinished}
        />
      ))}
    </div >
  );
};

export default MiddleBigCube;