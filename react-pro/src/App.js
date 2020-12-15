import * as React from 'react'
import './App.css'

export default class App extends React.Component {
  state = {
    value: '',
  }

  changeValue = (event) => {
    console.log(event)
  }

  render() {
    return (
      <div className="App">
        <div className={'logo'}>
          <img src="logo192.png" alt="" />
        </div>
        <my-button
          className={'btn'}
          onClick={(event) => console.log(event)}
        >
          <span slot="btn-icon">@</span>
          点击
        </my-button>
        <my-input
          defaultValue={'223'}
          placeholder={'请输入...'}
          value={this.state.value}
          onAiInput={this.changeValue}
          onAiBlur={(event) => console.log(event)}
        />
      </div>
    );
  }
}
