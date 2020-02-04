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
      links: []
    };
  }

  onAddLinkToUI = () => {
    chrome.tabs.query({'active': true, 'currentWindow': true}, (tabs) => {
      const tab = tabs[0];

      const link = {
        url: tab.url,
        title: tab.title,
        icon: tab.favIconUrl
      }

      const newLinks = [...this.state.links, link];

      this.setState({
        links: newLinks,
      });

      console.log('Successfully add link');
    });
  }

  render() {
    return (
      <div>
        <main role="main" className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="m-2">Tab Saver</h3>
              <AddBtn addItem={this.onAddLinkToUI}/>
              <SearchBar />

              <ul className="list-group list-group-flush">
                {this.state.links.map(item => (
                  <ListItem url={item.url} title={item.title} icon={item.icon} />
                ))}
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
