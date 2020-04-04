import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {


    render() {
        return (
            <>
                {this.props.list.map((item) => {
                    return <GalleryItem 
                            item={item}
                            key={item.id}
                            addLikes={this.props.addLikes}/>
                })
                }
            </>
        )
    }
}

export default GalleryList;