import React, { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';

import routes from '../routes';

const App = () => {

    const dogs = [
        { name: 'bow wow' },
        { name: 'multer' },
        { name: 'brisk' }
    ]

    return (
        <div className="container p-5">
            <div className="row justify-content-sm-center">
                <div className="col-sm-5">
                    <Suspense fallback={<span>Loading....</span>}>
                        <Router>
                            <ol>
                                <NavLink to="/" className="breadcrumb-item" activeClassName="active">Home</NavLink>
                                <NavLink to="/dog/bow wow" className="breadcrumb-item" activeClassName="active">Top Dog</NavLink>
                            </ol>
                            <Switch>
                                {routes.map(({ path, Component }, i) => (
                                    <Route
                                        key={i}
                                        exact
                                        path={path}
                                        render={() =>  <Component dogs={dogs} />}
                                    />
                                ))}
                            </Switch>
                        </Router>
                    </Suspense>
                </div>
            </div>
        </div>
    );
}

export default App;
