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
      searchVal: '',
      links: []
    };
  }

  componentDidMount() {
    chrome.storage.sync.get(['linksList'], result => {

      if ('linksList' in result) {
        this.setState({ links: result.linksList });
      }
    })
  }

  onSearchInputChange = e => {
    this.setState({ searchVal: e.target.value });
    console.log(this.state.searchVal);
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
        const newLinks = [link, ...this.state.links];

        this.setState({
          links: newLinks,
        });

        this.setLinksList(this.state.links);
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
    let filteredList = [];
    let emptyFlag = false;

    // Set flag to check if links in storage is empty
    if (this.state.links === undefined || this.state.links.length === 0) {
      emptyFlag = true;
    }

    // Filter list based on search value
    if (this.state.searchVal !== '') {
      filteredList = this.state.links.filter(link => {
        return link.title.toLowerCase().includes(this.state.searchVal.toLowerCase());
      });
    } else {
      filteredList = this.state.links;
    }
    
    return (
      <div>
        <main role="main" className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="m-2">Tab Saver</h3>
              <AddBtn addItem={this.onAddLinkToUI}/>
              <SearchBar value={this.state.searchVal} onChangeValue={this.onSearchInputChange} />

              <ul className="list-group list-group-flush">
                {!(filteredList === undefined || filteredList.length === 0) ? filteredList.map(item => (
                  <ListItem
                    url={item.url}
                    title={item.title}
                    icon={item.icon}
                    deleteItem={this.onDeleteLink}
                    clickLink={this.onLinkClicked}
                  />
                )) : <Alert flag={emptyFlag}/>}
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
