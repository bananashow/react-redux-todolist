import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../commons/action";
import { AddButton, TodoInputText, UpdateDeleteButton } from "../style";

export const InputContainer = ({
  editFormVisibility,
  setEditFormVisibility,
  editTodo,
}) => {
  const [inputText, setInputText] = useState("");
  const [todoId, setTodoId] = useState(0);
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    setEditValue(editTodo.todo);
  }, [editTodo]);

  const dispatch = useDispatch();

  const inputTextChange = (e) => {
    setInputText(e.target.value);
  };

  const AddOnClick = () => {
    if (!inputText) return;
    let todoObj = {
      id: todoId,
      todo: inputText,
      isComplete: false,
    };

    setTodoId(todoId + 1);
    dispatch(addTodo(todoObj));
    setInputText("");
  };

  const AddOnKeyDown = (e) => {
    if (e.keyCode === 13) {
      AddOnClick();
    }
  };

  const cancelUpdate = () => {
    setEditFormVisibility(false);
  };

  const updateOnClick = () => {
    let editObj = {
      id: editTodo.id,
      todo: editValue,
      isComplete: false,
    };
    dispatch(updateTodo(editObj));
    setEditFormVisibility(false);
  };

  return (
    <>
      {editFormVisibility === false ? (
        <>
          <TodoInputText
            type="text"
            placeholder="할 일을 입력하세요"
            onChange={inputTextChange}
            onKeyDown={AddOnKeyDown}
            value={inputText}
          />
          <AddButton onClick={AddOnClick}>ADD</AddButton>
        </>
      ) : (
        <>
          <TodoInputText
            type="text"
            placeholder="수정해 주세요"
            value={editValue || ""}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <UpdateDeleteButton onClick={updateOnClick}>
            UPDATE
          </UpdateDeleteButton>
          <UpdateDeleteButton onClick={cancelUpdate}>BACK</UpdateDeleteButton>
        </>
      )}
    </>
  );
};
