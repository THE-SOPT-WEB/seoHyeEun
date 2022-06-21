import axios from "axios";
import { Params } from "../type/result";

const Kakao = axios.create({
    baseURL: "https://dapi.kakao.com/v2/local/search/keyword", // 공통 요청 경로를 지정해준다.
    headers: {
        Authorization: `KakaoAK ${import.meta.env.VITE_APP_KAKAO_AK}`,
    },
});
// 여기에 제네릭을 어케 사용한단 말??
export const storeSearch = async (params: Params) => {
    return Kakao.get("", { params });
};
