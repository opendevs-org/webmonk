import React, { useState } from 'react';
import axios from 'axios';

export default function CreateTodo({ history }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const completed = false;

  const onSubmit = e => {
    e.preventDefault();

    const newTodo = {
      title,
      description,
      priority,
      completed
    };

    axios
      .post('http://localhost:3030/api/todos/', newTodo)
      .then(res => console.log(res.data))
      .then(() => history.push('/'));
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Create Todo</h3>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>Title: </label>
          <input
            type='text'
            className='form-control'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Description: </label>
          <input
            type='text'
            className='form-control'
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Priority: </label> <br></br>
          <div className='form-check form-check-inline'>
            <input
              type='radio'
              className='form-check-input'
              name='priorityOptions'
              id='priorityLow'
              value='Low'
              checked={priority === 'Low'}
              onChange={e => setPriority(e.target.value)}
            />
            <label htmlFor='priorityLow' className='form-check-label'>
              Low
            </label>
          </div>
          <div className='form-check form-check-inline'>
            <input
              type='radio'
              className='form-check-input'
              name='priorityOptions'
              id='priorityMedium'
              value='Medium'
              checked={priority === 'Medium'}
              onChange={e => setPriority(e.target.value)}
            />
            <label htmlFor='priorityMedium' className='form-check-label'>
              Medium
            </label>
          </div>
          <div className='form-check form-check-inline'>
            <input
              type='radio'
              className='form-check-input'
              name='priorityOptions'
              id='priorityHigh'
              value='High'
              checked={priority === 'High'}
              onChange={e => setPriority(e.target.value)}
            />
            <label htmlFor='priorityHigh' className='form-check-label'>
              High
            </label>
          </div>
        </div>
        <div className='form-group'>
          <input
            type='submit'
            className='btn btn-primary'
            value='Create Todo'
          />
        </div>
      </form>
    </div>
  );
}
