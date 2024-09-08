import "./MainView.css";
import { useState } from "react";

const diary = JSON.parse(window.localStorage.getItem("diary") || "{}");

function MainView(props) {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();

  const [text, setText] = useState(diary[date]);

  const today = `${year}년 ${month}월 ${date}일`;

  return (
    <>
      <div className="header">
        <div>{today}</div>
        <div>
          <button
            onClick={() => {
              props.setView("history");
            }}>
            버튼
          </button>
        </div>
      </div>
      <div className="content">
        <textarea
          value={text}
          onChange={(e) => {
            const value = e.target.value;
            setText(value);
            diary[date] = value;
            window.localStorage.setItem(
              "diary",
              JSON.stringify({ [date]: value })
            );
          }}
        />
      </div>
    </>
  );
}

export default MainView;
