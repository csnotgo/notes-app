import { useState } from "react";
import { Input, InputBox, SearchSVG, ResetBtn, ResetSVG } from "./SearchBox.styled";
import useDebounce from "react-debounced";

export const SearchBox = ({ searchQuery }) => {
  const [query, setQuery] = useState("");

  const debounce = useDebounce(1000);

  const onChange = (e) => {
    setQuery(e.target.value);
    debounce(() => searchQuery(query));
  };

  const resetQuery = () => {
    setQuery("");
    searchQuery("");
  };

  return (
    <InputBox>
      <SearchSVG isquery={query} />
      <Input type="text" placeholder="Search" value={query} onChange={onChange} />
      {query && (
        <ResetBtn type="button" onClick={resetQuery}>
          <ResetSVG size={25} color="#8a8a8a" />
        </ResetBtn>
      )}
    </InputBox>
  );
};
