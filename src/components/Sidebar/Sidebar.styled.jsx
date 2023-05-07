import styled from "styled-components";
import { device } from "../../utils/device";

export const NotesListContainer = styled.div`
  height: calc(100vh - 40px);
  max-width: 150px;
  padding-right: 5px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(104, 103, 103, 0.5);
  }

  ${device.tablet} {
    max-width: 300px;
  }
`;

export const List = styled.ul`
  min-height: calc(101vh - 40px);

  border-right: 1px solid lightgray;
  border-left: 1px solid lightgray;
`;
