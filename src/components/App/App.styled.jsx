import styled from "styled-components";
import { device } from "../../utils/device";

export const MainContainer = styled.div`
  display: flex;
  min-width: 320px;
  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;

  ${device.tablet} {
    min-width: 768px;
  }

  ${device.desktop} {
    min-width: 1200px;
  }
`;
