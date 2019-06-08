import React from 'react';

import MouseTracker from './MouseTracker.js';
import PingPonger from './PingPonger.js';
import LikeButton from './LikeButton.js';

export default class Junk extends React.Component{
    render(){
        return <div className="app-module">
            <MouseTracker />
            <LikeButton />
            <PingPonger interval={5 * 1000} color="green" size={500}/>
        </div>;
    }
}