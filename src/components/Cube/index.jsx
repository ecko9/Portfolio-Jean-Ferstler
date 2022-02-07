import React from 'react';

const Cube = ({ linesNumber, i, i2, animationsDelayTimes }) => {

  const [indexColor, setIndexColor] = React.useState(0)
  const animationsColors = ["black", "blue", "red", "yellow", "white", "grey", "purple", "orange", "green", "pink"]

  const getRandomInt = (max) => {
    return (Math.floor(Math.random() * max))
  }

  const swapColor = (e) => {
    setIndexColor(getRandomInt(10))
  }

  const isMiddleCube = (index1, index2) => {
    let middle = Math.floor(linesNumber / 2)
    if ((index1 >= middle - 1) && (index1 <= middle) && (index2 >= middle - 1) && (index2 <= middle))
      return true
    else
      return false
  }

  React.useLayoutEffect(
    () => {
      setIndexColor(getRandomInt(10))
    }, []
  )

  return (
    <div
      className={'cube animation-display-cube-color'}
      key={i2}
      style={{
        backgroundColor: `${animationsColors[indexColor]}`,
        animationDelay: `${animationsDelayTimes[i2]}s`
      }}
      onAnimationIteration={e => swapColor(e)}
    >
    </div>
  );
};

export default Cube;