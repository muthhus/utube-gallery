import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import GalleryBuilder from './containers/GalleryBuilder/GalleryBuilder';

import './App.css';

class App extends Component {
  componentDidMount = () => {
    document.title = "Youtube Gallery";
  }
  render() {
    return (
      <div>
        <Layout>
          <GalleryBuilder />
        </Layout>
      </div>
    );
  }


}

export default App;
