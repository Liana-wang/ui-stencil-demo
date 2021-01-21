import * as React from 'react'
import { useState } from 'react'
import { AiButton, AiInput, AiStringfy } from '@ai/ui-components-react'
import './App.css'
import SelectExm from './SelectExm'

export default function App() {
  const [name, setName] = useState('')
  const [isConfirm, setIsConfirm] = useState(false)

  const changeName = (event) => {
    setName(event.target.value)

    if (isConfirm) {
      setIsConfirm(false)
    }
  }

  const myEvent = (event) => {
    console.log('event', event)
  }


  return (
    <div className="App">
      <div className={'logo'}>
        <img src="logo192.png" alt="" />
      </div>
      <div>
        <div>
          <AiStringfy data={{ id: 'aa', name: 'sdsdsd' }}></AiStringfy>
        </div>
        <span>姓名: </span>
        <AiInput
          placeholder={'请输入...'}
          onAiChange={changeName}
        />
        <AiButton
          disabled={!name}
          className={'ai-btn'}
          onAiClick={(event) => setIsConfirm(true)}
          btnValue={{ id: '111', text: 'hhh' }}
        >
          <span slot="btn-icon">@</span>
          确定
        </AiButton>
        {
          isConfirm ?
            <p>Welcome! {name}</p>
            : null
        }
        <div className={'select'}>
          <SelectExm />
        </div>
        <div>
          <my-button data={JSON.stringify([{ id: '111', name: 'ddfdfdf' }])} my-event={myEvent}></my-button>
        </div>
      </div>
    </div>
  );
}
