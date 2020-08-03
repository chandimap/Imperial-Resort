import React from 'react';

import {Route,
  Switch
  } from 'react-router-dom'
 
import NavBar from './components/Global/Navbar';
import Footer from './components/Global/Footer';
import Home from './components/Home/Home';
import RoomsContainer  from './components/Rooms/RoomsContainer';
import SingleRoom from './components/Rooms/SingleRoom';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <>
    <NavBar/>
    <Switch>
  <Route exact path='/' component={Home}/> 
  <Route exact path='/rooms/' component={RoomsContainer }/> 
  <Route exact path='/rooms/:id' component={SingleRoom}/> 
  <Route   component={ErrorPage }/> 
    </Switch>
  <Footer/>
    </>
  );
}

export default App;
