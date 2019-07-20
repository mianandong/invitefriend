import React from 'react';
import './index.css';
import IntroduceItem from './IntroduceItem';

import part1 from '../../image/part1.png';
import part2 from '../../image/part2.png';
import part3 from '../../image/part3.png';

import title1 from '../../image/title-01.png';
import title2 from '../../image/title-02.png';
import title3 from '../../image/title-03.png';
import title4 from '../../image/title-04.png';

let content1 = (
    <img className='content-img' src="http://seewo.oss-cn-hangzhou.aliyuncs.com/static/en-web/public/Invite-mobile/invite-mobile-01.gif"/>
);

let content2 = (
    <img className='content-img' src="http://seewo.oss-cn-hangzhou.aliyuncs.com/static/en-web/public/Invite-mobile/invite-mobile-06.gif" />
);

let content3 = (
    <img className='content-img' src="http://seewo.oss-cn-hangzhou.aliyuncs.com/static/en-web/public/Invite-mobile/invite-mobile-03.gif" />
);

let content4 = (
    <img className='content-img' src="http://seewo.oss-cn-hangzhou.aliyuncs.com/static/en-web/public/Invite-mobile/invite-mobile-03.gif" />
);

let introduceItems = [
    {
        'item-head-display': 'block',
        'item-head-img': part1, 
        'item-center-title-img': title1, 
        'item-center-content': content1,
        'item-bottom-img':part2,
    },
    {
        'item-head-display': 'none',
        'item-head-img': '', 
        'item-center-title-img': title2, 
        'item-center-content': content2,
        'item-bottom-img':part2,
    },
    {
        'item-head-display': 'none',
        'item-head-img': '', 
        'item-center-title-img': title3, 
        'item-center-content': content3,
        'item-bottom-img': part2,
    },
    {
        'item-head-display': 'none',
        'item-head-img': '', 
        'item-center-title-img': title4, 
        'item-center-content': content4,
        'item-bottom-img':part3,
    }
];

class Introduce extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`${this.props.style} section-2`}>

                <div className='introduce-head'></div>

                <ul className='introduce-center'>
                    <li className='introduce-item'>
                        {introduceItems.map((item, index) => (
                            <IntroduceItem key={index}
                                itemHeadDisplay={item["item-head-display"]}
                                itemHeadImg={item["item-head-img"]}
                                itemCenterTitleImg={item["item-center-title-img"]}
                                itemCenterContent={item["item-center-content"]}
                                itemBottomImg={item["item-bottom-img"]}
                            />
                        ))}
                    </li>
                </ul>

                <div className='introduce-botton'>
                    <div className='bottom-icon'></div>

                    <div className='introduce-get-con'>
                        <div className='introduce-input-con'>
                            <input type="tel" placeholder='请输入手机号' id='introduce-phone' maxLength={13}/>
                        </div>
                        <div className='introduce-btn-con'>
                            <a className='introduce-btn'>立即领取</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    } 
}

export default Introduce;