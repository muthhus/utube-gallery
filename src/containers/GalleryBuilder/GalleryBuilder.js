import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Gallery from '../../components/Gallery/Gallery';

class GalleryBuilder extends Component {

    state = {

        galleries: [
          {title: "2.0", description: "This movie is directed by Shankar and Acted by Superstar Rajini", rating: 4},
          {title: "Kana", description: "The movie about Ladies crickets" , rating: 2 },
          {title: "Sarkar", description: "This movie about public elections and running task", rating: 4.5 },
          {title: "Vishwasham", description: "Teh Family Entainer", rating: 4.5 },
          {title: "Veera Pandiya Kattabomman", description: "Nellai Vendhar Veera Pandiya Kattabomman", rating: 5 }
        ],
        showGalleries: true
      }
    
      galleryDetails = ( galleryIndex) => {
        const currentGallery = {
          ...this.state.galleries[galleryIndex]
        };
        
        console.log("currentGallery >>>" + currentGallery.title);
      }
    
      customerReview = (event, index) => {
        const currentGallery = {
          ...this.state.galleries[index]
        };
    
        currentGallery.rating = event.target.value;
    
        const galleries = [...this.state.galleries];
        galleries[index] = currentGallery;
    
        this.setState( {galleries : galleries} );
    
      }

      render() {
        let galleries = null;

        if ( this.state.showGalleries ) {
          galleries = (
            <div>
              {this.state.galleries.map((gallery, index) => {
                return <Gallery 
                getTitle={() => this.galleryDetails(index)}
                title = {gallery.title}
                description = {gallery.description}
                rating = {gallery.rating}
                key = {index} 
                review = { (event) => this.customerReview(event, index) }
                />
              })}
            </div>
          );
        }
    
          return (
            <Aux>
                {galleries}
                <div>Gallery Browser</div>
            </Aux>
          );
      }

}

export default GalleryBuilder;