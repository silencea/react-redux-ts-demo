import React, { Component } from 'react'
import img from '../../components/styles/image/404.png';
import './notFound.less';

export default class NotFound extends Component {

    render() {
        return (
            <div className="center">
                <img className="bg" src={img} alt="404" />
            </div>
        );
    }
}
