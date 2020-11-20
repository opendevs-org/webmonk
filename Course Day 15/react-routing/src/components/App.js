import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';

import routes from '../routes';

const App = () => {

    const dogs = [
        { name: 'bow wow' },
        { name: 'multer' },
        { name: 'brisk' }
    ]

    //NOTE: notice we are using component in line 35, see the same line in lazy loading, when not loading dynamically we can use component, when loading dynamically
    // where code is not available at start render is used.

    return (
        <div className="container p-5">
            <div className="row justify-content-sm-center">
                <div className="col-sm-5">
                    <Router>
                        <ol>
                            <NavLink to="/" className="breadcrumb-item" activeClassName="active">Home</NavLink>
                            <NavLink to="/dog/bow wow" className="breadcrumb-item" activeClassName="active">Top Dog</NavLink>
                        </ol>
                        {routes.map(({ path, Component }, i) => (
                            <Route
                                key={i}
                                exact
                                path={path}
                                component={() => <Component dogs={dogs} />}
                            />
                        ))}
                    </Router>
                </div>
            </div>
        </div>
    );
}

export default App;
