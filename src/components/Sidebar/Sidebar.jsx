import { ListItem } from "../ListItem/ListItem";
import { NotesListContainer, List } from "./Sidebar.styled";

export const Sidebar = ({ list, getId, shouldBtnDisabled }) => {
  return (
    <NotesListContainer>
      <List>
        <ListItem list={list} getId={getId} shouldBtnDisabled={shouldBtnDisabled} />
      </List>
    </NotesListContainer>
  );
};
