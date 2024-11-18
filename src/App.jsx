import { useState } from 'react';
import './App.css';
import HistoryView from './components/HistoryView';
import MainView from './components/MainView';

function App() {
  const [view, setView] = useState(true);

  return (
    <div className='container'>
      {view ? (
        <MainView setView={setView} />
      ) : (
        <HistoryView setView={setView} />
      )}
    </div>
  );
}

export default App;
