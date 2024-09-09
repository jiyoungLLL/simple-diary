import { useDiaryHistory } from "../hooks/useDiaryHistory";
import "./MainView.css";
import { useEffect, useState } from "react";

function MainView(props) {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate() + 3;
  const today = `${year}년 ${month}월 ${date}일`;

  const diary = useDiaryHistory();
  const [text, setText] = useState(diary[today]);
  const [questions, setQuestions] = useState();

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/hackurity01/simple-diary/main/src/questions.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      });
  }, []);

  if (!questions) {
    return "loading";
  }

  return (
    <>
      <div className="header">
        <div>{today}</div>
        <div>
          <button
            className="history-btn"
            onClick={() => {
              props.setView("history");
            }}>
            기록 보기
          </button>
        </div>
      </div>
      <div className="question">{questions[date]}</div>
      <div className="content">
        <textarea
          value={text}
          onChange={(e) => {
            const value = e.target.value;
            setText(value);
            diary[today] = value;
            window.localStorage.setItem("diary", JSON.stringify(diary));
          }}
        />
      </div>
    </>
  );
}

export default MainView;
