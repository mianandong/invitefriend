import React from 'react';
import './ReceiveHead.css';

class ReceiveHead extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className='head'>
                    <div className='head-tip'>
                        你的好友邀请你领取10份精选课件
                    </div>
                </div>

                <div className='free-receive'>
                    <div className='free-receive-img'></div>
                </div>
            </div>
        );
    }
}

export default ReceiveHead;