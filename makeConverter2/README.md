# React-study

<h2>react Props 사용법과 Props를 사용해서 변환기 코드 수정하기</h2>

✏️ function Btn(Props){} Props?<br>
내가 만들고 사용하는 모든 컴포넌트들은 function Btn() -> 괄호로 argument(인자)를 받는다. 이떄 argument의 이름은 마음대로 지어줄 수 있다. 보통은 props라고 부르며 Btn으로부터 전달받은 속성이다.

✏️ function Btn(Props){} Props를 사용하는 이유 <br>
같은 버튼에 같은 스타일을 넣어주려고 할 떄 버튼의 스타일 코드를 중복으로 적는 것은 불필요하기 때문에 공통된 스타일을 모두 갖는 단 한가지의 컴포넌트로 만들어 재사용하기 위해서이다.

✏️ React.useState()를 사용법

```
function Btn({ text }) {
  return <button style={{
    backgroundColor: "tomato",
    color: "white",
    padding: "10px 20px",
    border: 0,
    borderRadius: 5,
  }}> {text} </button>;
}

function App() {
  return (
    <div>
      <Btn text="Save Changes" />
      <Btn text="Continue" />
    </div>
  );
};
```
