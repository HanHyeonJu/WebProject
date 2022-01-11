// 버튼을 클릭했을 때 active클래스를 faq-toggle클래스 객체에 준다
const toggles = document.querySelectorAll('.faq-toggle');

// 매개변수 toggle은 toggles에 있는 toggle 중 하나를 의미
toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  }); // classList는 말 그대로 클래스 모음이라고 생각하면 될 듯 classList.toggle을 한 이유는 classList에는 .add나 .remove할 수 있는 기능이 있는데 이걸 .toggle에 동시에 준 것 동시에 주지 않으면 답이 펼쳐지고 다시 돌아오게 할 수 없기 때문이다
});
