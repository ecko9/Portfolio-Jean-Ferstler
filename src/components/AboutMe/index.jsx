import React from 'react';

const AboutMe = () => {

  const [indexWord, setIndexWord] = React.useState(0)
  const words = ["WEB.", "DEVELOPPEMENT.", "CODE.", "SITES.", "DESIGN.", "EXPERIENCE.", "PROGRAMMATION.", "INTERNET."]

  const getNextIndex = () => {
    if (indexWord >= words.length - 1)
      return 0
    else
      return indexWord + 1
  }

  return (
    <div className='AboutMe'>
      <h2 onAnimationIteration={e => setIndexWord(getNextIndex(words.length))}>
        {words[indexWord].split('').map((letter, i) => (
          <span key={i}>{letter}</span>
        ))}
      </h2>
      <p>Bonjour, je suis Jean Ferstler, Développeur Full-stack basé à Montpellier.</p>
    </div>
  );
};

export default AboutMe;