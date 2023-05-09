import styled from "styled-components";

export const ContentWrapper = styled.div`
  position: relative;
  padding: 30px 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 50px;
`;

export const ModalBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 35px;

  border: none;
  border-radius: 10px;
  box-shadow: 0px 1px 2px 1px rgba(112, 112, 112, 0.3);
  background-color: #ffffff;
  cursor: pointer;

  :hover {
    background-color: inherit;
  }
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  text-align: center;
`;
