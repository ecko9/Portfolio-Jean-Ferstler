import React from 'react';
import Petal from '../Petal';

const MiddleBigCube = ({ index, bgSize, isAnimated, isAnimationLaunched, setIsAnimationLaunched, isAnimationFinished, setIsAnimationFinished }) => {

  return (
    <div className={`middle-big-cube mbc-${index}`}>
      {Array.from({ length: 4 }).map((n, i) => (
        <Petal
          key={i} index={i + 1}
          mbcIndex={index}
          bgSize={bgSize}
          isAnimated={isAnimated}
          isAnimationLaunched={isAnimationLaunched} setIsAnimationLaunched={setIsAnimationLaunched}
          isAnimationFinished={isAnimationFinished} setIsAnimationFinished={setIsAnimationFinished}
        />
      ))}
    </div>
  );
};

export default MiddleBigCube;