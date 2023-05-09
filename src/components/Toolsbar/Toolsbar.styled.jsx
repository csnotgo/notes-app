import styled from "styled-components";
import { device } from "../../utils/device";
import { MainContainer } from "../App/App.styled";

export const Header = styled.div`
  background-color: lightgray;
  border-bottom: 2px solid rgba(112, 112, 112, 0.3);
`;

export const Container = styled(MainContainer)`
  align-items: center;
  gap: 10px;
  height: 40px;
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
  background-color: ${(prop) => (prop.disabled ? "rgba(239, 239, 239, 0.3)" : "#ffffff")};

  cursor: ${(prop) => (prop.disabled ? "auto" : "pointer")};

  ${device.tablet} {
    width: 45px;
  }

  :hover {
    background-color: ${(prop) => (prop.disabled ? "rgba(239, 239, 239, 0.3)" : "inherit")};
  }
`;
