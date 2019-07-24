import React from 'react';
import './index.css';

class ReceiveSuccess extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className='scu-top'>
                    <div className='suc-head-img animated'></div>
                    <div className='suc-tip-bg'></div>
                    <div className='suc-tip-text'>在电脑端下载并登录希沃白板5，查收教学大礼包</div>
                </div>

                <div className='scu-body'>
                    <div className='suc-center'>
                        <dir className='input-wrap'>
                            <input className='input-phone' placeholder='请输入邮箱地址，获取希沃白板5'/>
                        </dir>
                        <div className='input-wrap'>
                            <a id='down-btn' className='get-share-btn'>立即获取</a>
                        </div>
                    </div>
                    <div className='suc-bottom'>
                        <p>你还可以</p>
                        <p>在电脑端登陆网址下载希沃白板5</p>
                        <p>https://easinote.seewo.com</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReceiveSuccess;
