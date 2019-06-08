import React from 'react';

export default class LikeButton extends React.Component{
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