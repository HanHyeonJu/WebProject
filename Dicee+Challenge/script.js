// 상수 const로 태그 객체를 저장(자바스크립트는 상수 변수로 불러오지 않으면 일일히 다 써야함)
// 객체에서는 다 문자열로 작성
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const h1 = document.querySelector('h1'); // 태그는 id . class # 처럼 안 해줘도 됨

// 랜덤 숫자를 만들어서 그 숫자값의 주사위를 출력함
//변수 let(자바스크립트는 타입이 필요없음)
let n1 = Math.floor(Math.random() * 6) + 1; // math.random()*6 만 하면 0~5.99까지 나온다고함
let n2 = Math.floor(Math.random() * 6) + 1;

console.log(n1);
console.log(n2);

img1.setAttribute('src', 'images/dice' + n1 + '.png');
img2.setAttribute('src', 'images/dice' + n2 + '.png');

if (n1 > n2) {
  h1.textContent = '🚩Player 1 Win!';
} else if (n1 < n2) {
  h1.textContent = 'Player 2 Win!🚩';
} else {
  h1.textContent = 'Draw!';
}
