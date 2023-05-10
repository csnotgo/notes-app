import styled from "styled-components";
import { device } from "../../utils/device";

export const NotesListContainer = styled.div`
  height: calc(100vh - 40px);
  min-width: 150px;
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
    min-width: 250px;
    max-width: 250px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  justify-content: start;
  min-height: calc(101vh - 40px);

  border-right: 1px solid lightgray;
  border-left: 1px solid lightgray;
`;

export const NoResult = styled.p`
  font-size: 12px;
  text-align: center;
  margin-top: 20px;

  ${device.tablet} {
    font-size: 14px;
  }
`;
