const $ = (selector) => document.querySelector(selector);
const $All = (selector) => document.querySelectorAll(selector);
const cartListWrapper = $(".main__cart-list-wrapper");

let burgersInCart = [];

const parsePriceToNumber = (price) => {
  const removedComma = price.slice(0, -1).replace(/\D/g, "");
  return +removedComma;
};

/*------------ */

// 버거 카드를 눌렀을 때
function addBurgerToCart(burgerName, burgerPrice) {
  const targetBurgerName = burgerName;
  const targetBurgerPrice = burgerPrice;

  if (!burgersInCart.includes(targetBurgerName)) {
    burgersInCart.push(targetBurgerName);
    addNewBurgerToCart(targetBurgerName, targetBurgerPrice);
  } else {
    addExistBurgerToCart(targetBurgerName);
  }
  calculateAmount();
  addAnimation();
}

// 새로운 버거 추가했을 때 t=
function addNewBurgerToCart(targetBurgerName, targetBurgerPrice) {
  const cartList = document.createElement("li");
  cartList.classList.add("main__cart-list");
  cartList.innerHTML = `
    <strong class="main__cart-list-name">${targetBurgerName}</strong>
    <input type="number" value="1" min="1" class="main__cart-list-amount main__${targetBurgerName}-amount"/>
    <p class="main__cart-list-price">${targetBurgerPrice}</p>
    <button type="button" class="main__cart-list-deleteBtn">❌</button>
  `;
  cartListWrapper.appendChild(cartList);

  cartList
    .querySelector("button.main__cart-list-deleteBtn")
    .addEventListener("click", (e, targetBurgerName) =>
      deleteBurgerFromCart(e, targetBurgerName)
    );
}

// 이미 존재하는 요소 추가했을 때 수량 증가
function addExistBurgerToCart(targetBurgerName) {
  $(`.main__${targetBurgerName}-amount`).value++;
}

// 누적금액
function calculateAmount() {
  const cartLists = $All(".main__cart-list");
  let totalPrice = 0;

  cartLists.forEach((cartList) => {
    const burgerPrice = parsePriceToNumber(
      cartList.querySelector(".main__cart-list-price").innerText
    );
    const burgerAmount = cartList.querySelector(
      ".main__cart-list-amount"
    ).value;
    totalPrice += burgerPrice * burgerAmount;
  });

  $(".main__cart-total-price").innerText = `${totalPrice.toLocaleString()}원`;
}

function addAnimation() {
  const cart = $(".main__cart");

  cart.classList.add("bounce");
}

// 취소하기 누르면 카트 비우기
function emptyAllInCart() {
  while (cartListWrapper.hasChildNodes()) {
    cartListWrapper.removeChild(cartListWrapper.firstChild);
    burgersInCart.length = 0;
  }
  calculateAmount();
}
// 삭제버튼 누르면 해당요소 삭제
function deleteBurgerFromCart(e, targetBurgerName) {
  e.currentTarget.closest("li").remove();
  burgersInCart.splice(targetBurgerName);
  calculateAmount();
}

// 모달띄우기
function showModal() {
  const orderModal = $(".modal");
  orderModal.classList.remove("hide");
}
// 모달 닫기
function closeModal() {
  const orderModal = $(".modal");
  orderModal.classList.add("hide");
}

/*----------- */

// 이벤트 붙이기
function attachEvent({
  burgerCardNodeList,
  emptyCartButton,
  orderButton,
  closeButton,
}) {
  burgerCardNodeList.addEventListener("click", (e) => {
    if (!e.target.closest(".burger__card")) return;

    const burgerCard = e.target.closest(".burger__card");
    const burgerContents = burgerCard.children[1];
    const burgerName = burgerContents.children[0].innerText;
    const burgerPrice = burgerContents.children[1].innerText;
    // 장바구니에 버거 추가
    addBurgerToCart(burgerName, burgerPrice);
  });
  // 장바구니 비우기
  emptyCartButton.addEventListener("click", (e) => {
    emptyAllInCart();
  });
  //주문하기
  orderButton.addEventListener("click", (e) => {
    showModal();
  });
  //모달 닫기
  closeButton.addEventListener("click", (e) => {
    closeModal();
  });
}
// 장바구니 관리 함수
function cartManager(burgerInfo) {
  attachEvent(burgerInfo);
}

// 윈도우가 로딩되면 실행되는 함수
window.onload = () => {
  cartManager({
    burgerCardNodeList: $(".burger"),
    emptyCartButton: $(".main__cart-cancelBtn"),
    orderButton: $(".main__cart-orderBtn"),
    closeButton: $(".modal__closeBtn"),
  });
};
