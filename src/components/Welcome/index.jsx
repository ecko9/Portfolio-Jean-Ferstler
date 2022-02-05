import React from 'react';

const Welcome = () => {

  const [linesNumber, setLinesNumber] = React.useState(8)
  const [bgSize, setBgSize] = React.useState(null)
  const [animationsDelayTimes, setAnimationDelayTimes] = React.useState([1, 11, 5, 20, 3, 9, 16, 10, 2, 7, 1, 11, 5, 20, 3, 9, 16, 10, 2, 7])

  React.useEffect(
    () => {
      const determineDiagonal = () => {
        let hypothenuse = Math.floor(Math.pow(Math.floor(Math.pow(window.screen.width, 2) + Math.pow(window.screen.height, 2)), 0.5))
        setBgSize(hypothenuse)
      }

      determineDiagonal()
      return;
    }, []
  )
  return (
    <div className='Welcome' >

      {bgSize !== null &&
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
            <div
              className='line'
              key={i}
            >
              <div className='line-overlay animation-left-and-right' style={{ animationDelay: `${animationsDelayTimes[i]}s` }}>
                {Array.from({ length: linesNumber }).map((n, i) => (
                  <div className='cube' key={i}>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      }

      {bgSize !== null &&
        <div
          className='bg-col '
          style={{
            width: `${bgSize}px`,
            height: `${bgSize}px`,
            top: `-${Math.floor((bgSize - window.screen.height) / 2)}px`,
            left: `-${Math.floor((bgSize - window.screen.width) / 2)}px`
          }}
        >
          {Array.from({ length: linesNumber }).map((n, i) => (
            <div className='col' key={i} >

              <div className='col-overlay animation-up-and-down' style={{ animationDelay: `${animationsDelayTimes[i]}s` }}>
                {Array.from({ length: linesNumber }).map((n, i) => (
                  <div className='cube' key={i} >
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default Welcome;