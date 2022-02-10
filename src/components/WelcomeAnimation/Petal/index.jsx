import React from 'react';

const Petal = ({ index, bgSize, isAnimated, setIsAnimationFinished }) => {

  const [animation, setAnimation] = React.useState("")

  React.useEffect(
    () => {
      if (isAnimated && animation === "")
        setAnimation(`animation-opacity-${index}`)
      return;
      // eslint-disable-next-line
    }, [isAnimated]
  )

  const choosePetal = () => {
    if (index === 1)
      return (
        <div
          className={`petal p1 ${animation}`}
          style={{
            borderBottom: `${Math.floor(bgSize / 10)}px solid red`,
            borderRight: `${Math.floor(bgSize / 10)}px solid transparent`
          }}
        />
      )
    if (index === 2)
      return (
        <div
          className={`petal p2 ${animation}`}
          style={{
            borderTop: `${Math.floor(bgSize / 10)}px solid red`,
            borderRight: `${Math.floor(bgSize / 10)}px solid transparent`
          }}
        />
      )
    if (index === 3)
      return (
        <div
          className={`petal p3 ${animation}`}
          style={{
            borderBottom: `${Math.floor(bgSize / 10)}px solid red`,
            borderLeft: `${Math.floor(bgSize / 10)}px solid transparent`
          }}
        />
      )
    if (index === 4)
      return (
        <div
          className={`petal p4 ${animation}`}
          onAnimationEnd={e => setIsAnimationFinished(true)}
          style={{
            borderBottom: `${Math.floor(bgSize / 10)}px solid red`,
            borderRight: `${Math.floor(bgSize / 10)}px solid transparent`
          }}
        />
      )
  }

  return (
    <div>
      {choosePetal()}
    </div>
  );
};

export default Petal;