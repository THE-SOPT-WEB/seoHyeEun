import { useState, useRef, useEffect } from "react";
import {
  StyledRoot,
  GameTitle,
  GameRound,
  GameSection,
  GameResetButton,
} from "./style";
import jongIn from "@/assets/image/김종인.jpg";
import seHun from "@/assets/image/오세훈.jpg";
import baekHyun from "@/assets/image/변백현.jpg";
import junMyeon from "@/assets/image/김준면.jpg";
import jaeHyun from "@/assets/image/정재현.jpg";
import doYoung from "@/assets/image/김도영.jpg";
import jungWoo from "@/assets/image/김정우.jpg";
import dongHyuk from "@/assets/image/이동혁.jpg";

function App() {
  const gameInfo = [
    { img: jongIn, name: "김종인" },
    { img: seHun, name: "오세훈" },
    { img: baekHyun, name: "변백현" },
    { img: junMyeon, name: "김준면" },
    { img: jaeHyun, name: "정재현" },
    { img: doYoung, name: "김도영" },
    { img: jungWoo, name: "김정우" },
    { img: dongHyuk, name: "이동혁" },
  ];

  const [round, setRound] = useState("8강");
  const matchWinners = useRef([]);
  const [fighterList, setFighterList] = useState(gameInfo);
  const [gameEnd, setGameEnd] = useState(false);

  const countRoundNum = () => {
    return matchWinners.current.length + 1;
  };

  const totalRoundNum = () => {
    return Math.ceil(
      (fighterList.length + matchWinners.current.length * 2) / 2
    );
  };

  const getSelectWinner = (pos) => {
    matchWinners.current.push(fighterList[pos]);
    setFighterList(fighterList.slice(2));
  };

  const playAgain = () => {
    setGameEnd(false);
  };

  useEffect(() => {
    if (fighterList.length === 0 && matchWinners.current.length >= 4) {
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
    console.log(fighterList.length, matchWinners.current.length);
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
    return (
      <StyledRoot>
        <GameTitle>
          내가 가장 사랑하는 남성은 {matchWinners.current[0].name}
        </GameTitle>
        <GameSection>
          <article>
            <img src={matchWinners.current[0].img} />
            <div>{matchWinners.current[0].name}</div>
          </article>
        </GameSection>
        <GameResetButton onClick={playAgain()}>다시하기</GameResetButton>
      </StyledRoot>
    );
  }
}

export default App;
