import { useState, useRef, useEffect } from "react";
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
  };

  useEffect(() => {
    console.log(fighterList, matchWinners.current);
    if (fighterList.length === 0 && matchWinners.current.length >= 2) {
      setFighterList(matchWinners.current);
      setRound("결승");
    } else if (fighterList.length === 0 && matchWinners.current.length === 1) {
    }
  });

  return (
    <StyledRoot>
      <GameTitle>내가 사랑하는 남성 월드컵 {round}</GameTitle>
      <GameRound>1/2</GameRound>
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
      </GameSection>
    </StyledRoot>
  );
}

export default App;
