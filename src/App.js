import React from 'react';
import "babel-polyfill";
import BoardTop from './components/game'
import './App.css';

function App() {
  return (
    <div id="app" className="App">
      <div id="bo" className="level-one container-fluid nopadding">
          <BoardTop />
      </div>  
    </div>
  );
}

export default App;
