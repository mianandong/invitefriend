import React from 'react';
import './index.css';

import ReceiveHead from '../ReceiveHead/ReceiveHead.js';
import ReceiveTip from '../ReceiveTip/ReceiveTip.js';
import Receive from '../Receive/Receive.js';
import ReceiveEnd from '../ReceiveEnd/ReceiveEnd';
import Introduce from '../Second/index.js';

import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.slideNext = this.slideNext.bind(this);
  }

  componentDidMount() {
    this.mySwiper = new Swiper('#o-c', {
      direction: 'vertical',
      mousewheelControl: true,
      speed: 1000,
      onSetTransition: function(swiper) {
          if(swiper.activeIndex == 1) {
            swiper.params.onlyExternal = true;
	        swiper.disableMousewheelControl();
          }
          else {
            swiper.params.onlyExternal = false;
	        swiper.enableMousewheelControl();
          }
      }
    });

    // new Swiper('#i-c1', {
    //     scrollbar: '.swiper-scrollbar',
    //     direction: 'vertical',
    //     slidesPerView: 'auto',
	// 	freeMode: true,
	// 	freeModeMomentum : false,
	// 	mousewheelControl: true,
	// 	mousewheelSensitivity : 0.5,
	// 	// onSetTransition: function(swiper,translate) {
	// 	// 	//translate 一直为0，不可直接用
	// 	// 	let nowTranslate=swiper.translate;
	// 	// 	if( typeof(beforeTranslate)=="undefined") {
    //     //         beforeTranslate=0
    //     //     };
	// 	// 	let slideHeight=swiper.slides[0].scrollHeight;
	// 	// 	let swiperHeight=swiper.height
	// 	// 	if(nowTranslate>-2 && nowTranslate > beforeTranslate) {
    //     //         oSwiper.slideTo(0);
    //     //     }
	// 	// 	if(slideHeight-swiperHeight+nowTranslate<2 && nowTranslate < beforeTranslate) {
    //     //         oSwiper.slideTo(2);
    //     //     }
	// 	// 	beforeTranslate=nowTranslate;
    //     // },
	// 	// onTouchEnd:function(swiper){
	// 	// 	if(swiper.translate>0) { 
    //     //         oSwiper.slideTo(0);
    //     //     }
	// 	// 	if(swiper.translate<(swiper.height-swiper.slides[0].scrollHeight)) {
    //     //         oSwiper.slideTo(2);
    //     //     }
	// 	// }
    // });
  }

  slideNext() {
    this.mySwiper.slideNext();
  }

  render() {
    let swiperSlide = 'swiper-slide';

    return (
        <div className='swiper-container rootDiv' id='o-c'>
            <div className='swiper-wrapper'>

                <div className={swiperSlide}>
                    <ReceiveHead />
                    <ReceiveTip />
                    <Receive />
                    <ReceiveEnd />
                    <div className='receive-up' onClick={this.slideNext}></div>
                </div>

                {/* <div className={swiperSlide}>
                    <div className='swiper-container' id='i-c1'>
                        <div className='swiper-wrapper'>
                            <div className={swiperSlide}>
                                <Introduce />
                            </div>
                        </div>
                        <div className='swiper-scrollbar'>
                            <div className='swiper-scrollbar-drag'></div>
                        </div>
                    </div>
                </div> */}

                <div className={swiperSlide}>
                    <Introduce />
                </div>

            </div>
        </div>
    );
  }
}

export default App;