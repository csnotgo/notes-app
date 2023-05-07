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

export const NoteText = styled.textarea`
  resize: none;
  display: block;
  height: 100%;
  width: 100%;

  font-size: 16px;

  border: none;
  pointer-events: none;
  :focus-visible {
    outline: none;
  }
`;
