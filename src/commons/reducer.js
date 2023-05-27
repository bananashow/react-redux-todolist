import { combineReducers } from "redux";

let initialState = [];

export const operationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    case "DELETE_TODO":
      return state.filter((item) => item.id !== action.payload);

    case "COMPLETE_TODO":
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            isComplete: !item.isComplete,
          };
        }
        return item;
      });

    case "DELETE_ALL":
      return [];

    case "UPDATE_TODO":
      return state.map((item) => {
        if (item.id === action.payload.id) {
          item.todo = action.payload.todo;
          item.isComplete = action.payload.isComplete;
        }
        return item;
      });

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  operationsReducer,
  //여러 리듀서를 결합한다.
  //더 많은 리듀서를 추가할 수 있다.
});
