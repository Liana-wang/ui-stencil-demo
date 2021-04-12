# Stencil-UI组件使用文档

> React

1. yarn add @ai.s/ui-components-react 或者 npm install @ai.s/ui-components-react
2. 使用组件

```jsx
// 按钮demo
import { useState } from 'react'
import { AiButton } from '@ai.s/ui-components-react'

function BtnTest() {
    const [count, setCount] = useState(0)

    const clickBtn = (event) => {
        setCount(count + 1)
        console.log(event)
    }

    return (
        <div className="item">
		        <div>
                <h3>button demo</h3>
                    <div>
                        <p>点击次数：{count}</p>
                        <p>
                            <span>primary样式: </span>
                            <AiButton onAiClick={clickBtn} type={'primary'}>Primary Btn</AiButton>
                        </p>
                    </div>
        		</div>
        </div>
    );
}

export default BtnTest;

```

```jsx
// 输入框demo
import { useState } from 'react'
import { AiInput } from '@ai.s/ui-components-react'

function InputTest() {
    const [inputValue, setInputValue] = useState('')

    return (
      <div>
          <h3>input demo</h3>
          <div>
              <p>输入内容：{inputValue}</p>
              <AiInput 
                placeholder='请输入' 
                value={inputValue}
                onAiChange={({ detail }) => setInputValue(detail.value)} 
                />
          </div>
      </div>
    );
}

export default InputTest;

```

```jsx
// Select demo
import * as React from 'react'
import { AiSelect, AiSelectOption } from '@ai.s/ui-components-react'

export default class SelectExm extends React.Component {
    state = {
        selected: {
            id: '22',
            text: 'Vue',
        }
    }

    options = [
        {
            id: '11',
            text: 'React'
        },
        {
            id: '22',
            text: 'Vue',
        },
        {
            id: '33',
            text: 'Angular',
        },
        {
            id: '44',
            text: 'JavaScript',
        }
    ]

    changeSelect = (ev) => {
        console.log(ev)
        this.setState({
            selected: ev.detail.selected
        })
    }

    render() {
        return (
            <div>
                <p>selected: {this.state.selected && this.state.selected.text}</p>
                <div className={'select-wrapper'}>
                    <AiSelect
                        selected={this.state.selected}
                        placeholder={'请选择'}
                        onAiChange={this.changeSelect}
                        compareWith={'id'}
                    >
                        {
                            this.options.map((option, index) => (
                              <AiSelectOption 
                                option={option} 
                                key={index}
                              >
                                {option.text}
                              </AiSelectOption>
                            ))
                        }
                    </AiSelect>
                </div>
            </div>
        )
    }
}
```

