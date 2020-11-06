import '../public/style.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import Fade from './components/Fade';
import Flip from './components/Flip';
import Welcome from './components/Welcome';
import Zoom from './components/Zoom';
import Slide from './components/Slide';
import Specifications from './components/Specifications';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Welcome />
        <Fade />
        <Flip />
        <Slide />
        <Zoom />
        <Specifications />
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

document.addEventListener('aos:in', ({ detail }) => {
  console.log('animated in', detail);
});

document.addEventListener('aos:out', ({ detail }) => {
  console.log('animated out', detail);
});

document.addEventListener('aos:in:fade-img', ({ detail }) => {
  console.log('THE IMAGE HAVE ARRIVED');
});

export default App;
