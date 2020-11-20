import { lazy } from 'react';

const DogList = lazy(() => import('./components/pages/DogList'));
const SingleDog = lazy(() => import('./components/pages/SingleDog'));

//NOTE: contains all the routes & notice the imports are not normal import statement we are fetching component using React.lazy or lazy making it available only when needed.

const routeList = [
    {
        path: '/',
        Component: DogList
    }, 
    {
        path: '/dog/:name',
        Component: SingleDog
    }
]

export default routeList;
