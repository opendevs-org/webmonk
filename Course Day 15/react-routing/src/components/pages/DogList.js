import { Link } from 'react-router-dom'

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
