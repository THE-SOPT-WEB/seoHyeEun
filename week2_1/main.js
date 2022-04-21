import pic1 from "./assets/김규민.jpeg";
import pic2 from "./assets/전희선.jpeg";
import pic3 from "./assets/서혜은.jpg";
import pic4 from "./assets/황주희.jpeg";
import pic5 from "./assets/백지연.png";

const $ = (selector) => document.querySelector(selector);

let currentStep = 0;

const quizList = [
  {
    src: pic1,
    answer: "김규민",
  },
  {
    src: pic2,
    answer: "전희선",
  },
  {
    src: pic3,
    answer: "서혜은",
  },
  {
    src: pic4,
    answer: "황주희",
  },
  {
    src: pic5,
    answer: "백지연",
  },
];

// 초기값 세팅
function initGame({ score, answer, image }) {
  currentStep = 0; // 현재 시작 배열
  score.innerText = 0;
  image.src = quizList[currentStep].src;
}

// 모달창 띄우기
function showModal(modalContent, keepOpen) {
  const modal = $(".modal");
  const modalBody = $("p.modal__body"); //어케 수정?
  // 요소를 바꿀때 innerHTML 사용
  modalBody.innerHTML = modalContent;

  modal.classList.remove("hide");

  if (keepOpen) return;

  setTimeout(() => {
    modal.classList.add("hide");
  }, 500);
}

// 다음 step으로 넘어갈 때 - 점수 올리기 & 이미지 바꿔주기
function goNextStep(score, image) {
  currentStep++;
  score.innerText = +score.innerText + 1;

  // 게임이 끝난 상태
  if (currentStep === quizList.length) {
    showModal(
      `
    <a href="/">메인화면으로</a>
    `,
      true
    );
    return;
  }

  setTimeout(() => {
    image.src = quizList[currentStep].src;
  }, 470);
}

// 이벤트 부착
function attachEvent({ score, answer, image, button }) {
  answer.addEventListener("click", (e) => {
    if (e.target instanceof HTMLLIElement) {
      const currentAnswer = e.target.innerText;
      const realAnswer = quizList[currentStep].answer;
      if (currentAnswer === realAnswer) {
        // 정답
        // showModal("역시 ㅋ ㅋ 알고 있었네 고마와😘");
        goNextStep(score, image);
      } else {
        // 오답
        showModal(`야야 내가 ${currentAnswer}? 그게 마쟈?😑`);
      }
    }
  });

  button.addEventListener("click", () => {
    currentStep = 0; // 현재 시작 배열
    score.innerText = 0;
    image.src = quizList[currentStep].src;
  });
}

// 게임 시작
function gameManager(gameInfo) {
  initGame(gameInfo); // 초기값 세팅
  attachEvent(gameInfo); // 이벤트 부착
}

// 윈도우가 로딩되면 실행되는 함수
window.onload = () => {
  gameManager({
    score: $(".scoreBoard__score"),
    answer: $(".answer__list"),
    image: $(".imageBoard > img"),
    button: $(".buttonList__shuffle"),
  });
};
