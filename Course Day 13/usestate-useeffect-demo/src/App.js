import { useState, useEffect } from 'react';

const App = () => {

  const [counter, setCounter] = useState(0);
  const [showChild, setShowChild] = useState(true);

  useEffect(() => {
    console.log(`SOMETHING HERE 1`);
  });

  useEffect(() => {
    console.log(`SOMETHING HERE 2`);
  }, [counter]);

  useEffect(() => {
    console.log(`SOMETHING HERE 3`);
  }, []);

  return (
    <div>
      <h1>Hi there! {  counter }</h1>
      <button onClick={() => setCounter(counter + 1)}>INCREMENT</button>
      <button onClick={() => setCounter(counter - 1)}>DECREMENT</button>
      <button onClick={() => setShowChild(!showChild)}>CHILD</button>
      <p>{ true ? 'Hey there': 'not' }</p>
    </div>
  );
}

export default App;
