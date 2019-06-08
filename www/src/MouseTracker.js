import React from 'react';

export default class MouseTracker extends React.Component{
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