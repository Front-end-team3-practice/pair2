// 1번 해결 완료
const $changeText = document.getElementsByClassName("disp")[0];
$changeText.innerText = "변경되었습니다!!";

// 2번 해결 중...
function findNode(nodes, tag) {
  let find;
  for (let node of nodes) {
    if (node.tagName === tag.toUpperCase()) return (find = node);
  }
  return find;
}
function colorTransform(e) {
  const $changeColor = findNode(e.parentNode.children, "div");
  console.log($changeColor);
  $changeColor.style.backgroundColor = "#f00";
}

// 4번 숫자 입력되면 alert 뜨는 기능만 구현함...
const rgexp = /[0-9]/;
let $checkNum = document
  .querySelector("#te_input")
  .addEventListener("keyup", (e) => {
    if (rgexp.test(e.key)) alert("숫자가 입력되었습니다.");
  });
