import * as React from 'react'
import { AiButton, AiInput } from '@ai/ui-components-react'
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
        <AiButton
          onClick={(event) => console.log(event)}
        >
          <span slot="btn-icon">@</span>
          点击
        </AiButton>
        <AiInput
          onAiChange={this.changeValue}
        />
      </div>
    );
  }
}
