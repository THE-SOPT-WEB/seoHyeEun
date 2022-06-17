import React from "react";
import Skeleton from "./StoreArticle/Skeleton";
import StoreArticle from "./StoreArticle/StoreArticle";

function ResultSection(props) {
    const { isSearch, results } = props;
    // 이건 대체 뭔뜻일까
    if (isSearch) return new Array(10).fill(1).map((_, i) => <Skeleton key={i} />);
    if (results.length === 0) return <StoreArticle placeName="여기엔 BAR가 없다..!" />;

    return results.map((result) => (
        <StoreArticle
            key={result.id}
            placeUrl={result.place_url}
            placeName={result.place_name}
            roadAddressName={result.road_address_name}
            distance={result.distance}
            phone={result.phone}
        />
    ));
}

export default ResultSection;
