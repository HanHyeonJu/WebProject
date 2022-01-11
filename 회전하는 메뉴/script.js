// 열기/닫기 버튼 객체, 컨테이너 객체
const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
open.addEventListener('click', () => {
  container.classList.add('show-nav');
});

close.addEventListener('click', () => {
  container.classList.remove('show-nav');
});
