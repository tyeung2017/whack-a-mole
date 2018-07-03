import React, { Component } from 'react';
import './../App.css';
import MoleHole from './MoleHole';

// state ={
//   gameStart,
//   bomb, // need to keep track of time, equals to a number(position), assuming only one bomb appear at a time
//   activeMoles, // array of active moles, also for checking last moles
//   score // need to kept track of killing spree? onclick on board but miss mole reset?
// }


class App extends Component {
  render() {
    return (<div className="main">
        <h1 className="title">Whack-a-mole!</h1>
      <div className="board">
        {[...Array(16)].map((item, i) => <MoleHole key={i} />)}
      </div>  
    </div>  
    );
  }
}

export default App;
