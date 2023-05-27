import { useDispatch, useSelector } from "react-redux";
import * as S from "../style";
import { completeTodo, deleteTodo } from "../commons/action";

export const TodoItems = ({ editFormVisibility, handleEditClick }) => {
  const todos = useSelector((state) => state.operationsReducer);
  const dispatch = useDispatch();

  const deleteOnClick = (id) => {
    dispatch(deleteTodo(id));
  };

  const inputOnClick = (id) => {
    dispatch(completeTodo(id));
  };

  return (
    <>
      <S.ItemContainer>
        {todos.map((todo) => {
          return (
            <S.Item key={todo.id}>
              <input
                style={
                  todo.isComplete
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "none" }
                }
                type="text"
                value={todo.todo}
                onClick={() => inputOnClick(todo.id)}
                readOnly
              />
              <div>
                {editFormVisibility === false && (
                  <span
                    className="material-symbols-outlined"
                    onClick={() => handleEditClick(todo)}
                  >
                    edit
                  </span>
                )}
                <span
                  onClick={() => deleteOnClick(todo.id)}
                  className="material-symbols-outlined"
                >
                  delete
                </span>
              </div>
            </S.Item>
          );
        })}
      </S.ItemContainer>
    </>
  );
};
