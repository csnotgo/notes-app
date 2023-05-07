import styled from "styled-components";

export const Item = styled.li`
  width: 100%;
  height: 60px;
  padding-left: 30px;

  cursor: pointer;

  :hover,
  :focus,
  :active {
    background-color: lightgray;
  }
`;

export const ItemWrapper = styled.div`
  height: 60px;
  padding: 10px 20px 10px 0;

  border-bottom: 1px solid lightgray;
  overflow: hidden;
`;

export const ItemTitle = styled.h2`
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DescrWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ItemDate = styled.p`
  font-size: 14px;
`;

export const ItemText = styled.p`
  font-size: 14px;
  color: #5e5e5e;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
