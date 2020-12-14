import './App.css'

function App() {
  return (
    <div className="App">
      <div className={'logo'}>
        <img src="logo192.png" alt="" />
      </div>
      <my-button onClick={(event) => console.log(event)}>
        <span slot="btn-icon">@</span>
        点击
      </my-button>
    </div>
  );
}

export default App;
