// 이건 어떻게 사용할 수 있는 걸까?
const getLocation = (errHandler) => {
    if ("geolocation" in navigator) {
        return new Promise((resolve) => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const {
                        coords: { latitude: y, longitude: x },
                    } = position;
                    resolve({ x, y });
                },
                (e) => {
                    alert("HTTPS 연결을 확인해주세요.");
                    errHandler && errHandler();
                }
            );
        });
    }

    return { x: 126.942173, y: 37.556293 }; // 신촌 포스빌~
};

export default getLocation;
