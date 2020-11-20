import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

const SingleDog = ({ dogs, match, history }) => {
    const [dog, setDog] = useState();
    
    useEffect(() => {        
        const { name } = match.params; //NOTE: getting name parameter from route, for ex: /dog/husky has husky as parameter
        const foundDog = dogs.filter(dog => name === dog.name);
    
        if (!foundDog.length)
            history.push('/');
    
        setDog(foundDog[0]);
    }, [dog, history, setDog, match, dogs])

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">
                    Hi my name is, { dog && dog.name }
                </h5>
            </div>
        </div>
    )
};

export default withRouter(SingleDog);
