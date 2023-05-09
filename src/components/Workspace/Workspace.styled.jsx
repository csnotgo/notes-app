import styled from "styled-components";

export const NoteContainer = styled.div`
  height: calc(100vh - 40px);
  width: 100%;
  padding-left: 5px;
`;

export const NoteWrapper = styled.div`
  height: 100%;
  padding: 15px 40px;

  text-align: center;

  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;
`;

export const DateTime = styled.p`
  color: gray;
`;

export const NoteTitle = styled.textarea`
  resize: none;
  display: block;
  height: fit-content;
  width: 100%;

  font-size: 16px;

  border: none;
  cursor: ${(prop) => (prop.readOnly ? "default" : "text")};
  overflow-y: hidden;
  :focus-visible {
    outline: none;
  }
`;

export const NoteText = styled(NoteTitle)`
  height: 90%;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(104, 103, 103, 0.5);
  }
`;
