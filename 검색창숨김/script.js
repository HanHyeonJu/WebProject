// input, 버튼, search
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

// 버튼을 클릭하면 search에 active 클래스를 추가하고 toggle 클래스를 주어 active가 있으면 삭제 없으면 추가 할 수있게 함
btn.addEventListener('click', () => {
  search.classList.toggle('active');
  input.focus(); // input창에 자동으로 입력 가능 커서가 생기도록 함
});
