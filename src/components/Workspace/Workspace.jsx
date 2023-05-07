import { NoteContainer, NoteText, NoteWrapper } from "./Workspace.styled";

export const Workspace = () => {
  return (
    <NoteContainer>
      <NoteWrapper>
        <p>date</p>
        <NoteText name="note" readOnly></NoteText>
      </NoteWrapper>
    </NoteContainer>
  );
};
