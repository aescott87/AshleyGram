import React, { Component } from 'react';

class GalleryItem extends Component {

    state = {
        showDescription: false,
    }

    handleToggle = () => {
        console.log('in handleToggle');
        //setState
        this.setState({
            //Change boolean value
            showDescription: !this.state.showDescription,
        });
    }

    handleDescription = () => {
        console.log('In handleDescription');
        
        if(this.state.showDescription) {
            //false, show description
            return <p onClick={this.handleToggle}>{this.props.item.description}</p>;
        } else {
            //true
            return <img onClick={this.handleToggle} src={this.props.item.path} alt={this.props.item.description}/>;
        }
    }

    render() {
        let item = this.props.item;
        return(
            <div>
                {this.handleDescription()}
                <button onClick={() => this.props.addLikes(item)}>I love it!</button>
                <p>{this.props.item.likes} people love this</p>
            </div>
        )
    }
}

export default GalleryItem;