import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import './MainView.css';

function MainView({ setView }) {
  const [questions, setQuestions] = useState();
  const today = dayjs();
  // const date = today.get('D');
  const date = 20;
  const answers = JSON.parse(localStorage.getItem('diary') || {});
  const [input, setInput] = useState(answers[date]);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/hackurity01/simple-diary/main/src/questions.json',
      { method: 'GET' }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuestions(data);
      });
  }, []);

  if (!questions) {
    return null;
  }

  return (
    <>
      <div className='header'>
        <div>
          {today.get('y')}년 {today.get('M') + 1}월 {date}일
        </div>
        <div>
          <button
            className='history-btn'
            onClick={() => {
              setView(false);
            }}
          >
            기록 보기
          </button>
        </div>
      </div>
      <div className='question'>{questions[date]}</div>
      <div className='content'>
        <textarea
          value={input}
          onChange={(e) => {
            const value = e.target.value;
            console.log('onChange');
            setInput(value);
            localStorage.setItem(
              'diary',
              // ..answers를 추가함으로써 다른 날짜의 내용도 유지함
              JSON.stringify({ ...answers, [date]: value })
            );
          }}
        />
      </div>
    </>
  );
}

// MainView.propTypes = {
//   setView: PropTypes
// }

export default MainView;
