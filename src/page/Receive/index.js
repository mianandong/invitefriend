import React from 'react';
import './index.css';
import phoneNumUtils from '../../utils/phoneNumUtils';
import ToolTip from '../../utils/tooltipUtils';

class Receive extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            peopleNum: 0,
            phoneNum:'',
            errorTip:'',
            errorDisplay: 'none'
        };

        this.initTelPhone = this.initTelPhone.bind(this);
        this.submitPhoneNum = this.submitPhoneNum.bind(this);
        this.getShareInfo = this.getShareInfo.bind(this);
    }

    async componentDidMount() {
        let myHeaders = new Headers({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'text/plain'
        });

        try {
            // 有跨域问题，是不是要配置代理？
            let data = await fetch("http://edu.seewo.com:80/api/v1/invite/inviter/info?token=&&api=GET_USER_DETAIL&userId=undefined",{
                method: 'GET',
                headers: myHeaders,
                mode: 'cors'
            });
            console.log(data);
            let num = await data.json().data.eCReceiveCount;
            this.setState({
                peopleNum: num
            });
        }
        catch {
            console.log("request api/v1/invite/inviter/info error");
            this.setState({
                peopleNum: 125638
            });
        }
    }

    async getShareInfo() {
        return {'error_code':0,'data':{'userStatus':'EN5'}};
    }

    // 格式化手机号
    initTelPhone(event) {
        let phone = event.target.value;
        phone = phoneNumUtils.initPhoneNum(phone);
        this.setState({
            errorDisplay: 'none',
            phoneNum: phone
        });
    }

    //提交用户填写的手机号
    async submitPhoneNum() {
        //检查手机号
        const phone = this.state.phoneNum.replace(/\s*/g,"");
        const result = phoneNumUtils.isMobileNumber(phone);
        console.log(result);
        if(!result.flag) {
            this.setState({
                errorDisplay: 'block',
                errorTip: result.message
            });
            return;
        }

        //请求后台，是否已注册
        let data = await this.getShareInfo();
        if (data.error_code === 0) {
            if (data.data.userStatus === 'EN5') {
                ToolTip.show("本手机号已注册", 3000);
            } else {
                //显示成功页面
                this.props.history.push('/download');
            }
        } else {
            ToolTip.show(data.data.message, 3000);
        }
    }

    render() {
        return (
            <div className='receive-center-con'>
                <div className='receive-center'>
                    <div className='receive-center-title'>已有 {this.state.peopleNum} 人领取</div>
                    <div className='input-wrap'>
                        <input className='input-phone' type="text" 
                                value={this.state.phoneNum}
                                placeholder='请输入手机号' id='receive-phone' maxLength={13} 
                                onChange={this.initTelPhone}/>
                    </div>
                    <div className='input-wrap'>
                        <a className='get-share-btn' onClick={this.submitPhoneNum}>立即领取</a>
                    </div>
                    <div className='error-tip' style={{display:`${this.state.errorDisplay}`}}>
                        {this.state.errorTip}
                    </div>
                </div>
            </div>
        );
    }
}

export default Receive;