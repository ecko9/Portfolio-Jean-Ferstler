import React from 'react';

const Cube = ({ i2, animationsDelayTimes }) => {

  const [indexColor, setIndexColor] = React.useState(0)
  const animationsColors = ["black", "rgb(150, 150, 150)", "rgb(200, 200, 200)", "white", "rgba(255, 184, 92, 0.8)", "rgba(92, 255, 179, 0.8)", "rgba(92, 95, 255, 0.8)", "rgba(255, 92, 133, 0.8)", "rgba(255, 138, 92, 0.8)", "rgba(248, 226, 26, 0.8)"];

  const getRandomInt = (max) => {
    return (Math.floor(Math.random() * max))
  }

  const swapColor = (e) => {
    setIndexColor(getRandomInt(animationsColors.length))
  }

  React.useLayoutEffect(
    () => {
      setIndexColor(getRandomInt(animationsColors.length))
      // eslint-disable-next-line
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