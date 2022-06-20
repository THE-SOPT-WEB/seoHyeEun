import axios from "axios";
import { Params } from "../type/result";

const Kakao = axios.create({
    baseURL: "https://dapi.kakao.com/v2/local/search/keyword", // 공통 요청 경로를 지정해준다.
    headers: {
        // 여기도 타입 지정을 해줘야 하나?
        Authorization: `KakaoAK ${import.meta.env.VITE_APP_KAKAO_AK}`,
    },
});

export const storeSearch = async (params: Params) => {
    return Kakao.get("", { params });
};
