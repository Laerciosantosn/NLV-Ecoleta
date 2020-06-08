import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import CreatePoint from '../pages/CreatePoint';
import Detail from '../pages/Detail';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={Dashboard} path="/" exact />
      <Route component={CreatePoint} path="/create-point" />
      <Route component={Detail} path="/detail" />
    </Switch>
  );
};

export default Routes;
