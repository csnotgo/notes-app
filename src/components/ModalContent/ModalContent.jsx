import { CloseBtn, ButtonsWrapper, ModalBtn, ContentWrapper, Text } from "./ModalContent.styled";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const ModalContent = ({ onClose, action, text }) => {
  return (
    <ContentWrapper>
      <CloseBtn type="button" onClick={onClose}>
        <AiOutlineCloseCircle size={25} color="#8a8a8a" />
      </CloseBtn>
      <Text>{text}</Text>
      <ButtonsWrapper>
        <ModalBtn type="button" onClick={action}>
          yes
        </ModalBtn>
        <ModalBtn type="button" onClick={onClose}>
          no
        </ModalBtn>
      </ButtonsWrapper>
    </ContentWrapper>
  );
};
