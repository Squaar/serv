'use strict';
import React from "react";
import ReactDOM from "react-dom";
import PaintApp from "./paint.js";

class LikeButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {liked: false, hovered: false};
    }

    clicked = () => this.setState((state, props) => ({liked: !state.liked}));

    hovered = () => this.setState({hovered: true})

    notHovered = () => this.setState({hovered: false})

    render() {
        if(this.state.liked && this.state.hovered){
            return <button className="btn btn-sm btn-outline-danger" onClick={this.clicked} onMouseOver={this.hovered} onMouseOut={this.notHovered}>Unlike &lt;/3</button>;
        }
        else if (this.state.liked) {
            return <button className="btn btn-sm btn-outline-danger" onClick={this.clicked} onMouseOver={this.hovered}  onMouseOut={this.notHovered}>&lt;3</button>;
        }
        else{
            return <button className="btn btn-sm btn-outline-primary" onClick={this.clicked} onMouseOver={this.hovered}  onMouseOut={this.notHovered}>Like</button>;
        }
    }
}

class MouseTracker extends React.Component{
    constructor(props){
        super(props);
        this.state = {xPos: 0, yPos: 0, enabled: false, hovered: false};
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.toggle = this.toggle.bind(this);
        this.hovered = this.hovered.bind(this);
        this.notHovered = this.notHovered.bind(this);
    }

    toString(){return "<MouseTracker>";}

    toggle(){
        this.setState((state, props) => {
            state.enabled = !state.enabled
            if(this.state.enabled){
                window.addEventListener('mousemove', this.handleMouseMove);
            }
            else{
                window.removeEventListener('mousemove', this.handleMouseMove);
            }
            return {enabled: state.enabled}
        });
    }

    hovered(){
        this.setState({hovered: true});
    }

    notHovered(){
        this.setState({hovered: false});
    }

    handleMouseMove(e){
        this.setState({xPos: e.pageX, yPos: e.pageY});
    }

    render(){
//        return <span className="badge badge-light MouseTracker">x={this.state.xPos}, y={this.state.yPos}</span>;
        return <button type="button" data-toggle="button" className="btn btn-sm btn-outline-light" id="mouse-trigger-toggle" onMouseOver={this.hovered} onMouseOut={this.notHovered} onClick={this.toggle}>
            {this.state.enabled && !this.state.hovered ? "x=" + this.state.xPos + ", " + "y=" + this.state.yPos : "Show/Hide"}
        </button>;
    }

    componentDidMount(){

    }

    componentWillUnmount(){
        console.log("Unbinding mouse tracker.");
        window.removeEventListener('mousemove', this.handleMouseMove);
    }
}

class Header extends React.Component{
    constructor(props){
        super(props);
     }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-1" id="header">
                <ul className="navbar-nav">
                    <li className="nav-item"><a href="#" className="navbar-brand">Serv</a></li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><MouseTracker /></li>
                </ul>
            </nav>
        );
    }
}

class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container-fluid px-0">
                <Header />
                <PaintApp />
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));