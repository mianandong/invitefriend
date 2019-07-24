import React from 'react';
import './index.css';
import Barrager from './barrager.js';
import styleUtils from '../../utils/styleUtils';

class ReceiveTip extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nowText:"",
            nextText:""
        };

        this.initBroadcast = this.initBroadcast.bind(this);
        this.changeBroadcast = this.changeBroadcast.bind(this);
    }

    componentDidMount() {
        this.initBroadcast();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    initBroadcast() {

        let barrager = Barrager.init({
            user_rate: [0.3, 0.5, 0.2],
            gift_rate: [1],
            gift: ['']
        });

        let nowParams = barrager.makeBarrage();
        let nextParams = barrager.makeBarrage();

        this.setState({
            nowText: `${nowParams.name} ${nowParams.time}领取了教学大礼包`,
            nextText: `${nextParams.name} ${nextParams.time}领取了教学大礼包`
        });

        this.interval = setInterval(() => {
            this.changeBroadcast(barrager);
        }, 1800);
    }

    changeBroadcast(barrager) {
        let nextParams = barrager.makeBarrage();

        let now = document.getElementsByClassName('broadcast-now')[0];
        let next = document.getElementsByClassName('broadcast-next')[0];

        styleUtils.addClassName(now, 'animation-top-leave');
        styleUtils.addClassName(next, 'animation-bottom-enter');

        setTimeout(()=>{
            now.innerHTML = `${nextParams.name} ${nextParams.time}领取了教学大礼包`;

            styleUtils.removeClassName(now, 'animation-top-leave');
            styleUtils.removeClassName(next, 'animation-bottom-enter');

            now.className = 'broadcast-next';
            next.className = 'broadcast-now';
        }, 1000);
    }

    render() {
        return (
            <div className='receive-tip'>
                <div className='broadcast-now'>{this.state.nowText}</div>
                <div className='broadcast-next' id='ddd'>{this.state.nextText}</div>
            </div>
        );
    }
}

export default ReceiveTip;