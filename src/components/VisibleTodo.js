import React from 'react';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';
import { toggleTodo } from '../actions/actions';
import { VisibilityFilters } from '../actions/actions';

const VisibleTodo = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
      ))}
    </ul>
  );
};

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;

    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t) => t.completed);

    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);

    default:
      console.log('error');
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});
const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VisibleTodo);
