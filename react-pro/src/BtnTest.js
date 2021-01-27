import { useState } from 'react'
import { AiButton } from '@ai/ui-components-react'

function BtnTest() {
    const [count, setCount] = useState(0)

    const handleClick = (event) => {
        setCount(count + 1)
        console.log(event)
    }

    const renderData = () => {
        let data = []
        for (let i = 0; i < 500; i++) {
            const component = (
                <div key={`${i}-0`} className={"item"}>
                    <AiButton key={`${i}-1`} className={"btn-test"} >按钮1</AiButton>
                    <AiButton key={`${i}-2`} className={"btn-test"}>按钮2</AiButton>
                    <AiButton key={`${i}-3`} className={"btn-test"}>按钮3</AiButton>
                    <AiButton key={`${i}-4`} className={"btn-test"}>按钮4</AiButton>
                    <AiButton key={`${i}-5`} className={"btn-test"}>按钮5</AiButton>
                    {/* <button key={`${i}-1`} class={"btn-origin"}>按钮1</button>
					<button key={`${i}-2`} class={"btn-origin"}>按钮2</button>
					<button key={`${i}-3`} class={"btn-origin"}>按钮3</button>
					<button key={`${i}-4`} class={"btn-origin"}>按钮4</button>
					<button key={`${i}-5`} class={"btn-origin"}>按钮5</button> */}
                </div>
            )
            data = [...data, component]
        }

        return data
    }

    return (
        <div className="item">
            <div>
                <p>点击次数：{count}</p>
                <AiButton onAiClick={handleClick}>点击</AiButton>
                {renderData()}
            </div>
        </div>
    );
}

export default BtnTest;
