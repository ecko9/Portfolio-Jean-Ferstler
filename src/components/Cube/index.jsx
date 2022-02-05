import React from 'react';

const Cube = ({ isMiddleCube, i, i2, animationsColors, animationsDelayTimes }) => {

  const [indexColor, setIndexColor] = React.useState(0)

  const getRandomInt = (max) => {
    return (Math.floor(Math.random() * max))
  }

  const swapColor = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setIndexColor(getRandomInt(10))
  }

  React.useLayoutEffect(
    () => {
      setIndexColor(getRandomInt(10))
    }, []
  )

  return (
    <div
      className={isMiddleCube(i, i2) ? 'cube main' : 'cube animation-display-cube-color'}
      key={i2}
      style={{
        backgroundColor: `${animationsColors[indexColor]}`,
        animationDelay: `${isMiddleCube(i, i2) ? 0 : animationsDelayTimes[i2]}s`
      }}
      onAnimationIteration={e => swapColor(e)}
    >
    </div>
  );
};

export default Cube;