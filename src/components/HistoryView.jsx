import "./HistoryView.css";
import { useDiaryHistory } from "../hooks/useDiaryHistory";

function HistoryView({ setView }) {
  const diary = useDiaryHistory();

  const diaryArray = Object.entries(diary);

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button className="back-btn" onClick={() => setView("main")}>
          &lt;
        </button>
        <h4>다이어리 기록</h4>
      </div>
      {diaryArray.map(([date, value]) => (
        <div key={date} className="diary-item">
          <div className="diary-date">{date}</div>
          <div>{value}</div>
        </div>
      ))}
    </>
  );
}
export default HistoryView;
