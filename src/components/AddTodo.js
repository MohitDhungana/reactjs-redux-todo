import React from 'react';

import { addTodo } from '../actions/actions';
import { connect } from 'react-redux';

const AddTodo = ({ dispatch }) => {
  const [input, setInput] = React.useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      console.log('empty');
    }
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={input} />
      <button>add</button>
    </form>
  );
};

export default connect()(AddTodo);
