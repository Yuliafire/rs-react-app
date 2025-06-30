import './App.css';
import React from 'react';
import Header from '../src/components/layout/Header/Header';
import Footer from '../src/components/layout/Footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
