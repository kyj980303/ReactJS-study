import { useEffect, useState } from "react";

function App2() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((counter) => counter + 1);
  const onChange = (event) => setKeyword(event.target.value);

  // useEffect는 한 번만 렌더링하고 다시 리렌더링 되지 않게해준다.
  // useEffect는 또 렌더링 될 필요가 없을 때 사용한다. ex) API
  useEffect(() => {
    console.log("I run only once");
  }, []);

  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  },[keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  useEffect(() => {
    console.log("I run when 'keyword' and 'counter' changes.");
  }, [keyword, counter]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App2;
