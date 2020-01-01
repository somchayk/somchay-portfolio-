import React from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import Project from './components/shared/Project';
import Contact from './components/shared/Contact';
import Blog from './components/blog/Blog';
import './App.css';







const App = () =>
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/project' component={Project} />
        <Route exact path='/blog' component={Blog} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>

export default App;
