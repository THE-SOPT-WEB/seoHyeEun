import { Result } from "../../type/result";
import { StyledRoot, StoreName, StoreAddress, StorePhoneNumber } from "./articleStyle";

const StoreArticle = (props: Result) => {
    const { place_url, place_name, road_address_name, distance, phone } = props;

    return (
        <StyledRoot>
            <StoreName href={place_url} target="_blank" rel="noreferrer">
                {place_name}
            </StoreName>
            <StoreAddress>{distance ? `${distance} m` : road_address_name}</StoreAddress>
            <StorePhoneNumber>{phone ? phone : "전화번호 없음"}</StorePhoneNumber>
        </StyledRoot>
    );
};

export default StoreArticle;
