import React from 'react';
import App from './components/App';
import CreateEvent from './components/CreateEvent';
import EventDetails from './components/EventDetails';
import UserDetails from './components/UserDetails';
import Index from './components/Index';
import PartyParrot from './components/PartyParrot';
import { Route, IndexRoute } from 'react-router';
import { LogoutRoute, AuthenticatedRoute } from 'react-stormpath';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <AuthenticatedRoute>
      <LogoutRoute path="/logout" />
      <Route path ="/create" component={CreateEvent} />
      <Route path ="/eventDetails" component={EventDetails} />
      <Route path ="/profile" component={UserDetails} />
      <Route path ="/partyMode" component={PartyParrot} />
    </AuthenticatedRoute>
  </Route>
);