import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { storeSearch } from '../libs/api';
import { flexColumnCenter } from '../mixxin';

function Header(props) {
  const { handleIsSearch, handleResults } = props;
  const [isLocation, setIsLocation] = useState(false);
  const [input, setInput] = useState('');
  const searchRef = useRef(null);
  const position = useRef(null);
  // 위치에 따른 가게 검색 handler
  const storeSearchHttpHandler = async params => {
    const { data } = await storeSearch(params);
    handleIsSearch(false);
    handleResults(data.documents);
  };
  // 위치 handler
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
  // 클릭 시 검색 input 비활성화
  const handleInputDisabled = () => {
    const searchInput = searchRef.current;
    searchInput.disabled = !searchInput.disabled;
    setIsLocation(prev => !prev);
  };
  // input 변화 감지
  const handleInputChange = e => {
    setInput(e.target.value);
  };
  // 검색 버튼
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
      <h1>우리 동네 BAR 🥂</h1>
      <Styled.SearchWrapper>
        <MyLocationButton choice={isLocation} onClick={handleInputDisabled}>
          현위치로 할래
        </MyLocationButton>
        <SearchLabel>찾고싶은 동네는</SearchLabel>
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
  Root: styled.header`
    ${flexColumnCenter}
    & h1 {
      margin-bottom: 2rem;
    }
  `,
  SearchWrapper: styled.div`
    display: flex;
    gap: 2rem;
  `,
};

const MyLocationButton = styled.button`
  &:active {
  }
`;

const SearchLabel = styled.label`
  font-size: 2rem;
`;

const SearchInput = styled.input``;

const SearchButton = styled.button``;
