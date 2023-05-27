export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const DELETE_ALL = "DELETE_ALL";
export const UPDATE_TODO = "UPDATE_TODO";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const completeTodo = (payload) => {
  return {
    type: COMPLETE_TODO,
    payload,
  };
};

export const deleteAll = () => {
  return {
    type: DELETE_ALL,
  };
};

export const updateTodo = (payload) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};
