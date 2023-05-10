import { ListItem } from "../ListItem/ListItem";
import { NotesListContainer, List, NoResult } from "./Sidebar.styled";

export const Sidebar = ({ list, getId, shouldBtnDisabled, onItemClick }) => {
  return (
    <NotesListContainer>
      <List>
        {list.length === 0 && <NoResult>No results ¯\_(ツ)_/¯</NoResult>}
        <ListItem list={list} getId={getId} shouldBtnDisabled={shouldBtnDisabled} onItemClick={onItemClick} />
      </List>
    </NotesListContainer>
  );
};
