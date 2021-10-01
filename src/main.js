import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import LoadingScreen from './screens/loading.screen.js';
import NotFoundScreen from './screens/404.screen.js'
import Screen from './components/screen';
// import Cookies from 'universal-cookie';
import {ROUTES} from'./constants/routes/main.route'
import useJedis from "jedisdb";

function Main() {
  return (
    <Suspense fallback={<LoadingScreen />}>
        <main>
            <Switch>
            {
                ROUTES.map((route, index) => (
                    <Route
                    exact={route.exact === undefined ? true : route.exact}
                    path={route.path}
                    component={(props) => <Screen title={route.title} screen={route.screen}  {...props} />}
                    key={index.toString()}
                    />
                ))
            }
            <Route component={NotFoundScreen} />
            </Switch>
        </main>
    </Suspense>
  );
}
export default Main;
