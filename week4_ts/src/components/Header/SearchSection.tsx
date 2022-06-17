import styled from "styled-components";
import { storeSearch } from "../libs/api";

interface MainSearchProps {}

export default function SearchSection() {
    // 위치에 따른 가게 검색 handler
    const storeSearchHttpHandler = async (params) => {
        const { data } = await storeSearch(params);
        handleIsSearch(false);
        handleResults(data.documents);
    };
    // 위치 handler
    const handleMyLocation = () => {
        if (!position.current) {
            new Promise((resolve, rejected) => {
                navigator.geolocation.getCurrentPosition(resolve, rejected);
            }).then((res) => {
                position.current = res.coords;
                const params = {
                    x: position.current.longitude,
                    y: position.current.latitude,
                    radius: 1000,
                    query: "바",
                };
                storeSearchHttpHandler(params);
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
    // input 변화 감지
    const handleInputChange = (e) => {
        setInput(e.target.value);
    };
    // 검색 버튼
    const handleSearchButton = (e) => {
        handleIsSearch(true);
        e.preventDefault();
        if (!searchRef.current.disabled) {
            const params = {
                query: input + " " + "바",
            };
            storeSearchHttpHandler(params);
        } else {
            handleMyLocation();
        }
    };

    return (
        <>
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
        </>
    );
}
