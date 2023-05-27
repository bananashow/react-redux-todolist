import { useDispatch } from "react-redux";
import { DeleteAllButton } from "../style";
import { deleteAll } from "../commons/action";

export const AllDeleteButton = () => {
  const dispatch = useDispatch();
  const deleteAllOnClick = () => {
    dispatch(deleteAll());
  };

  return (
    <DeleteAllButton onClick={deleteAllOnClick}>DELETE ALL</DeleteAllButton>
  );
};
