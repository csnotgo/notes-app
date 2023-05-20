import { useState } from "react";
import { Input, InputBox, SearchSVG, ResetBtn, ResetSVG, InfoText, InfoBox } from "./SearchBox.styled";
import { debounce } from "../../utils/helpers";

export const SearchBox = ({ searchQuery }) => {
  const [query, setQuery] = useState("");

  const onChange = (e) => {
    setQuery(e.target.value);
    if (query.length === 3) {
      debounce(searchQuery(query), 250);
    }
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
      {query.length <= 2 && query !== "" ? (
        <InfoBox>
          <InfoText>Please, enter at least 3 characters to search</InfoText>
        </InfoBox>
      ) : (
        <></>
      )}
    </InputBox>
  );
};
