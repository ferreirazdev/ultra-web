import React from 'react';
import GlobalStyles from './GlobalStyles';
import { Navbar } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
    </Router>
  );
}

export default App;
