import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Components
import Home from './Component/Home/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { }

  render() {
    return (
      <Router>
        <div className="app">
          <Home/>
          <ToastContainer />
        </div>
      </Router>
    );
  }
}

export default App;