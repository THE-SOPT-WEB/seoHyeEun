const $ = (selector) => document.querySelector(selector);
const $All = (selector) => document.querySelectorAll(selector);
const cartListWrapper = $(".main__cart-list-wrapper");

function addBurgerToCart(targetBurgerName, targetBurgerPrice) {
  const cartList = document.createElement("li");

  cartList.classList.add("main__cart-list");
  cartList.innerHTML = `
    <strong class="main__cart-list-name">${targetBurgerName}</strong>
    <input type="number" value="1" min="1" class="main__cart-list-amount"/>
    <p class="main__cart-list-price">${targetBurgerPrice}</p>
    <button type="button" class="main__cart-list-deleteBtn">❌</button>
  `;
  cartListWrapper.appendChild(cartList);

  cartList
    .querySelector("button.main__cart-list-deleteBtn")
    .addEventListener("click", (e) => deleteBurgerFromCart(e));
}

function emptyAllInCart() {
  while (cartListWrapper.hasChildNodes()) {
    cartListWrapper.removeChild(cartListWrapper.firstChild);
  }
}
// 삭제버튼 누르면 해당요소 삭제
function deleteBurgerFromCart(e) {
  e.currentTarget.closest("li").remove();
}

// 모달띄우기
function showModal() {
  const orderModal = $(".modal");
  orderModal.classList.remove("hide");
}

function closeModal() {
  const orderModal = $(".modal");
  orderModal.classList.add("hide");
}

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
