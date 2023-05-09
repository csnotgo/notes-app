import { useState } from "react";
import { DescrWrapper, Item, ItemDate, ItemText, ItemTitle, ItemWrapper } from "./ListItem.styled";

export const ListItem = ({ list, getId, shouldBtnDisabled }) => {
  const [active, setActive] = useState("");

  const onClick = (id) => {
    getId(id);
    shouldBtnDisabled(false);

    setActive(id);
  };

  return (
    <>
      {list?.map(({ id, values }) => {
        const noteList = Object.values(values);
        const correctDate = noteList.length > 1 ? noteList[1] : noteList[0];
        const date = new Date(correctDate).toLocaleDateString().replaceAll(".", "/");
        const noteDate = new Date(correctDate).toDateString();
        const currentDate = new Date(Date.now()).toDateString();
        const time = new Date(correctDate).toLocaleTimeString().slice(0, -3);

        return (
          <Item key={id} onClick={() => onClick(id)} active={active === id ? true : false}>
            <ItemWrapper>
              <ItemTitle>{noteList.length !== 1 ? noteList[0] : " "}</ItemTitle>
              <DescrWrapper>
                <ItemDate>{noteDate === currentDate ? time : date}</ItemDate>
                <ItemText>{noteList.length > 1 && noteList[2]}</ItemText>
              </DescrWrapper>
            </ItemWrapper>
          </Item>
        );
      })}
    </>
  );
};
