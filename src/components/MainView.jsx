import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import './MainView.css';

function MainView({ setView }) {
  const [questions, setQuestions] = useState();
  const today = dayjs();
  const answers = JSON.parse(localStorage.getItem('diary') || {});
  const [input, setInput] = useState(answers[today.get('D')]);

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
          {today.get('y')}년 {today.get('M') + 1}월 {today.get('D')}일
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
      <div className='question'>{questions[`${today.get('D')}`]}</div>
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
              JSON.stringify({ ...answers, [today.get('D')]: value })
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
