/*global chrome*/
import React, { Component } from 'react';

import AddBtn from './components/AddBtn';
import SearchBar from './components/SearchBar';
import ListItem from './components/ListItem';
import Alert from './components/Alert';
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
      chrome.storage.sync.get(['linksList'], () => console.log(`List is set`));
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
    const newList = this.state.links.filter(el => el.title !== title);
    this.setState({
      links: newList
    });
    this.setLinksList(newList);
  }

  onLinkClicked = url => {
    chrome.tabs.create({ url: url });
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
                  <ListItem
                    url={item.url}
                    title={item.title}
                    icon={item.icon}
                    deleteItem={this.onDeleteLink}
                    clickLink={this.onLinkClicked}
                  />
                )) : <Alert />}
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
