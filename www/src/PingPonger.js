import React from 'react';
import $ from "jquery";

export default class PingPonger extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
        this.ctx = null;
        this.canvas = null;

        this.ping = this.ping.bind(this);
        this.setContext = this.setContext.bind(this);
    }

    ping(){
        console.log("PING");
        var self = this;
        var jqxhr = $.get("http://localhost:5000/ping")
            .done(function(data, status, jqxhr2){
                console.log(data + ", " + status + ", " + jqxhr2);
                self.ctx.arc(self.props.size / 2, self.props.size / 2, self.props.size / 2, 0, Math.PI * 2, false);
                self.ctx.fillStyle = self.props.color;
                self.ctx.fill();
            })
            .fail(function(jqxhr2, status, error){
                console.log(jqxhr2 + ", " + status + ", " + error);
            })
            .always(function(){

            });
    }

    setContext(c){
        // this.ctx = c.getContext("2d");
        // this.canvas = c;
    }

    //TODO: vertically align this junk
    render(){
        return <canvas ref={this.setContext} width={this.props.size} height={this.props.size}></canvas>;
    }

    componentDidMount(){
        this.intervalId = setInterval(() => {this.ping();}, this.props.interval);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId)
    }
}