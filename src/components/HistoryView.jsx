import "./HistoryView.css";
import { useDiaryHistory } from "../hooks/useDiaryHistory";

function HistoryView() {
  const diary = useDiaryHistory();

  const diaryArray = Object.entries(diary);

  return (
    <>
      <h4>다이어리 기록</h4>
      {diaryArray.map(([date, value]) => (
        <div key={date} className="diary-item">
          <div>{date}</div>
          <div>{value}</div>
        </div>
      ))}
    </>
  );
}
export default HistoryView;
