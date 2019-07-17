import React from 'react';
import './Receive.css';

class Receive extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            peopleNum: 0
        };
    }

    componentDidMount() {
        // 请求后台获取人数
    }

    render() {
        return (
            <div className='receive-center-con'>
                <div className='receive-center'>
                    <div className='receive-center-title'>已有 {this.state.peopleNum} 人领取</div>
                    <div className='input-wrap'>
                        <input className='input-phone' type="tel" placeholder='请输入手机号' id='receive-phone' maxLength={13}/>
                    </div>
                    <div className='input-wrap'>
                        <a className='get-share-btn'>立即领取</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Receive;