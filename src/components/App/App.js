import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';


class App extends Component {
  //Set state
  state = {
    galleryItems: []
  }
  //Happens on page load
  componentDidMount() {
    this.getItems();
  }

  getItems = () => {
    //GET request to get all gallery items
    axios.get('/gallery')
      .then((response) => {
        console.log(response.data);
        //Setting state with new array to make sure
        // we have all gallery items
        this.setState({
          galleryItems: response.data,
        })
      }).catch((error) => {
        alert('Oh nos! We could not get the gallery');
        console.log('Error on GET gallery items', error);
      })
  }
  //Function to update likes count
  addLikes = (item) => {
    console.log('In addLikes', item);
    //PUT request
    axios.put(`/gallery/like/${item.id}`)
      .then( response => {
        //Re-render the gallery
        this.getItems()
      })
      .catch( error => {
        alert(`Oh nos! We couldn't add your like. Try again later`);
        console.log('Error updating likes count', error);
      })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>Enjoy the Exhibit</p>
        <GalleryList 
        list={this.state.galleryItems}
        addLikes={this.addLikes}/>
      </div>
    );
  }
}

export default App;
