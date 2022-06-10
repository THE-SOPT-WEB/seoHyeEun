import React from 'react';
import styled from 'styled-components';

function Header(props) {
  const { handleIsSearch, handleResults } = props;
  const [isLocation, setIsLocation] = useState(false);
  const [input, setInput] = useState('');
  const searchRef = useRef(null);

  const handleInputToggle = () => {
    const searchInput = searchRef.current;
    searchInput.disabled = !searchInput.disabled;
    setIsLocation(prev => !prev);
  };

  const handleInputChange = e => {
    setInput(e.target.value);
  };

  return (
    <Styled.Root>
      <h1>우리 동네 맥주집 😋🍻</h1>
      <Styled.SearchWrapper>
        <LocationButton choice={isLocation} onClick={handleInputToggle}>
          현위치
        </LocationButton>
        <SearchLabel>우리 동네</SearchLabel>
        <SearchInput
          ref={searchRef}
          type="text"
          onChange={handleInputChange}
          value={input}
          placeholder="지역을 입력해주세요"
        />
        <SearchButton choice={handleIsSearch} type="submit" onClick={handleSearchButton}>
          검색
        </SearchButton>
      </Styled.SearchWrapper>
    </Styled.Root>
  );
}

export default Header;

const Styled = {
  Root: styled.header``,
  SearchWrapper: styled.div``,
};

const LocationButton = styled.button``;

const SearchLabel = styled.label``;

const SearchInput = styled.input``;

const SearchButton = styled.button``;
