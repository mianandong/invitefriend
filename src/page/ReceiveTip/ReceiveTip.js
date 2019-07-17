import React from 'react';
import './ReceiveTip.css';
import Barrager from './barrager.js';

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

    initBroadcast() {

        var barrager = Barrager.init({
            user_rate: [0.3, 0.5, 0.2],
            gift_rate: [1],
            gift: ['']
        });

        var nowParams = barrager.makeBarrage();
        var nextParams = barrager.makeBarrage();

        this.setState({
            nowText: `${nowParams.name} ${nowParams.time}领取了教学大礼包`,
            nextText: `${nextParams.name} ${nextParams.time}领取了教学大礼包`
        });

        setInterval(() => {
            this.changeBroadcast(barrager);
        }, 2000);
    }

    changeBroadcast(barrager) {
        var nowParams = barrager.makeBarrage();
        var nextParams = barrager.makeBarrage();
        this.setState({
            nowText: `${nowParams.name} ${nowParams.time}领取了教学大礼包`,
            nextText: `${nextParams.name} ${nextParams.time}领取了教学大礼包`
        });
    }

    render() {
        return (
            <div className='receive-tip'>
                <div className='broadcast-now'>{this.state.nowText}</div>
                <div className='broadcast-next'>{this.state.nextText}</div>
            </div>
        );
    }
}

export default ReceiveTip;