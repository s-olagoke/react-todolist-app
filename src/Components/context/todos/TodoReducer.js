import { DELETE_TODO, MARK_COMPLETE, ADD_TODO } from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: action.payload,
      };

    case MARK_COMPLETE:
      return {
        ...state,
        todos: action.payload,
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: action.payload,
      };

    default:
      return state;
  }
};
