import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Navbar } from '../components/Navbar/Navbar';
import { AccountSetting } from '../pages/AccountSettings/AccountSetting';
import { Home } from '../pages/Home/Home';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/firebase-config';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { login } from '../actions/auth';
import { CreateReview } from '../pages/CreateReview/CreateReview';
import { Reviews } from '../pages/Reviews/Reviews';

export const AppRouter = () => {

  const dispatch = useDispatch();

  const [cheking, setCheking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect( () => {
      firebase.auth().onAuthStateChanged( (user) => {
          if(user?.uid){
              dispatch( login(user.uid, user.displayName) );
              setIsLoggedIn(true);
          } else {
              setIsLoggedIn(false);
          }

          setCheking(false);
      })
  }, [dispatch, setCheking, setIsLoggedIn])

  if(cheking){
      return (
          <p>Espere...</p>
      )
  }

  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route path="/reseñas" component={Reviews} isAuthenticated={isLoggedIn}/>
          
          <PublicRoute path="/autenticacion" component={AuthRouter} isAuthenticated={isLoggedIn}/>
          <PrivateRoute path="/mi-cuenta" component={AccountSetting} isAuthenticated={isLoggedIn}/>
          <PrivateRoute path="/crear-reseña" component={CreateReview} isAuthenticated={isLoggedIn}/>
          
          <Route exact path="/" component={Home} isAuthenticated={isLoggedIn}/>
          <Redirect to="/"/>
        </Switch>
      </div>
    </Router>
  )
}
