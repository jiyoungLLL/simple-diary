import "./MainView.css";

function MainView(props) {
  return (
    <>
      <div className="header">
        <div>(오늘 날짜)</div>
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
      <div className="question">(질문)</div>
      <div className="content">
        <textarea
          onChange={(e) => {
            console.log("onChange");
          }}
        />
      </div>
    </>
  );
}

export default MainView;
