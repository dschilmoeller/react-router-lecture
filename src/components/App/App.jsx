import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';


import Animals from '../Animals/Animals.jsx';
import Plants from '../Plants/Plants.jsx';
import Home from '../Home/Home.jsx';
import AnimalDetails from '../AnimalDetails/AnimalDetails.jsx';
import Search from '../Search/Search';


function App() {
  return (
    <Router>
      <div className="App">

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/plants">Plants</Link></li>
            <li><Link to="/animals">Animals</Link></li>
            <li><Link to="/animals/details/37">Details for animal with ID# 37</Link></li>
            <li><Link to="/search?legs=1000&type=insect">Search for 1000 legged insect</Link></li>
          </ul>

        </nav>

        <hr></hr>


        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/plants">
          <Plants />
        </Route>

        <Route path="/animals">
          <Animals />
        </Route>

        {/* NOTE THE FUCKING LINK TO ANIMAL DETAILS 
        Could also be id: and that would let us use params.id inside Animal Details to grab ID-coded information via Axios
        requests like get '/animals/${params.id}'
        Well this was inadequately explained. There's some combination of param,s, the shit after the semicolon, and the 
        availability within params. Check documentation later.
        */}
        <Route path="/animals/details/:id">
          <AnimalDetails />
        </Route>

        <Route path="/search">
          <Search />
        </Route>
      </div>
    </Router>
  );
}

export default App;
