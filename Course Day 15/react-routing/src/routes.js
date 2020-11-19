import DogList from './components/pages/DogList';
import SingleDog from './components/pages/SingleDog';

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
