import styled from "styled-components";
import { device } from "../../utils/device";

export const Item = styled.li`
  width: 100%;
  height: 60px;
  padding-left: 30px;

  cursor: pointer;
  background-color: ${(prop) => (prop.active ? "lightgray" : "transparent")};

  :hover,
  :focus,
  :active {
    background-color: lightgray;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;

  height: 60px;
  padding: 10px 20px 10px 0;

  border-bottom: 1px solid lightgray;
  overflow: hidden;
`;

export const ItemTitle = styled.h2`
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${device.tablet} {
    font-size: 16px;
  }
`;

export const DescrWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ItemDate = styled.p`
  font-size: 10px;

  ${device.tablet} {
    font-size: 14px;
  }
`;

export const ItemText = styled.p`
  font-size: 12px;
  color: #5e5e5e;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${device.tablet} {
    font-size: 14px;
  }
`;
