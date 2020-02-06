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

  componentDidMount() {
    chrome.storage.sync.get(['linksList'], result => {
      console.log(result.linksList);

      if ('linksList' in result) {
        this.setState({ links: result.linksList });
      }
    })
  }

  setLinksList = (list) => {
    chrome.storage.sync.set({ linksList: list }, () => {
      chrome.storage.sync.get(['linksList'], result => console.log(`List ${list} is set`));
    });
  }

  onAddLinkToUI = () => {
    chrome.tabs.query({'active': true, 'currentWindow': true}, (tabs) => {
      const tab = tabs[0];

      const link = {
        url: tab.url,
        title: tab.title,
        icon: tab.favIconUrl
      }

      if (!this.state.links.some(currLink => currLink.title === link.title)) {
        const newLinks = [...this.state.links, link];

        this.setState({
          links: newLinks,
        });

        this.setLinksList(this.state.links);

        console.log('Successfully add link');
      } else {
        alert('Link is already in the list');
      }
    });
  }

  onDeleteLink = title => {
    this.setState(prevState => ({
      links: prevState.links.filter(el => el.title !== title)
    }));
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
                {!(this.state.links === undefined || this.state.links.length === 0) ? this.state.links.map(item => (
                  <ListItem url={item.url} title={item.title} icon={item.icon} deleteItem={this.onDeleteLink}/>
                )) : <li>List is empty</li>}
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
