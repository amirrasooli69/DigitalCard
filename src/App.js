
import React, { Component } from 'react';
import Navbar from './components/Navbar'
import './index.css';
import Banner from './components/Banner';
import Cards from './components/Cards';
import Search from './components/Search';
import Logos from './components/Logos';
import Footer from './components/Footer';
import DigitalCard from './components/BuildCard';

class App extends Component {
  render() {
    return (
      <div>
        <DigitalCard />
        <Navbar />
        <Banner />
        <Cards />
        <Search />
        <Logos />
        <Footer />
      </div>
    );
  }
}

export default App;
