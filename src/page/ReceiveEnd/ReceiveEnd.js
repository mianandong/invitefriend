import React from 'react';
import './ReceiveEnd.css';

class ReceiveEnd extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='receive-end'>
                <div className='end-tip'></div>
                <div className='receive-up'></div>
            </div>
        );
    }
}

export default ReceiveEnd;