// 배열 객체를 생성해서 사운드 이름을 하나씩 넣기
const sounds = ['박수', '부우', '승리', '타다', '틀림', '한숨'];

// 각각의 사운드 이름으로 버튼 태그를 생성(버튼 이름생성)
sounds.forEach((sound) => {
  const btn = document.createElement('button'); //태그를 생성하기(js로)
  btn.classList.add('btn'); //클래스 btn을 버튼 태그에 추가

  btn.textContent = sound; //사운드 이름을 태그 컨텐트(내용)으로 저장

  document.getElementById('buttons').appendChild(btn); // buttons에 자식 태그로 btn태그를 붙인다

  //각각의 버튼에 클릭하면 이름과 같은 mp3를 실행
  btn.addEventListener('click', () => {
    stopMp3();
    document.getElementById(sound).onplay();
  });
});

function stopMp3() {
  //모든 오디오들을 선택해서 멈추게 한다
  sounds.forEach((sound) => {
    // 모든 오디오들을 선택
    const song = document.getElementById(sound);

    // 오디오 중단시킴
    song.onpause();
    song.currentTime = 0; // 오디오가 멈추고 다시 실행했을 때 처음으로 오디오가 실행되도록 함
  });
}
