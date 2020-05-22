import React from 'react';

import { Route, Switch, HashRouter, Redirect } from 'react-router-dom'

import { adminRoute, commonRoute } from "../routes/index";
import Container from '../components/container'

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/cms' render={(props) => {
            const { pathname } = props.location
            if(sessionStorage.getItem('token')){
              return (
                <Container>
                  <Switch>
                  {
                    adminRoute.map(comp => {
                      return <Route exact={comp.exact} key={comp.key || comp.path} component={comp.component} path={comp.path}  />
                    })
                  }
                  <Redirect to='/cms/home' from='/cms'/>
                  <Redirect to='/404' />
                  </Switch>
                </Container>
              )
            }else{
              return <Redirect to={
                {
                  pathname: '/login',
                  state: {
                    from: pathname
                  }
                }
              } />
            }
            
          }
        }></Route>
        {
          commonRoute.map(comp => {
            return <Route exact={comp.exact} key={comp.path} component={comp.component} path={comp.path}  />
          })
        }
        {/* <Redirect to='/cms' from='/' /> */}
        <Redirect to='/404' />
      </Switch>
    </HashRouter>
  );
}

export default App;
