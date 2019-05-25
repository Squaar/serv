'use strict';

class LikeButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {liked: false, hovered: false};
    }

    clicked = () => this.setState({liked: !this.state.liked});

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
        this.state = {xPos: 0, yPos: 0};
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    toString(){return "<MouseTracker>";}

    render(){
        return <span className="badge badge-light MouseTracker">x={this.state.xPos}, y={this.state.yPos}</span>;
    }

    handleMouseMove(e){
        this.setState({xPos: e.pageX, yPos: e.pageY});
    }

    componentDidMount(){
        console.log("Binding mouse tracker.");
        window.addEventListener('mousemove', this.handleMouseMove);
    }

    componentWillUnmount(){
        console.log("Unbinding mouse tracker.");
        window.removeEventListener('mousemove', this.handleMouseMove);
    }
}

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {showMouseTracker: props.showMouseTracker};
     }

     toggleMouseTracker(e){
        this.setState({showMouseTracker: !this.state.showMouseTracker});
     }

    render(){
        return(
            <div id="header">
                <LikeButton />
                <button type="button" data-toggle="button" className="btn btn-sm btn-outline-secondary" id="mouse-trigger-toggle" onClick={(e) => this.toggleMouseTracker(e)}>Show/Hide</button>
                {this.state.showMouseTracker && <MouseTracker />}
            </div>
        );
    }
}

class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container-fluid">
                <Header showMouseTracker={false}/>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));