import React, { Component } from 'react';
import './../App.css';

// state ={
//   gameStart,
//   bomb, // need to keep track of time, equals to a number(position), assuming only one bomb appear at a time
//   activeMoles, // array of active moles, also for checking last moles
//   score // need to kept track of killing spree? onclick on board but miss mole reset?
// }


class App extends Component {
  render() {
    return (
      <div>
          <h1>Whack-a-mole!</h1>
      </div>
    
    );
  }
}

export default App;
