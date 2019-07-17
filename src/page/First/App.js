import React from 'react';
import './App.css';

import ReceiveHead from '../ReceiveHead/ReceiveHead.js';
import ReceiveTip from '../ReceiveTip/ReceiveTip.js';
import Receive from '../Receive/Receive.js';
import ReceiveEnd from '../ReceiveEnd/ReceiveEnd';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className='rootDiv'>
        
        <ReceiveHead/>
        
        <ReceiveTip/>

        <Receive/>

        <ReceiveEnd/>
        
      </div>
    );
  }
}

export default App;
