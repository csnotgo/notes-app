import { SearchBox } from "../SearchBox/SearchBox";
import { Header, ToolButton, Container } from "./Toolsbar.styled";
import { ImPlus } from "react-icons/im";
import { BsTrash3 } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

export const Toolsbar = ({ active, addNote, deleteNote, updateNote }) => {
  return (
    <Header>
      <Container>
        <ToolButton type="button" onClick={addNote}>
          <ImPlus color="#8a8a8a" size={16} />
        </ToolButton>
        <ToolButton type="button" disabled={active} onClick={deleteNote}>
          <BsTrash3 color="#8a8a8a" size={16} />
        </ToolButton>
        <ToolButton type="button" disabled={active} onClick={updateNote}>
          <FiEdit color="#8a8a8a" size={16} />
        </ToolButton>
        <SearchBox />
      </Container>
    </Header>
  );
};
