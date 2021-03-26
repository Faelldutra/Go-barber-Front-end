import React from 'react';
import { Route, Switch } from 'react-router-dom'
import login from '../pages/SingIn/index'
import register from '../pages/SingUp/index'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={login} />
      <Route path="/register" exact component={register} />
    </Switch>
  );
}

export default Routes;