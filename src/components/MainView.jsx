import dayjs from 'dayjs';
import './MainView.css';

function MainView({ setView }) {
  const date = dayjs();

  return (
    <>
      <div className='header'>
        <div>
          {date.get('y')}년 {date.get('M') + 1}월 {date.get('D')}일
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
      <div className='question'>(질문)</div>
      <div className='content'>
        <textarea
          onChange={() => {
            console.log('onChange');
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
