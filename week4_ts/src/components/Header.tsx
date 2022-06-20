import React, { useRef, useState } from "react";
import styled from "styled-components";
import { storeSearch } from "../libs/api";
import { flexColumnCenter } from "../mixxin";
import theme from "../styles/theme";
import { Result } from "../type/result";

interface MainHeaderProps {
    handleIsSearch: (newIsSearch: boolean) => void;
    handleResults: (newResults: Result[]) => void;
}

interface Params {
    query: string;
}

interface Coordinates {
    longitude: number;
    latitude: number;
}

function Header(props: MainHeaderProps) {
    const { handleIsSearch, handleResults } = props;
    const [isLocation, setIsLocation] = useState<boolean>(false);
    const [input, setInput] = useState<string>("");
    //useRef의 타입을 어떻게 정의해여!?!!?
    const searchRef = useRef<HTMLInputElement>(null);
    const position = useRef<Coordinates>({ longitude: 0, latitude: 0 });
    // 위치에 따른 가게 검색 handler
    const storeSearchHttpHandler = async (params: Params) => {
        const { data } = await storeSearch(params);
        handleIsSearch(false);
        handleResults(data.documents);
    };
    // 위치 handler
    const handleMyLocation = () => {
        // !position.current 가 무슨뜻일까?
        // 그리고 내 위치를 켜면 내 위치가 아니라 이름에 바가 들어간게 나옴
        if (!position.current) {
            new Promise((resolve) => {
                navigator.geolocation.getCurrentPosition((currentPosition) => {
                    position.current = currentPosition.coords;
                    const params = {
                        y: position.current.latitude,
                        x: position.current.longitude,
                        radius: 1000,
                        query: "베이커리",
                    };
                    storeSearchHttpHandler(params);
                });
            });
        } else {
            const params = {
                x: position.current.longitude,
                y: position.current.latitude,
                radius: 1000,
                query: "바",
            };
            storeSearchHttpHandler(params);
        }
    };

    // 클릭 시 검색 input 비활성화
    const handleInputDisabled = () => {
        if (searchRef.current !== null) {
            searchRef.current.disabled = !searchRef.current.disabled;
            setIsLocation((prev) => !prev);
        }
    };
    // input 변화 감지
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };
    // 검색 버튼
    const handleSearchButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        handleIsSearch(true);
        e.preventDefault();
        if (searchRef.current !== null) {
            if (!searchRef.current.disabled) {
                const params = {
                    query: input + " " + "바",
                };
                storeSearchHttpHandler(params);
            } else {
                handleMyLocation();
            }
        }
    };

    return (
        <Styled.Root>
            <h1>우리 동네 BAR 🥂</h1>
            <Styled.SearchWrapper>
                <MyLocationButton isChoice={isLocation} onClick={handleInputDisabled}>
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
                <SearchButton isChoice={handleIsSearch} type="submit" onClick={handleSearchButton}>
                    검색
                </SearchButton>
            </Styled.SearchWrapper>
        </Styled.Root>
    );
}

export default Header;

interface StHeaderProps {
    isChoice: boolean;
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
    // 왜 색 안바뀌지
    color: ${(props: StHeaderProps) =>
        props.isChoice ? theme.colors.skyblue : theme.colors.lightgreen};
`;

const SearchLabel = styled.label`
    font-size: 2rem;
`;

const SearchInput = styled.input``;

const SearchButton = styled.button``;
