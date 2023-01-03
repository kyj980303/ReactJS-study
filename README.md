# React-study

### React 정리

<hr>

### `① useState`

✏️ React.useState()를 사용하는 이유<br>
React.useState()는 변화된 값을 refresh하지 않아도 자동으로 리랜더링해주기 떄문에 UI를 새로고침해주는 코드를 넣어줄 필요가 없다.

✏️ React.useState()를 사용법<br>
const [change, setChange] = React.useState(0); 이때 0은 change의 초가값이다.<br>
change => 변할 데이터 초기값 <br>
setChange => 초기값을 변경시킬 함수명<br>
setChange함수가 호출되면 새로고침을 할 필요없이 change값이 변경된다.

### `② Props`

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

const MemorizedBtn = React.memo(Btn);

function App() {
  return (
    <div>
      <MemorizedBtn text="Save Changes" />
      <MemorizedBtn text="Continue" />
    </div>
  );
};
```

```
[참고]
React.memo : prop 값이 변경되지 않았다면 해당 코드가 불필요하게 리렌더링되는 것을 막아준다.
```

### `③ useEffect`

#### ✏️ useEffect ?

useEffect는 두개의 argument를 가지는 함수로 첫 번째 argument는 우리가 원하는 경우에만 실행하고 싶은 코드가 들어가고 두 번째 argument에는 배열이 들어간다. 만약 배열이 비어있으면 코드는 단 한 번만 실행될 것이고 배열안에 변수가 있을 경우 값이 변할 때 마다 코드가 실행된다.<br>
즉, useEffect는 우리가 코드를 언제 실행시킬지를 선택하는 것이다.

```
useEffect(() => {우리가 원하는 경우에만 실행하고 싶은 코드}, [코드가 실행되길 원하는 경우]);
```

#### ✏️ useEffect를 사용하는 이유

내가 원하는 부분만 선택해서 해당 코드를 실행시키기 위함이다. 이렇게 함으로써 불필요한 리렌더링으로 로딩되는 추가시간을 줄일 수 있다. ex) API, 타이머

#### 😯 `memo` 와 `useEffect` 의 차이점

memo는 "생성"함수에 관련된 기능으로 생성자 함수가 처리 시간이 오래 걸리는(고비용) 경우 값을 기억해 두고 값이 변경되었을 경우에만 다시 계산을 해주는 기능이고 useEffect는 API호출, 타이머 등 렌더링 과정에서 단 한 번만 호출되어도 될 기능이 렌더링마다 실행되거나, 호출과정에서 렌더링에 영향을 끼칠 수 있는 것을 모아서 따로 처리하기 위한 기능입니다. <br>
둘의 결정적인 차이는 useEffect는 해당 컴포넌트의 렌더링이 완료된 후에 실행되지만 Memo는 렌더링 중에 실행이되는 차이점이 있습니다.
