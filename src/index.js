import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/Header';
import './index.css';


const App = () => {
  const appTitle = 'React Crypto Currencies';

  return (
    <div>
      <Header />
      <h1>{appTitle}</h1>
      <p>Best Crypto Currencies App with all up to date Info</p>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
