import React from 'react';
import GlobalStyles from './GlobalStyles';
import { Navbar, Footer } from './components';
import Home from './pages/Homepage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import ScrollToTop from './components/ScrollTop';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/products' exact component={Products} />
        <Route path='/sign-up' exact component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
