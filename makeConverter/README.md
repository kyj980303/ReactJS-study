# React-study

<h2>react status 사용법과 status를 사용해서 변환기 만들기</h2>

✏️ React.useState()를 사용하는 이유

React.useState()를 사용하면 자동으로 변화된 값을 리랜더링해주기 떄문에 UI를 새로고침해주는 코드를 계속 넣어줄 필요가 없다.

✏️ React.useState()를 사용법

const [change, setChange] = React.useState(0); 이때 0은 change의 초가값이다.<br>
change => 변할 데이터 초기값 <br>
setChange => 초기값을 변경시킬 함수명<br>
setChange함수가 호출되면 새로고침을 할 필요없이 change값이 변경된다.
