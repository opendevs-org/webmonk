import { lazy } from 'react';

const DogList = lazy(() => import('./components/pages/DogList'));
const SingleDog = lazy(() => import('./components/pages/SingleDog'));

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
