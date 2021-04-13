ui-components-react

## 构建ui-components-react

1、yarn install   安装依赖

2、yarn build 构建

## 使用ui-components-react

在react组件中，直接引入组件：

```jsx
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