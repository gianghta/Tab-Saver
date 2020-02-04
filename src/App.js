/*global chrome*/
import React, { Component } from 'react';

import AddBtn from './components/AddBtn';
import SearchBar from './components/SearchBar';
import ListItem from './components/ListItem';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  addLinkToUI() {
    chrome.tabs.query({'active': true, 'currentWindow': true}, function(tabs) {
      const tab = tabs[0];

      this.setState({});

      console.log('Successfully add link');
    });
  }

  render() {
    return (
      <div>
        <main role="main" class="container">
          <div className="row">
            <div className="col-12">
              <h3 className="m-2">Tab Saver</h3>
              <AddBtn />
              <SearchBar />

              <ul className="list-group list-group-flush">
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
              </ul>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    );
  }
}

export default App;
