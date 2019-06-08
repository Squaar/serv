import React from 'react';
import {Route, Switch, Redirect, Link, NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import DefaultSplash from './DefaultSplash.js';
import Junk from './Junk.js';
import PaintApp from './PaintApp.js';

import './App.css';


export default class App extends React.Component{
    render(){
        return <>
            <Navigator />
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route exact path="/home" component={Home} />
                <Route path="/junk" component={Junk} />
                <Route path="/paint" component={PaintApp} />
                <Route path="/defaultSplash" component={DefaultSplash} />
            </Switch>
        </>;
    }
}

class Navigator extends React.Component{
    render(){
        return <>
            
            <Navbar collapseOnSelect variant="dark" bg="dark" expand="lg">
                <Route path="/home" render={() => <div className="home-highlight" />} />
                <Navbar.Brand><NavLink to="/home" >Serv</NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-collapse" />
                <Navbar.Collapse id="navbar-collapse">
                    <Nav> {/* left allign */}
                    <NavDropdown title="Playground" >
                        <NavLink to="/junk" className="nav-link"><NavDropdown.Item as="div">Junk</NavDropdown.Item></NavLink>
                        <NavLink to="/paint" className="nav-link"><NavDropdown.Item as="div">Paint</NavDropdown.Item></NavLink>
                        <NavLink to="/defaultSplash" className="nav-link"><NavDropdown.Item as="div">Default Splash</NavDropdown.Item></NavLink>
                    </NavDropdown>
                    </Nav>
                    <Nav className="ml-auto"> {/* right allign */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>;
    }
}

class Home extends React.Component{
    render(){
        return <div className="app-module"><h1>Home</h1></div>;
    }
}