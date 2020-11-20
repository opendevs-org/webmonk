import { Link } from 'react-router-dom'

//NOTE: first checking if props.dogs is an array in line 10, if so then loop on it and make components from each values in props.dogs array

const DogList = props => (
    <>
        <h1>Dog List</h1>
        <ul className="list-group">
            {
                Array.isArray(props.dogs)
                && props.dogs.map(({ name }, i) => (
                    <Link key={i} to={`/dog/${name}`}>
                        <li className="list-group-item">
                            { name }
                        </li>
                    </Link>
                ))
            }
        </ul>
    </>
);

export default DogList;
