import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { storeSearch } from '../libs/api';

function Header(props) {
  const { handleIsSearch, handleResults } = props;
  const [isLocation, setIsLocation] = useState(false);
  const [input, setInput] = useState('');
  const searchRef = useRef(null);
  const position = useRef(null);

  const storeSearchHttpHandler = async params => {
    const { data } = await storeSearch(params);
    handleIsSearch(false);
    handleResults(data.documents);
  };

  const handleMyLocation = () => {
    if (!position.current) {
      new Promise((resolve, rejected) => {
        navigator.geolocation.getCurrentPosition(resolve, rejected);
      }).then(res => {
        position.current = res.coords;
        const params = {
          x: position.current.longitude,
          y: position.current.latitude,
          radius: 1000,
          query: '바',
        };
        storeSearchHttpHandler(params);
      });
    } else {
      const params = {
        x: position.current.longitude,
        y: position.current.latitude,
        radius: 1000,
        query: '바',
      };
      storeSearchHttpHandler(params);
    }
  };

  const handleInputDisabled = () => {
    const searchInput = searchRef.current;
    searchInput.disabled = !searchInput.disabled;
    setIsLocation(prev => !prev);
  };

  const handleInputChange = e => {
    setInput(e.target.value);
  };

  const handleSearchButton = e => {
    handleIsSearch(true);
    e.preventDefault();
    if (!searchRef.current.disabled) {
      const params = {
        query: input + ' ' + '바',
      };
      storeSearchHttpHandler(params);
    } else {
      handleMyLocation();
    }
  };

  return (
    <Styled.Root>
      <h1>우리 동네 BAR 😋🥂</h1>
      <Styled.SearchWrapper>
        <MyLocationButton choice={isLocation} onClick={handleInputDisabled}>
          현위치
        </MyLocationButton>
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

const MyLocationButton = styled.button``;

const SearchLabel = styled.label`
  font-size: 3rem;
`;

const SearchInput = styled.input``;

const SearchButton = styled.button``;
