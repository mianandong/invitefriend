import React from 'react';

class App extends React.Component {
  constructor(...props) {
    super(props);
  }

  render() {

    var titleImagePath = "../image/title.png";

    return (
      <div className='rootDiv'>
        
        <div>
          你的好友邀请你领取10份精选课件
        </div>

        <div className='free-receive'>
          <div className='free-receive-img'>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
