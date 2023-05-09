import { ListItem } from "../ListItem/ListItem";
import { NotesListContainer, List } from "./Sidebar.styled";

export const Sidebar = ({ list, getId, shouldBtnDisabled, onItemClick }) => {
  return (
    <NotesListContainer>
      <List>
        <ListItem list={list} getId={getId} shouldBtnDisabled={shouldBtnDisabled} onItemClick={onItemClick} />
      </List>
    </NotesListContainer>
  );
};
