import styled from "styled-components";

const color_beige = "#F5E9CF";
const color_teal = "#7DB9B6";
const color_teal_hover = "#5C8984";
const color_red = "#FD8A8A";
const color_red_hover = "#E96479";
const color_purple = "#7F5283";
const color_purple_hover = "#15133C";

export const Container = styled.div`
  width: 500px;
  height: 600px;
  background-color: ${color_beige};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.div`
  width: 450px;
  height: 60px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ListContainer = styled.div`
  width: 450px;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Item = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;

  & > input {
    background-color: ${color_beige};
    border: none;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }

  & span {
    cursor: pointer;
    margin-top: 10px;
  }
`;

export const DeleteAllButton = styled.button`
  width: 100%;
  background-color: ${color_red};
  color: white;
  border: none;
  height: 100px;
  cursor: pointer;
  font-size: 20px;
  &:hover,
  &:focus {
    background-color: ${color_red_hover};
  }
`;

export const TodoInputText = styled.input`
  width: 60%;
  height: 30px;
  border-radius: 5px;
  border: 2px solid white;
`;
export const AddButton = styled.button`
  width: 30%;
  height: 35px;
  margin-left: 5px;
  border: none;
  background-color: ${color_teal};
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${color_teal_hover};
    transition: 0.4s;
  }
`;

export const UpdateDeleteButton = styled(AddButton)`
  width: 15%;

  &:first-of-type {
    background-color: ${color_purple};
  }
  &:first-of-type:hover {
    background-color: ${color_purple_hover};
    transition: 0.4s;
  }
`;
