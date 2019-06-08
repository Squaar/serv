import React from 'react';
import './DefaultSplash.css';
import logo from './static/logo.svg';

export default class DefaultSplash extends React.Component {
    render(){
        return (
            <div className="default-splash">
                <header className="default-splash-header">
                    <div className="default-splash-logo-container"><img src={logo} className="default-splash-logo" alt="logo" /></div>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}