import { SearchBox } from "../SearchBox/SearchBox";
import { Header, ToolButton, Container } from "./Toolsbar.styled";
import { ImPlus } from "react-icons/im";
import { BsTrash3 } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

export const Toolsbar = () => {
  return (
    <Header>
      <Container>
        <ToolButton type="button">
          <ImPlus color="#8a8a8a" size={16} />
        </ToolButton>
        <ToolButton type="button">
          <BsTrash3 color="#8a8a8a" size={16} />
        </ToolButton>
        <ToolButton type="button">
          <FiEdit color="#8a8a8a" size={16} />
        </ToolButton>
        <SearchBox />
      </Container>
    </Header>
  );
};
