import React from 'react';
import { Route, Switch } from 'react-router-dom';

//components
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';

const App = () => 
{
  return (
    <div>
      <Header/>
      <Nav/>
      <Switch>
        <Route exact path={'/'} render={() => <Home/>}/>
        <Route exact path={'/projects'} render={() => <Projects/>}/>
      </Switch>
    </div>
  );
}

export default App;
