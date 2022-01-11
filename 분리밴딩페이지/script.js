// 왼쪽, 오른쪽, 컨테이너 상수 선언
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

// 마우스 엔터 이벤트 발생시 컨테이너에 hover-left클래스 추가, 마우스 리브시 제거
left.addEventListener('mouseenter', () =>
  container.classList.add('hover-left')
);
left.addEventListener('mouseleave', () =>
  container.classList.remove('hover-left')
);
// 오른쪽 마우스 엔터 이벤트 발생시 컨테이너에 hover-right클래스 추가
right.addEventListener('mouseenter', () =>
  container.classList.add('hover-right')
);
right.addEventListener('mouseleave', () =>
  container.classList.remove('hover-right')
);
