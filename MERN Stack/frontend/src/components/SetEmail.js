import React, { useState } from 'react';
import axios from 'axios';

export default function SetEmail({ history }) {
  const [email, setEmail] = useState('');

  //NOTE: try to fetch email using useEffect, you'll have to create a API for that

  const onSubmit = e => {
    e.preventDefault();

    const newEmail = {
      email,
    };

    axios
      .post('http://localhost:3030/api/save-email/', newEmail)
      .then(res => console.log(res.data))
      .then(() => history.push('/'));
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Set Email</h3>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>Email: </label>
          <input
            type='text'
            className='form-control'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <input
            type='submit'
            className='btn btn-primary'
            value='Set Email'
          />
        </div>
      </form>
    </div>
  );
}
