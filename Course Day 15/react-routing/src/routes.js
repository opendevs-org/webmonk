import DogList from './components/pages/DogList';
import SingleDog from './components/pages/SingleDog';

//NOTE: contains all the routes & notice the imports are normal import statement which fetch the code as soon as import called.

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
