// ---------------------------------------문제 1번
window.onload = function () {
    const loadingText = document.querySelector('#display');
    loadingText.innerText = '로딩 중 변경 텍스트 입니다.';
};

// // ---------------------------------------문제 2번
function onTabClick() {
    this.classList.add('active_tab');
}
const tab = document.querySelectorAll('.tab');
for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', onTabClick);
}

// // ---------------------------------------문제 4번
let verifyInput = document.querySelector('#te_input');
// 1. 숫자 입력 방지
function verifyInputValue() {
    const regExp = /[0-9]/;
    if (regExp.test(verifyInput.value)) {
        alert('숫자가 입력되었습니다.');
        verifyInput.value = '';
        console.log(verifyInput.value);
    } else {
        return true;
    }
}
//e.target.value
verifyInput.addEventListener('keyup', verifyInputValue);

// 2. 길이 제한 attr 변경
function addAttribute() {
    verifyInput.setAttribute('maxLength', 10);
}
addAttribute();
