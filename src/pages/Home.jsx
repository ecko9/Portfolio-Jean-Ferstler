import React from 'react';
import Welcome from '../components/Welcome';

const Home = () => {

  const [wlcA, setWlcA] = React.useState(false)

  const testtt = (e) => {
    console.log("coucou")
    setWlcA(true)
  }

  return (
    <div className='Home'>
      <Welcome />
      <button className='BtnWelcome' onClick={e => testtt(e)}>
      </button>
    </div>
  );
};

export default Home;