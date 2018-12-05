import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import GalleryBuilder from './containers/GalleryBuilder/GalleryBuilder';
import './App.css';

class App extends Component {

  navLinks = ["About Us", "Videos", "Local News", "Contact Us"];

  componentDidMount = () => {
    document.title = "Youtube Gallery";
  }
  render() {
    return (
      <div>
        <Layout navs={this.navLinks} >
          <GalleryBuilder />
        </Layout>
      </div>
    );
  }


}

export default App;
