import { useState } from "react";
import styled from "styled-components";
import { flexColumnCenter } from "../../mixxin";
import Header from "../../components/Header";
import ResultSection from "../../components/ResultSection";

export default function Main() {
    const [results, setResults] = useState([]);
    const [isSearch, setIsSearch] = useState(false);

    const handleResults = (newResults) => {
        setResults(newResults);
    };
    const handleIsSearch = (newIsSearch) => {
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

const Styled = {
    Root: styled.main`
        ${flexColumnCenter}
        width: 100%;
        height: 100%;
        overflow: hidden;
        font-size: 5rem;
        background-color: lemonchiffon;

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