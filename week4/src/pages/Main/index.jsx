function Main() {
  return (
    <StyledRoot>
      <Header>우리 동네 맥주집</Header>
      <SearchSection>
        <LocalSearch>
          <p>지역기반으로 검색할게요</p>
          <input type="checkbox" />
        </LocalSearch>
        <WantSearch>
          <p>우리 동네는 여기에요</p>
          <input type="search" />
          <button type="submit">검색하기</button>
        </WantSearch>
      </SearchSection>
    </StyledRoot>
  );
}

export default Main;
