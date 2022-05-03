import { useState, useRef } from "react";
import { StyledRoot, GameTitle, GameRound, GameSection } from "./style";
import baekHyun from "@/assets/image/변백현.jpg";
import seHun from "@/assets/image/오세훈.jpg";
import dongHyuk from "@/assets/image/이동혁.jpg";
import jaeHyun from "@/assets/image/정재현.jpg";

function App() {
  const gameInfo = [
    { img: baekHyun, name: "변백현" },
    { img: seHun, name: "오세훈" },
    { img: dongHyuk, name: "이동혁" },
    { img: jaeHyun, name: "정재현" },
  ];

  const [round, setRound] = useState("준결승");
  const matchWinners = useRef([]);
  const [fighterList, setFighterList] = useState(gameInfo);

  const getSelectWinner = (pos) => {
    matchWinners.current.push(fighterList[pos]);
    setFighterList(fighterList.slice(2));

    if (fighterList.length == 0) {
      setFighterList(matchWinners.current);
    }
  };

  return (
    <StyledRoot>
      <GameTitle>내가 사랑하는 남성 월드컵 {round}</GameTitle>
      <GameRound>1/2</GameRound>
      <GameSection>
        <article onClick={() => getSelectWinner(0)}>
          <img src={fighterList[0].img} />
          <div>{fighterList[0].name}</div>
        </article>
        <article onClick={() => getSelectWinner(1)}>
          <img src={fighterList[1].img} />
          <div>{fighterList[1].name}</div>
        </article>
      </GameSection>
    </StyledRoot>
  );
}

export default App;
