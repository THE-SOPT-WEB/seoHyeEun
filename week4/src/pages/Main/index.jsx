import styled from 'styled-components';
import { flexColumnCenter } from '../../mixxin';
import React, { useState } from 'react';

function Main() {
  const [results, setResults] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  const handleResults = newResults => {
    setResults(newResults);
  };
  const handleIsSearch = newIsSearch => {
    setIsSearch(newIsSearch);
  };

  return (
    <Styled.Root>
      <Header handleIsSearch={handleIsSearch} handleResults={handleResults} />
      <Styled.SectionWrapper>
        <ResultSection isSearch={isSearch} results={results} />
      </Styled.SectionWrapper>
    </Styled.Root>
  );
}

export default Main;

const Styled = {
  Root: styled.main`
    ${flexColumnCenter}
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-size: 70px;
    & h1 {
      margin-top: 2rem;
    }
  `,
  SectionWrapper: styled.div`
    ${flexColumnCenter}
    width: 100%;
    height: 100%;
  `,
};
