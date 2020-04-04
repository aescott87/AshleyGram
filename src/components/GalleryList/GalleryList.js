import React, { Component } from 'react';

class GalleryList extends Component {


    render() {
        return(
            <>
            {this.props.list.map((item) => {
                return <img key={item.id} src={item.path} alt={item.description}/>
                })
            }
            </>
        )
    }
}

export default GalleryList;