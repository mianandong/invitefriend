import React from 'react';
import './index.css';

class IntroduceItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='item'>
                <div className='item-head' style={{display: this.props.itemHeadDisplay}}>
                    <img src={this.props.itemHeadImg} />
                </div>
                <div className='item-center'>
                    <div className='item-center-title'>
                        <img src={this.props.itemCenterTitleImg} />
                    </div>
                    <div className='item-center-con'>
                        {this.props.itemCenterContent}
                    </div>
                </div>
                <div className='item-bottom'>
                    <img src={this.props.itemBottomImg} />
                </div>
            </div>
        );
    }
}

export default IntroduceItem;