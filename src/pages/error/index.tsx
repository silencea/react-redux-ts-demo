import React, { Component } from 'react'
import img from '../../assets/images/404.png';
import './index.less';

export default class NotFound extends Component {

    render() {
        return (
            <div className="center">
                <img className="bg" src={img} alt="404" />
            </div>
        );
    }
}
