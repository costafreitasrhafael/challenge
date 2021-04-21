import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Security/Login';
import Dashboard from './pages/Dashboard/List';

import Profession from './pages/Profession/List';
import NewProfession from './pages/Profession/Add';

import Professional from './pages/Professional/List';
import NewProfessional from './pages/Professional/Add';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/dashboard" component={ Dashboard } />

      <Route exact path="/professional" component={ Professional } />
      <Route exact path="/professional/add" component={ NewProfessional } />
      <Route exact path="/professional/add/:id" component={ NewProfessional } />

      <Route exact path="/profession" component={ Profession } />
      <Route exact path="/profession/add" component={ NewProfession } />
      <Route exact path="/profession/add/:id" component={ NewProfession } />
      
    </Switch>
  );
};

export default Routes;
