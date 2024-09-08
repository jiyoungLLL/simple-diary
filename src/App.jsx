import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const today = `${year}년 ${month}월 ${date}일`;

  return (
    <div className="container">
      <div className="header">
        <div>{today}</div>
        <div>
          <button>버튼</button>
        </div>
      </div>
      <div className="content">
        <textarea
          value={text}
          onChange={(e) => {
            const value = e.target.value;
            setText(value);
            const diary = JSON.parse(
              window.localStorage.getItem("diary") || "{}"
            );
            window.localStorage.setItem(
              "diary",
              JSON.stringify({ ...diary, [date]: value })
            );
          }}
        />
      </div>
    </div>
  );
}

export default App;
