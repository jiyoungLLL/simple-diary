function App() {
  return (
    <div
      style={{
        maxWidth: 400,
        background: "#f7f7f7",
        margin: "auto",
        height: "100vh",
      }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>Header</div>
        <div>
          <button>버튼</button>
        </div>
      </div>
      <div>
        <textarea style={{ width: "100%", boxSizing: "border-box" }} />
      </div>
    </div>
  );
}

export default App;
