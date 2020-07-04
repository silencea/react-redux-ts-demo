import React, { useState, useEffect } from 'react'
import './index.less';
import { Modal, message } from 'antd';
import { formateDate } from '../../utils/dateUtils';
import whetherImg from '../../assets/images/qing.png';
import LinkButton from '../link-button';

const logout = () => {
    // 显示确认框
    Modal.confirm({
        content: '确定退出吗?',
        onOk: () => {
            message.warn("功能暂没有实现");
        }
    })
}

//换一种方法实现
export default function Header(){
    
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {	
        const id = setInterval(() => {	
            setCurrentTime(formateDate(Date.now()))	
        }, 1000);	
        return () => clearInterval(id);	
      }, []);

    return (
        <div className="header">
                <div className="header-top">
                    <span>欢迎</span>
                    <LinkButton onClick={logout}>退出</LinkButton>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left"></div>
                    <div className="header-bottom-right">
                        <span>{currentTime}</span>
                        <img src={whetherImg} alt="weather" />
                        <span>晴</span>
                    </div>
                </div>
            </div>
    )


}

// export interface IState {
//     currentTime: string;
//     intervalId?: any;

// }
// export default class Header extends Component<any, IState>  {

//     readonly state = {
//         currentTime: "",
//         intervalId: undefined
//     };

//     /**
//      * 退出登陆
//      */
//     logout = () => {
//         // 显示确认框
//         Modal.confirm({
//             content: '确定退出吗?',
//             onOk: () => {
//                 alert("功能暂没有实现");
//             }
//         })
//     }

//     getTime = () => {
//         // 每隔1s获取当前时间, 并更新状态数据currentTime
//         const intervalId = setInterval(() => {
//             const currentTime = formateDate(Date.now())
//             this.setState({ currentTime })
//         }, 1000)
//         this.setState({ intervalId });
//     }

//     componentDidMount() {
//         // 获取当前的时间
//         console.log("get time");
//         this.getTime()
//     }

//     /*
//   当前组件卸载之前调用
//    */
//     componentWillUnmount() {
//         // 清除定时器
//         clearInterval(this.state.intervalId)
//     }

//     public render() {
//         return (
//             <div className="header">
//                 <div className="header-top">
//                     <span>欢迎</span>
//                     <LinkButton onClick={this.logout}>退出</LinkButton>
//                 </div>
//                 <div className="header-bottom">
//                     <div className="header-bottom-left"></div>
//                     <div className="header-bottom-right">
//                         <span>{this.state.currentTime}</span>
//                         <img src={whetherImg} alt="weather" />
//                         <span>晴</span>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
