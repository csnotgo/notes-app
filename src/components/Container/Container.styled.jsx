import styled from "styled-components";
import { device } from "../../utils/device";

export const MainContainer = styled.div`
  width: 320px;
  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;

  ${device.tablet} {
    width: 768px;
  }

  ${device.desktop} {
    width: 1200px;
  }
`;
