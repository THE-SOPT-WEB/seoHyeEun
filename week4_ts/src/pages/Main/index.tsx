import styled from "styled-components";
import { useState } from "react";
import Header from "../../components/Header";
import ResultSection from "../../components/ResultSection";
import { Result } from "../../type/result";

function Main() {
    const [results, setResults] = useState<Result[]>([]);
    const [isSearch, setIsSearch] = useState<boolean>(false);

    const handleResults = (newResults: Result[]) => {
        setResults(newResults);
    };
    const handleIsSearch = (newIsSearch: boolean) => {
        setIsSearch(newIsSearch);
    };

    return (
        <Styled.Root>
            {/* Header에 뭐를 props로 내려주고 있나요? */}
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
        ${({ theme }) => theme.flexColumnCenter};
        width: 100%;
        height: 100%;
        overflow: hidden;
        font-size: 5rem;
        background-color: lemonchiffon;
    `,
    SectionWrapper: styled.div`
        ${({ theme }) => theme.flexColumnCenter};
        width: 100%;
        height: 100%;
    `,
};
