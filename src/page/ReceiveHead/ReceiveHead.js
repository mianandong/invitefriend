import React from 'react';
import './ReceiveHead.css';

class ReceiveHead extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='receive-head'>
                <div className='receive-head-tip'>
                    你的好友邀请你领取10份精选课件
                </div>

                <div className='receive-head-img'/>
            </div>
        );
    }
}

export default ReceiveHead;