import { useRef, useState } from "react";
import styled from "styled-components";

import { flexColumnCenter } from "../mixxin";
import SearchSection from "./SearchSection";

export default function Header() {
    const { handleIsSearch, handleResults } = props;
    const [isLocation, setIsLocation] = useState(false);
    const [input, setInput] = useState("");
    const searchRef = useRef(null);
    const position = useRef(null);

    // 클릭 시 검색 input 비활성화
    const handleInputDisabled = () => {
        const searchInput = searchRef.current;
        searchInput.disabled = !searchInput.disabled;
        setIsLocation((prev) => !prev);
    };

    return (
        <Styled.Root>
            <h1>우리 동네 BAR 🥂</h1>
            <Styled.SearchWrapper>
                <MyLocationButton choice={isLocation} onClick={handleInputDisabled}>
                    현위치로 할래
                </MyLocationButton>
                <SearchSection
                    searchRef={searchRef}
                    input={input}
                    setInput={setInput}
                    handleIsSearch={handleIsSearch}
                    handleResults={handleResults}
                />
            </Styled.SearchWrapper>
        </Styled.Root>
    );
}

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
