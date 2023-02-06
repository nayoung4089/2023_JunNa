import { useState } from 'react';
import "./App.css";
import Letter from './Letter';

const App = () => {
  const [click, setclick] = useState(false);
  let [count, setCount] = useState(0);
  const [answer, setAnswer] = useState("");
  const quizArray = [
    {count:0, quiz:"나영이랑 준이는 오늘 어떤 색 옷을 입었을까요?", answer:"회색"},
    {count:1, quiz:"준이는 누구꺼게요?", answer:"나영이"},
    {count:2, quiz:"나영이는 누나인가요? (네/아니오)", answer:"네"},
    {count:3, quiz:"준이는 천재인가요? (네)", answer:"네"},
    {count:4, quiz:"오늘 가기 전 나영이한테 뽑뽀 해줄건가요? (네)", answer:"네"},
  ]
  const onClick = () =>{setclick(true)};
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setAnswer(value);
  };
  
  const onSubmit = async (event) => {
    event.preventDefault();
    if(answer === quizArray[count].answer){
      count = count + 1;
      setCount(count);
      console.log(count);
    }else{
      alert("실망이야 쟈갸 ! 다시다시 ~");
    }
    setAnswer("");
    if(count === 5){
      alert("쟈갸 멋있어 !!!")
    }
  };
  return(
    <>
    {click && <>{count === 5 && <div class="quiz"><Letter /></div>}</>}
    <div class="wrap">
    <>
    {click ?
    <>
    <>
    {count === 0 && <div class="quiz">{quizArray[0].quiz}</div>}
    {count === 1 && <div class="quiz">{quizArray[1].quiz}</div>}
    {count === 2 && <div class="quiz">{quizArray[2].quiz}</div>}
    {count === 3 && <div class="quiz">{quizArray[3].quiz}</div>}
    {count === 4 && <div class="quiz">{quizArray[4].quiz}</div>}
    </>
    {count === 5? null : 
    <>
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="띄어쓰기X"
        value={answer}
        required
        onChange={onChange}
      />
      <input type="submit" value="확인" />
    </form>
    </>}
    </> : 
    <>
    <div class="title">준나 죠아 !</div>
    <div class="quiz">쟈갸 문제 풀어조 !</div>
    <button onClick={onClick}>Start</button>
    </>
    }
    </>
    </div>
    </>
  
  )
}
export default App;