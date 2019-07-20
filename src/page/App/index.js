import React from 'react';
import './index.css';
import Global from '../global';

import ReceiveHead from '../ReceiveHead/ReceiveHead.js';
import ReceiveTip from '../ReceiveTip/ReceiveTip.js';
import Receive from '../Receive/Receive.js';
import ReceiveEnd from '../ReceiveEnd/ReceiveEnd';
import Introduce from '../Introduce/index.js';

import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.fixIntroduceGetContent = this.fixIntroduceGetContent.bind(this);
  }

  componentDidMount() {
    this.mySwiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      mousewheelControl: true,
      speed: 2000,
      autoHeight: true,
      onSetTransition: (swiper) => {
        if (swiper.activeIndex == 1) {
          swiper.params.onlyExternal = true;
          swiper.disableMousewheelControl();
        }
        else {
          swiper.params.onlyExternal = false;
          swiper.enableMousewheelControl();
        }
      },
      on: {
        slideChange: () => {
          this.fixIntroduceGetContent();
        }
      }
    });

    Global.Swiper = this.mySwiper;
  }

  fixIntroduceGetContent() {
    let element = document.getElementsByClassName('introduce-get-con')[0];
    if (this.mySwiper.activeIndex == 0) {
      element.style.display = 'none';
    }
    else {
      element.style.display = 'flex';
    }
  }

  render() {
    let swiperSlide = 'swiper-slide';

    return (
      <div className='swiper-container'>
        <div className='swiper-wrapper'>

          <div className={`${swiperSlide} rootDiv`}>
            <ReceiveHead />
            <ReceiveTip />
            <Receive />
            <ReceiveEnd />
          </div>

          <Introduce style={swiperSlide} />
        </div>
      </div>
    );
  }
}

export default App;