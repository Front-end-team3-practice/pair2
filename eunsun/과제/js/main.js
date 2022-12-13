// 문제 1번
window.onload = function () {
  const loadingText = document.querySelector("#display");
  loadingText.innerText = "로딩 중 변경 텍스트 입니다.";
};

// 문제 2번
function onTabClick() {
  this.classList.add("active_tab");
}
const tab = document.querySelectorAll(".tab");
for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click", onTabClick);
}

// 문제 4번
function verifyInputValue() {
  let verifyInput = document.querySelector("#te_input");
  console.log(verifyInput.value);
  const regExp = /[0-9]/;
  if (regExp.test(verifyInput.value)) {
    alert("숫자는 입력할 수 없습니다.");
    return false;
  }
}
