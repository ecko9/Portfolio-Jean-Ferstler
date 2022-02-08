import React from 'react';

const Petal = ({ index, mbcIndex, bgSize, isAnimationLaunched, isAnimationFinished, setIsAnimationFinished }) => {

  const [animation, setAnimation] = React.useState("")

  const swapAnimation = () => {
    if (mbcIndex === 4) {

      if (!isAnimationLaunched && isAnimationFinished) {
        setIsAnimationFinished(false)
      }

      if (isAnimationLaunched && !isAnimationFinished) {
        setIsAnimationFinished(true)
      }
    }
  }

  React.useEffect(
    () => {

      if (isAnimationLaunched) {
        if (!isAnimationFinished)
          setAnimation(`animation-opacity-${index}`)
        else
          setAnimation('')
      }
      else {
        if (isAnimationFinished) {
          setAnimation(`animation-opacity-reverse`)
        }
        else
          setAnimation("")
      }


      return;
    }, [isAnimationLaunched, isAnimationFinished]
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
          onAnimationEndCapture={e => swapAnimation()}
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