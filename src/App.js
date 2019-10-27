import React, { Component } from 'react';
import './App.module.scss';
import Layout from './components/layout/layout';
import BurguerBuilder from '../src/containers/BurguerBuilder/BurguerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurguerBuilder></BurguerBuilder>
        </Layout>
      </div>
    );
  }
}

export default App;
