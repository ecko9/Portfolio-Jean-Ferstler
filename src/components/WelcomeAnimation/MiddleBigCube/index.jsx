import React from 'react';
import Petal from '../Petal';

const MiddleBigCube = ({ index, bgSize, isAnimated, isAnimationFinished, setIsAnimationFinished }) => {

  const [backgroundColor, setBackgroundColor] = React.useState("rgba(0, 0, 0, 0)")

  React.useEffect(
    () => {
      if (isAnimationFinished && backgroundColor === "rgba(0, 0, 0, 0)")
        setBackgroundColor("rgba(255,255,255, 0)")
      return
      // eslint-disable-next-line
    }, [isAnimationFinished]
  )

  return (
    <div
      className={`middle-big-cube mbc-${index}`}
      style={{ backgroundColor: backgroundColor }}
    >
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