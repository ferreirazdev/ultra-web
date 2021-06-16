import React from 'react';
import GlobalStyles from './GlobalStyles';
import { Navbar, Footer } from './components';
import Home from './pages/Homepage/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
