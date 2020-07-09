import React from 'react';

import { Route, Switch, Redirect,BrowserRouter } from 'react-router-dom'

import { commonRoute } from "../routes/index.js";
import Container from '../components/container/index.tsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route render={(props:any) => {
          return (
            <Container>
              {
                commonRoute.map((comp: any) => {
                  return <Route exact={comp.exact} key={comp.path} component={comp.component} path={comp.path}  />
                })
              }
            </Container>
          )
        }}/>
        <Redirect to='/cms' from='/' />
        <Redirect to='/404' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
