import React from 'react';

const Welcome = () => {

  const [linesNumber, setLinesNumber] = React.useState(null)
  const [linesWidth, setLinesWidth] = React.useState(null)
  const [animationsDelayTimes, setAnimationDelayTimes] = React.useState([1, 11, 5, 20, 3, 9, 16, 10, 2, 7, 1, 11, 5, 20, 3, 9, 16, 10, 2, 7])

  React.useEffect(
    () => {
      const determineLinesNumber = () => {
        let linesWidthTmp

        if (window.screen.width < window.screen.height) {
          linesWidthTmp = Math.floor(window.screen.width / 6)
          setLinesNumber(Math.floor(window.screen.height * 2 / linesWidthTmp))
        }
        else {
          linesWidthTmp = Math.floor(window.screen.height / 6)
          setLinesNumber(Math.floor(window.screen.width * 2 / linesWidthTmp))
        }

        setLinesWidth(linesWidthTmp)
      }

      determineLinesNumber()
      return;
    }, []
  )
  return (
    <div className='Welcome' >

      {linesWidth !== null && linesNumber !== null &&
        <div className='bg-lines' >
          {Array.from({ length: linesNumber }).map((n, i) => (
            <div
              className='line'
              style={{ width: `100%`, height: `${linesWidth}px` }}
              key={i}
            >
              <div className='line-overlay animation-left-and-right' style={{ animationDelay: `${animationsDelayTimes[i]}s` }}>
                {Array.from({ length: linesNumber }).map((n, i) => (
                  <div
                    className='cube'
                    style={{ width: `${linesWidth}px`, height: `100%` }}
                    key={i}
                  >
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      }

      {linesWidth !== null && linesNumber !== null &&
        <div className='bg-col animation-up-and-down' >
          {Array.from({ length: linesNumber }).map((n, i) => (
            <div
              className='col'
              style={{ width: `${linesWidth}px`, height: `100%` }}
              key={i}
            >
              <div className='col-overlay ' style={{ animationDelay: `${animationsDelayTimes[i]}s` }}>
                {Array.from({ length: linesNumber }).map((n, i) => (
                  <div
                    className='cube'
                    style={{ width: `100%`, height: `${linesWidth}px` }}
                    key={i}
                  >
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