// % 표시 글자, 백그라운드 객체 상수로 저장
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

// 로딩 숫자
let load = 0;
// setInterval = 시간만큼 반복해서 함수를 실행
let interval = setInterval(blurring, 30); //0.03초 만큼 blurring 실행

function blurring() {
  load++;
  //console.log(load);
  if (load > 99) {
    clearInterval(interval); // 위의 반복인터벌을 중지한다
  }
  // 문자열의 중간에 변수를 넣어야 할 때 즉 변수와 문자열을 같이 사용하여야 할 때 `${}'(벡틱문자열)를 이용한다
  loadText.textContent = `${load}%`; //벡틱 문자열 = ``(숫자 1 옆에 있는 따옴표), %는 그냥 문자열임, 변수와 문자열 같이 사용가능
  // 1. blur필터를 사용 처음에 흐리다가(30px) 선명하게(0px)
  // 2. 글자를 갈수록 흐리게 하기 위해 opacity를 사용(1 => 0[안 보이게])
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  // opacity는 벡틱을 사용하지 않고 filter는 벡틱을 사용하는 이유는 opacity는 그냥 숫자만 존재하지만 filtersms 'blur(xpx)'이라는 문자열과 숫자가 섞인 변수를 가져와야 하기 때문이다
}

const scale = (number, inMin, inMax, outMin, outMax) => {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};
