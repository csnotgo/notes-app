import { ListItem } from "../ListItem/ListItem";
import { NotesListContainer, List } from "./Sidebar.styled";

export const Sidebar = ({ list }) => {
  return (
    <NotesListContainer>
      <List>
        <ListItem list={list} />
      </List>
    </NotesListContainer>
  );
};
