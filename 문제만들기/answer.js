// [ 물건표 만들기 ]

// 상점 물건의 이름을 가나다 순서대로 배정하고 순서대로 번호를 매기려고 합니다.
// 다음 물건들의 이름을 아래와 같이 표시하면 됩니다.

// 포도, 초콜렛, 바나나, 사과, 감자칩, 사탕, 초코우유, 식빵, 라면, 귤

// ex)
//    물품번호: 1, 물품명: 감자칩
//    물품번호: 2, 물품명: 귤
//    물품번호: 3, 물품명: 라면
//    물품번호: 4, 물품명: 바나나
//    물품번호: 5, 물품명: 사과
//    물품번호: 6, 물품명: 사탕
//    물품번호: 7, 물품명: 식빵
//    물품번호: 8, 물품명: 초코우유
//    물품번호: 9, 물품명: 초콜렛
//    물품번호: 10, 물품명: 포도

function product(arr) {
  const arrSort = arr.sort();

  arrSort.forEach((el, index) => {
    console.log(`번호: ${index + 1}`, `이름: ${el}`);
  });
}

product([
  "포도",
  "초콜렛",
  "바나나",
  "사과",
  "감자칩",
  "사탕",
  "초코우유",
  "식빵",
  "라면",
  "귤",
]);
