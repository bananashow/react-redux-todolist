import React, { useState } from "react";
import * as S from "./style";
import { InputContainer } from "./components/InputContainer";
import { TodoItems } from "./components/TodoItems";
import { AllDeleteButton } from "./components/AllDeleteButton";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.operationsReducer);
  const [editFormVisibility, setEditFormVisibility] = useState(false);
  const [editTodo, setEditTodo] = useState("");

  const handleEditClick = (todo) => {
    setEditFormVisibility(true);
    setEditTodo(todo);
  };

  return (
    <>
      <S.Container>
        <h1>Todo-List</h1>
        <S.InputContainer>
          <InputContainer
            editFormVisibility={editFormVisibility}
            setEditFormVisibility={setEditFormVisibility}
            editTodo={editTodo}
          />
        </S.InputContainer>
        <S.ListContainer>
          <TodoItems
            editFormVisibility={editFormVisibility}
            handleEditClick={handleEditClick}
          />
        </S.ListContainer>
        {todos.length > 1 && <AllDeleteButton />}
      </S.Container>
    </>
  );
}

export default App;
