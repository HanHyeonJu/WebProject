// 입력할 태그 객체
const insert = document.getElementById('insert'); //insert는 전체 태그의 id

// 키 입력 이벤트? 윈도우창에 이벤트 발생
// 직접 무언가를 클릭하거나 어느 창에 입력을 하는 것이 아니기 때문에 윈도우로 이벤트를 준다
window.addEventListener('keydown', (e) => {
  // 매개변수는 이벤트리스너를 사용하면 그냥 아무 변수나 넣을 수 있음(for each랑 비슷하다고 보면 됨)
  //1console.log(e.key);
  // console.log(e.keyCode);
  // console.log(e.code);
  insert.innerHTML = `
  <div class="key">
  ${e.key}
  <small>event.key</small>
</div>

<div class="key">
  ${e.keyCode}
  <small>event.keyCode</small>
</div>

<div class="key">
  ${e.code}
  <small>event.code</small>
</div>`;
});
/*innerHTML = insert안의 HTML 태그들이 다 들어가는 것*/

//마우스 클릭 이벤트(키보드처럼 마우스도 윈도우이벤트를 줄 수 있다는 걸 알아보려고 한 거임 키입력 프로젝트와 관련없음)
window.addEventListener('click', (e) => {
  console.log(`${e.clientX}px, ${e.clientY}px`); // x,y좌표 콘솔에 출력 됨
});
