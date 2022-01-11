// 본인 api_key입력하고 인기도순으로 영화 정보 주소
// api도 무조건 객체로 만들어서 사용해야하는건가??
const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a052248bc1c540aa3eb5e214e2efd1cc&language=ko&page=1';
// api를 사용하는 이유는 다른 곳에 있는 데이터를 가져오는 빠르고 안정적인 방법을 제공하기 때문
// api를 이용해서 영화의 정보를 가져옴
// 포스터 이미지 앞의 주소
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
// 검색도 api를 이용해서 사용
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=a052248bc1c540aa3eb5e214e2efd1cc&language=ko&query="';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// 영화 정보를 가져올 함수 호출
getMovies(API_URL);

// api에 있는 영화의 정보를 가져올 함수
async function getMovies(url) {
  const res = await fetch(url); // fetch로 api_url의 정보가 저장된 url을 가져옴, await는 url을 통해서 데이터를 다 전송받을 동안 다른 것들을 실행하지 말게하고 대기시키기위해 사용(자바스크립트는 비동기프로그램이기 때문)
  // 비동기프로그램 동기프로그램에 관한 건 velog참고
  // 데이터 문자열을 제이슨으로 보기 좋게 변환하여 data로 저장
  // url로 받은 데이터의 문자열은 줄줄줄줄 적혀있어서 보기 어려움
  const data = await res.json();

  // 필요한 영화 정보만 배열로 저장
  //console.log(data.results);
  영화보여주기(data.results);
}

// 검색창으로 영화를 검색할 때(이벤트)
// input창으로 검색했을 때 form으로 submit이벤트 작동시킴 e는 이벤트에 대한 객체
form.addEventListener('submit', (e) => {
  e.preventDefault(); // 원래 form submit이벤트는 서버로 입력 데이터를 보내는데 그 이벤트를 제거(?)
  // 제거해야 하는 이유? 서버프로그램 하면서 알게 될 거임
  const searchTerm = search.value;
  //console.log(searchTerm);
  // 공백이아닐경우
  if (searchTerm && searchTerm != '') {
    getMovies(SEARCH_API + searchTerm); // 주소로 찾는거라서 getMovies사용
    search.value = ''; // 검색하고 나면 검색창 공백으로 만들어줌
  } else {
    window.location.reload(); // 검색이 실패할 경우 새로고침
  }
});

// 가져온 정보들을 화면에 표시
// 영화정보를 저장한 배열이 movies로 넘어감
function 영화보여주기(movies) {
  main.innerHTML = ''; // HTML안에 있는 main을 비워줌

  movies.forEach((movie) => {
    // 여기에서 movie는 movies배열에 있는 영화 중 하나에 대한 정보
    // movie안에 들어있는 정보들 중 필요한 것들을 가져와 객체로 만들어줌
    const title = movie.title;
    const poster_path = movie.poster_path;
    const vote_average = movie.vote_average;
    const overview = movie.overview;

    // HTML의 div 태그를 moveEl 객체를 생성해 줌
    const moveEl = document.createElement('div');
    moveEl.classList.add('movie'); // moveEl객체에 movie의 정보를 넣을 수 있게 하기 위하여 clastList.add사용?

    moveEl.innerHTML = `
    <img
          src="${IMG_PATH + poster_path}"
          alt="${title}"
        />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${평점색선택(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <!-- 상세보기는 처음에는 안 보이다가 마우스를 올리면 보일 수 있도록 함 -->
          <h3>상세 보기</h3>
          ${overview}
        </div>
    `; // 벡틱을 이용하여 movie의 정보들을 변수를 이용해 가져온다
    // moveEl을 하나의 movie 객체로 만들어서 main의 자식태그로 만들어 main에 달아준다
    main.appendChild(moveEl);
  });
}

function 평점색선택(n) {
  // 이 함수는 지금 이 함수 자체로 실행을 하는게 아니고 다른 곳에서 호출을 해서 실행이 되는 것이기 때문에 매개변수는 아무거나 넣어도 되는 것임 그래서 이 함수를 실행할 때 평점색선택(average_vote)면 변수 n이 들어간 부분에 average_vote가 들어갔다고 생각하면 됨
  // 그러니까 자바에서 함수 만들 때 매개변수 int x 넣는거랑 똑같은 거라고 보면 됨
  if (n >= 8) {
    return 'green';
  } else if (n >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}
