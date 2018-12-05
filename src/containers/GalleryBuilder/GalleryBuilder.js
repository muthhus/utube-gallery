import React, { Component } from 'react';
import axios from 'axios';

import Aux from '../../hoc/Aux';
import Gallery from '../../components/Gallery/Gallery';

class GalleryBuilder extends Component {

    state = {
        uTubeGalleries: [],
        selectedGalleryId: null
      }

      componentDidMount(){
          axios.get('https://jsonplaceholder.typicode.com/posts')
            .then( response => {
                const uTubeGalleries = response.data.slice(0, 10);
                const updateduTubeGalleries = uTubeGalleries.map(uTubeGallery => {
                    return {
                        ...uTubeGallery,
                        author: "Shanmuga S Muthu"
                    }
                });
                this.setState({uTubeGalleries: updateduTubeGalleries})
            });
      }


      gallerySelectedHandler = (id) => {
        this.setState({selectedGalleryId: id});
    }

      render() {        
        const uTubeGalleries = this.state.uTubeGalleries.map((gallery, index) => {
            return <Gallery 
                title={gallery.title}
                description={gallery.body}
                rating={gallery.id}
                key={gallery.index}
                clicked={() => this.gallerySelectedHandler(gallery.id)} />;
        });
    
          return (
            <Aux>
                <section>
                    {uTubeGalleries}
                </section>
            </Aux>
          );
      }

}

export default GalleryBuilder;