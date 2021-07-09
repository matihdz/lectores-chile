import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { Login } from '../pages/Login/Login';
import { Register } from '../pages/Register/Register';

export const AuthRouter = () => {
  return (
    <div>
      <Switch>
        <Route path="/autenticacion/iniciar-sesion" component={Login}/>
        <Route path="/autenticacion/registro" component={Register}/>

        <Redirect to="/autenticacion/iniciar-sesion"/>
      </Switch>
    </div>
  )
}
