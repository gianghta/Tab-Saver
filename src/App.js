import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <main role="main" class="container">
          <div className="row">
            <div className="col-12">
              <h3 className="m-2">Tab Saver</h3>
              <button type="button" className="btn btn-primary btn-lg m-2 mb-3">Add</button>

              <form className="m-2">
                <div className="form-group">
                  <input type="search" className="form-control" id="search-link" aria-describedby="emailHelp" placeholder="Search..." />
                  <small id="searchHelp" className="form-text text-muted">Type in link to search</small>
                </div>
              </form>

              <ul className="list-group list-group-flush">
                <a href="/#" className="list-group-item list-group-item-action d-flex flex-row align-items-center">
                  <i className="m-2 far fa-bell fa-lg"></i>
                  <div className="m-2 flex-column">
                    <div>Test 1</div>
                    <div className="badge badge-info badge-pill">Test annotation</div>
                  </div>
                  <div className="ml-auto">
                    <i className="far fa-trash-alt fa-lg"></i>
                  </div>
                </a>
                <a href="/#" className="list-group-item list-group-item-action d-flex flex-row align-items-center">
                  <i className="m-2 far fa-bell fa-lg"></i>
                  <div className="m-2 flex-column">
                    <div>Test 1</div>
                    <div className="badge badge-info badge-pill">Test annotation</div>
                  </div>
                  <div className="ml-auto">
                    <i className="far fa-trash-alt fa-lg"></i>
                  </div>
                </a>
                <a href="/#" className="list-group-item list-group-item-action d-flex flex-row align-items-center">
                  <i className="m-2 far fa-bell fa-lg"></i>
                  <div className="m-2 flex-column">
                    <div>Test 1</div>
                    <div className="badge badge-info badge-pill">Test annotation</div>
                  </div>
                  <div className="ml-auto">
                    <i className="far fa-trash-alt fa-lg"></i>
                  </div>
                </a>
                <a href="/#" className="list-group-item list-group-item-action d-flex flex-row align-items-center">
                  <i className="m-2 far fa-bell fa-lg"></i>
                  <div className="m-2 flex-column">
                    <div>Test 1</div>
                    <div className="badge badge-info badge-pill">Test annotation</div>
                  </div>
                  <div className="ml-auto">
                    <i className="far fa-trash-alt fa-lg"></i>
                  </div>
                </a>
              </ul>
            </div>
          </div>
          <footer id="sticky-footer" class="footer py-4">
            <div class="container text-center">
              <small>Copyright &copy; Your Website</small>
            </div>
          </footer>
        </main>
      </div>
    );
  }
}

export default App;
