import { useState, useRef, useEffect } from "react";
import {
  StyledRoot,
  GameTitle,
  GameRound,
  GameSection,
  GameResetButton,
  WinnerSection,
} from "./style";
import jongIn from "@/assets/image/김종인.jpg";
import seHun from "@/assets/image/오세훈.jpg";
import baekHyun from "@/assets/image/변백현.jpg";
import junMyeon from "@/assets/image/김준면.jpg";
import jaeHyun from "@/assets/image/정재현.jpg";
import doYoung from "@/assets/image/김도영.jpg";
import jungWoo from "@/assets/image/김정우.jpg";
import dongHyuk from "@/assets/image/이동혁.jpg";
import jiYong from "@/assets/image/권지용.jpg";
import jaeMin from "@/assets/image/나재민.jpg";
import jeNo from "@/assets/image/이제노.jpg";
import eunWoo from "@/assets/image/차은우.jpg";
import jungHan from "@/assets/image/윤정한.jpg";
import hoShi from "@/assets/image/권호시.jpg";
import kyoungSoo from "@/assets/image/도경수.jpg";
import minHyung from "@/assets/image/이민형.jpg";

function App() {
  // 월드컵 참여자들 배열
  const gameInfo = [
    { img: jongIn, name: "김종인" },
    { img: seHun, name: "오세훈" },
    { img: baekHyun, name: "변백현" },
    { img: junMyeon, name: "김준면" },
    { img: jaeHyun, name: "정재현" },
    { img: doYoung, name: "김도영" },
    { img: jungWoo, name: "김정우" },
    { img: dongHyuk, name: "이동혁" },
    { img: jiYong, name: "권지용" },
    { img: jaeMin, name: "나재민" },
    { img: jeNo, name: "이제노" },
    { img: eunWoo, name: "차은우" },
    { img: jungHan, name: "윤정한" },
    { img: hoShi, name: "권호시" },
    { img: kyoungSoo, name: "도경수" },
    { img: minHyung, name: "이민형" },
  ];
  // 배열 랜덤으로 재정렬
  const randomGameInfo = gameInfo.sort(() => Math.random() - 0.5);

  const [round, setRound] = useState("16강");
  const matchWinners = useRef([]);
  const [fighterList, setFighterList] = useState(randomGameInfo);
  const [gameEnd, setGameEnd] = useState(false);

  // 현재 몇 라운드인지
  const countRoundNum = () => {
    return matchWinners.current.length + 1;
  };
  // 이번 강에는 총 몇 번의 라운드가 있는지
  const totalRoundNum = () => {
    return Math.ceil(
      (fighterList.length + matchWinners.current.length * 2) / 2
    );
  };
  // 승자를 골랐을 때
  const getSelectWinner = (pos) => {
    matchWinners.current.push(fighterList[pos]);
    setFighterList(fighterList.slice(2));
  };
  // 다시 게임을 시작하는 함수
  const playAgain = () => {
    setGameEnd(false);
    matchWinners.current = [];
    setFighterList(randomGameInfo);
    setRound("16강");
  };
  // 화면이 리렌더링 될 때 마다 참가자들 배열과 승리자들 배열 확인
  useEffect(() => {
    if (fighterList.length === 0 && matchWinners.current.length >= 8) {
      setFighterList(matchWinners.current);
      setRound("8강");
      matchWinners.current = [];
    } else if (fighterList.length === 0 && matchWinners.current.length >= 4) {
      setFighterList(matchWinners.current);
      setRound("4강");
      matchWinners.current = [];
    } else if (fighterList.length === 0 && matchWinners.current.length >= 2) {
      setFighterList(matchWinners.current);
      setRound("결승");
      matchWinners.current = [];
    } else if (fighterList.length === 0 && matchWinners.current.length === 1) {
      setGameEnd(true);
    }
  });

  if (!gameEnd) {
    // 게임이 끝나지 않았다면
    return (
      <StyledRoot>
        <GameTitle>내가 사랑하는 남성 월드컵 {round}</GameTitle>
        <GameRound>
          {countRoundNum()}/{totalRoundNum()}
        </GameRound>
        <GameSection>
          {fighterList.map((fighter, index) => {
            if (index < 2) {
              return (
                <article onClick={() => getSelectWinner(index)}>
                  <img src={fighter.img} />
                  <div>{fighter.name}</div>
                </article>
              );
            }
          })}
          <p>VS</p>
        </GameSection>
      </StyledRoot>
    );
  } else {
    // 게임이 끝났다면
    return (
      <StyledRoot>
        <GameTitle>
          내가 가장 사랑하는 남성은 {matchWinners.current[0].name}
        </GameTitle>
        <WinnerSection>
          <p>👑</p>
          <article>
            <img src={matchWinners.current[0].img} />
            <div>{matchWinners.current[0].name}</div>
          </article>
        </WinnerSection>
        <GameResetButton onClick={playAgain}>다시하기</GameResetButton>
      </StyledRoot>
    );
  }
}

export default App;
