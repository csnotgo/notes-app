import styled from "styled-components";
import { device } from "../../utils/device";
import { BiSearch } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CloseBtn } from "../ModalContent/ModalContent.styled";

export const InputBox = styled.div`
  position: relative;
  margin-left: auto;
  height: 25px;
`;

export const Input = styled.input`
  display: block;
  height: 25px;
  width: 120px;
  padding: 0 5px;

  text-align: center;
  font-size: 12px;
  border: none;
  border-radius: 4px;
  color: inherit;
  background-color: #ffffff;
  box-shadow: 0px 1px 2px 1px rgba(112, 112, 112, 0.3);

  ::placeholder {
    color: #a5a2a2;
  }

  ${device.tablet} {
    width: 200px;
    font-size: 14px;
  }

  ${device.desktop} {
    width: 300px;
    font-size: 16px;
  }
`;

export const SearchSVG = styled(BiSearch)`
  display: ${(prop) => (prop.isquery ? "none" : "block")};
  position: absolute;
  top: 5px;
  left: 25px;
  width: 15px;
  height: 15px;

  color: #a5a2a2;

  ${device.tablet} {
    left: 60px;
  }

  ${device.desktop} {
    left: 105px;
  }
`;
export const ResetBtn = styled(CloseBtn)`
  top: 2px;
`;

export const ResetSVG = styled(AiOutlineCloseCircle)`
  width: 20px;
  height: 20px;
`;
