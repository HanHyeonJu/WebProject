// 아이디 toggle, nav를 객체로 저장
// 태그가 하나 있을 때는 id로 여러 개 있을 때는 class로 하는게 편함
const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

// 토글 X를 클릭하면 nav 객체에 active 클래스가 토글 되도록 함
toggle.addEventListener('click', () => nav.classList.toggle('active'));
// id를 객체로 만들어도 classList를 쓰는 건 상관 없는가봄?
