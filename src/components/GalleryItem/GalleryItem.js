import React, { Component } from 'react';

class GalleryItem extends Component {

    //Set state for our description
    state = {
        showDescription: false,
    }
    //Function that changes our state when an image is clicked
    handleToggle = () => {
        console.log('in handleToggle');
        //setState to change showDescription
        this.setState({
            showDescription: !this.state.showDescription,
        });
    }
    //Function that renders elements based on showDescription state
    handleDescription = () => {
        console.log('In handleDescription');
        //conditional statement based on true/false of showDescription
        if(this.state.showDescription) {
            //false, render description
            return <p onClick={this.handleToggle}>{this.props.item.description}</p>;
        } else {
            //true, render image
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