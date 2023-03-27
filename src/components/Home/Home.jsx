import React from 'react';
import {useHistory} from 'react-router-dom'

function Home() {
  const history = useHistory()

  const handleClickAnimals = () => {
    alert('RELEASING ANIMALS');
    // change location somehow
    history.push('/animals');
  }

  const handleClickPlants = () => {
    alert('GREENERY AHEAD');

    history.push('/plants');
  }

  return (
    <div>
      <h1>HOME</h1>
      <img src="https://pixy.org/download/4718707/" width={500}/>
      <hr></hr>
      <button onClick={handleClickAnimals}>Go To Animals</button>
      <button onClick={handleClickPlants}>Go To Plants</button>
    </div>
  );
}

export default Home;
