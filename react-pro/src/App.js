import * as React from 'react'
import { useState } from 'react'
import { AiButton, AiInput } from '@ai/ui-components-react'
import './App.css'

export default function App() {
  const [name, setName] = useState('')
  const [isConfirm, setIsConfirm] = useState(false)

  const changeName = (event) => {
    setName(event.target.value)

    if (isConfirm) {
      setIsConfirm(false)
    }
  }

  return (
    <div className="App">
      <div className={'logo'}>
        <img src="logo192.png" alt="" />
      </div>
      <div>
        <span>姓名: </span>
        <AiInput
          placeholder={'请输入...'}
          onAiChange={changeName}
        />
        <AiButton
          disabled={!name}
          className={'ai-btn'}
          onAiClick={(event) => setIsConfirm(true)}
        >
          <span slot="btn-icon">@</span>
          确定
        </AiButton>
        {
          isConfirm ?
            <p>Welcome! {name}</p>
            : null
        }
      </div>
    </div>
  );
}
