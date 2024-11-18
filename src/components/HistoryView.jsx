import './HistoryView.css';

function HistoryView({ setView }) {
  const answers = JSON.parse(localStorage.getItem('diary') || {});

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button
          className='back-btn'
          onClick={() => {
            setView(true);
          }}
        >
          &lt;
        </button>
        <h4>다이어리 기록</h4>
      </div>
      {Object.entries(answers).map(([key, value]) => {
        return (
          // map 돌릴 때 Key 값 필요!!
          <div key={key} className='diary-item'>
            <div className='diary-date'>{key}일</div>
            <div>{value}</div>
          </div>
        );
      })}
    </>
  );
}
export default HistoryView;
