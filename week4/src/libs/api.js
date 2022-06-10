import axios from 'axios';

const Kakao = axios.create({
  baseURL: 'https://dapi.kakao.com/v2/local/search/keyword', // 공통 요청 경로를 지정해준다.
  headers: {
    Authorization: `KakaoAK ${import.meta.env.VITE_APP_KAKAO_AK}`,
  },
});

export const storeSearch = async params => {
  return Kakao.get('', { params });
};
