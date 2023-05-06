import styled from "styled-components";
import { device } from "../../utils/device";

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 40px;
  padding: 0 15px;

  background-color: lightgray;
  border-bottom: 2px solid rgba(112, 112, 112, 0.3);
`;

export const ToolButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 25px;

  border: none;
  border-radius: 4px;
  box-shadow: 0px 1px 2px 1px rgba(112, 112, 112, 0.3);
  cursor: pointer;

  ${device.tablet} {
    width: 45px;
  }
`;
