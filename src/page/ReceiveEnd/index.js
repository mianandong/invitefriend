import React from 'react';
import './index.css';

class ReceiveEnd extends React.Component {
    constructor(props) {
        super(props);

        this.slideNext = this.slideNext.bind(this);
    }

    slideNext() {
        this.props.swiper.slideNext();
    }

    render() {
        return (
            <div className='receive-end'>
                <div className='end-tip'></div>
                <div className='receive-up' onClick={this.slideNext}/>
            </div>
        );
    }
}

export default ReceiveEnd;