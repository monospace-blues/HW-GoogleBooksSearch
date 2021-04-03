import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import CSS file (will need to change it for future references...)
import  "./App.css";

// import Components
import Nav from './components/Nav';
import Header from './components/Header'
// import Pages
import Search from './pages/Search';
import Saved from './pages/Saved';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Header/>
        {/* for now line breaks for separating boxes */}
        <br/>
        <br/>
        <br/>
        <Route exact path='/' component={Search}/>
        <Route exact path='/saved' component={Saved}/>
      </div>
    </Router>
  );
}

export default App;
