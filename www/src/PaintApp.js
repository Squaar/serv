import React from "react";

export default class PaintApp extends React.Component {
    render(){
        return <div className="paintapp">
            <PaintToolbar />
            <PaintCanvas />
        </div>
    }
    
    componentDidMount(){
        
    }
    
    componentWillUnmount(){
        
    }
}

class PaintToolbar extends React.Component {    
    render(){
        return "toolbar";
    }
    
    componentDidMount(){
        
    }
    
    componentWillUnmount(){
        
    }
}

class PaintCanvas extends React.Component {
    constructor(props){
        super(props);
        this.canvas = <canvas></canvas>;
//        ctx = this.canvas.getContext("2d");
//        ctx.fillRect(25, 25, 100, 100);
    }
    
    render(){
        return "canvas";
    }
    
    componentDidMount(){
        
    }
    
    componentWillUnmount(){
        
    }
}
