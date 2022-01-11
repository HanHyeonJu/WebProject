// 객체 상수 만들기
const progress = document.getElementById('progress'); //막대기바
const prev = document.getElementById('prev'); //버튼 이전
const next = document.getElementById('next'); //버튼 다음
// 서클(1,2,3,4)들을 객체를 저장
const circles = document.querySelectorAll('.circle');

//단계 표시 변수
let currentActive = 1;
//다음 버튼을 클릭 했을때.
next.addEventListener('click', () => {
  currentActive++;
  // 버튼을 눌러도 이벤트가 실행되지 못하게 하는 것
  if (currentActive > circles.length) {
    currentActive = circles.length;
    //다음버튼을 계속 눌러도 서클객체의 갯수이상은 안됨
  }
  막대바업데이트();
});
prev.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
    //이전버튼을 계속 눌러도 1이하는 안됨
  }
  막대바업데이트();
});

function 막대바업데이트() {
  circles.forEach((circle, idx) => {
    //console.log(circle, idx);
    if (idx < currentActive) {
      circle.classList.add('active'); //클래스 추가
    } else {
      circle.classList.remove('active'); //클래스 제거
    }
  });
  //막대바 업데이트
  //  막대바 업데이트를 위해 active클래스가 추가 된 class들을 가져와서 배열 객체로 만들어 줌
  const actives = document.querySelectorAll('.active');
  // (active클래스가 추가된 circle의 갯수 - 1)/(원래 circle의 갯수-1)* 100'%'로 막대바로 색을 얼마씩 채울 것인가를 설정
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  //버튼을 누르지 못하게 하는 것
  if (currentActive === 1) {
    prev.disabled = true; //현재 상태가 1이면 이전버튼은 사용못함
  } else if (currentActive === circles.length) {
    next.disabled = true; //상태가 4이면 다음버튼은 사용못함
  } else {
    prev.disabled = false; //그 이외는 전부 사용가능
    next.disabled = false;
  }
}
