// 사용할 객체를 상수로
const h3 = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
// id 선택시 getElementByID를 사용('id') 그 외 querySelector
const body = document.getElementById('gradient');
// 이벤트리스너
// const h1 = document.querySelector('h1');
// const button = document.querySelector('button');

// button.addEventListener('click', set); // '이벤트', 함수이름 : 이벤트를 하면 함수 실행

// function set() {
//   h1.textContent = '클릭했음';
//   console.log('클릭했음');
// }

function set() {
  body.style.background =
    'linear-gradient(to right,' + color1.value + ',' + color2.value + ')';
}

color1.addEventListener('input', set); // 색을 넣는 것이기 때문에 input
color2.addEventListener('input', set);
