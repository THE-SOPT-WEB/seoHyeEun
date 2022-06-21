import { Result } from "../type/result";
import Skeleton from "./StoreArticle/Skeleton";
import StoreArticle from "./StoreArticle/StoreArticle";

interface MainResultProps {
    isSearch: boolean;
    results: Result[];
}

function ResultSection(props: MainResultProps) {
    const { isSearch, results } = props;
    // 이건 대체 뭔뜻일까
    if (isSearch) return new Array(10).fill(1).map((_, i) => <Skeleton key={i} />);
    if (results.length === 0) return <StoreArticle place_name="여기엔 BAR가 없다..!" />;

    return results.map((result) => (
        <StoreArticle
            key={result.id}
            place_url={result.place_url}
            place_name={result.place_name}
            road_address_name={result.road_address_name}
            distance={result.distance}
            phone={result.phone}
        />
    ));
}

export default ResultSection;
