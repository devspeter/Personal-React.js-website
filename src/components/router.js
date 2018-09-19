import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';


// App components
import Header from './header';
import Home from './home';
import About from './about';
import Learn from './Learn/learn';
import Portfolio from './portfolio';
import NotFound from './notfound';
import Contact from './contact';
import Footer from './footer';


const App = () => (
  <BrowserRouter>
    <div className="">
      <Header />
    
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/learn" component={Learn} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About}  />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>

      <Footer />
    </div>
  </BrowserRouter>
);



export default App;
