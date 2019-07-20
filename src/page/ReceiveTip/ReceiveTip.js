import React from 'react';
import './ReceiveTip.css';
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

        setInterval(() => {
            this.changeBroadcast(barrager);
        }, 2000);
    }

    changeBroadcast(barrager) {
        let nowParams = barrager.makeBarrage();
        let nextParams = barrager.makeBarrage();

        this.setState({
            nowText: `${nowParams.name} ${nowParams.time}领取了教学大礼包`,
            nextText: `${nextParams.name} ${nextParams.time}领取了教学大礼包`
        });
        
        styleUtils.removeClassName('broadcast-now', 'animation-next');
        styleUtils.removeClassName('broadcast-next', 'animation-now');

        styleUtils.addClassName('broadcast-now', 'animation-next');
        styleUtils.addClassName('broadcast-next', 'animation-now');
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