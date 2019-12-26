//Componet
import React from 'react';
import Intro from './components/Intro';
import Welcome from './components/Welcome';
import Film from './components/Film';

//css
import './css/style.css';


function App() {
  return (
    <div className="App">
      {/* <Intro nom="Albi" /> */}
      <Film />
    </div>
  );
}

export default App;
