import '../public/style.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import Fade from './components/Fade';
import Flip from './components/Flip';
import Welcome from './components/Welcome';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Welcome />
        <Fade />
        <Flip />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

export default App;
