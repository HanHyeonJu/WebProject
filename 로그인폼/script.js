// 라벨들을 선언
const labels = document.querySelectorAll('.form-control label');

labels.forEach((label) => {
  label.innerHTML = label.textContent //"이메일"
    .split('') // "이", "메", "일"
    // split하면 자동으로 ['이','메','일'] 이렇게 배열이 생성됨
    .map((c, i) => `<span style="transition-delay:${i * 50}ms">${c}</span>`) // transition-delay는 시간 의미
    // => 이는 인덱스 번호 0번 메는 인덱스 번호 1번 일은 인덱스 번호 2번으로 , 기준으로 나누어짐
    .join(''); // 각각의 span 태그를 다 합침 label.innerHTML에는 문자열로 들어가야 하기 때문에 합쳐줌 근데 왜 필요한지 아직도 모르겠음
  // join을 안 하고 실행하면 ','가 같이 나오고 또 글자는 올라가지만 split해주는 ,는 올라가지 않음 그래서 글자를 합쳐주는가 봄 합쳐진 글자를 올려야하니까
});
