import { DescrWrapper, Item, ItemDate, ItemText, ItemTitle, ItemWrapper } from "./ListItem.styled";

export const ListItem = ({ list }) => {
  return (
    <>
      {list?.map(({ id, values, created_at }) => {
        const noteList = Object.values(values);
        const date = new Date(created_at).toLocaleDateString().replaceAll(".", "/");
        const noteDate = new Date(created_at).toDateString();
        const currentDate = new Date(Date.now()).toDateString();
        const time = new Date(created_at).toLocaleTimeString().slice(0, -3);

        return (
          <Item key={id}>
            <ItemWrapper>
              <ItemTitle>{noteList[1]}</ItemTitle>
              <DescrWrapper>
                <ItemDate>{noteDate === currentDate ? time : date}</ItemDate>
                <ItemText>{noteList[0]}</ItemText>
              </DescrWrapper>
            </ItemWrapper>
          </Item>
        );
      })}
    </>
  );
};
