import { v4 as uuid } from 'uuid';

const initialState = [
  {
    id: uuid(),
    text: 'this is the first todo',
    completed: false,
  },
  {
    id: uuid(),
    text: 'second todo',
    completed: true,
  },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;
