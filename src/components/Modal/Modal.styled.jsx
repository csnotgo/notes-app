import styled from "styled-components";
import { device } from "../../utils/device";

export const Backdrop = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
`;

export const Content = styled.div`
  width: 250px;
  height: 180px;
  padding: 20px;
  background-color: rgb(211, 211, 211);
  color: inherit;
  box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);
  border-radius: 30px;

  ${device.tablet} {
    width: 350px;
    height: 200px;
  }
`;
