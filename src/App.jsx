import "./App.css";
import { useState } from "react";
import MainView from "./components/MainView";
import HistoryView from "./components/HistoryView";

function App() {
  const [view, setView] = useState("main"); // "main" | "history"

  return (
    <div className="container">
      {view === "main" && <MainView setView={setView} />}
      {view === "history" && <HistoryView />}
    </div>
  );
}

export default App;
