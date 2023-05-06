import { useState } from "react";
import { Input, InputBox, SearchSVG } from "./SearchBox.styled";

export const SearchBox = () => {
  const [query, setQuery] = useState("");

  const onChange = (e) => setQuery(e.target.value);

  return (
    <InputBox>
      <SearchSVG isquery={query} />
      <Input type="text" placeholder="Search" value={query} onChange={onChange} />
    </InputBox>
  );
};
