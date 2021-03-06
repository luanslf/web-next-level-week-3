import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import OrphanageMap from './pages/OrphanageMap';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/orphanage" component={OrphanageMap} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
