import { useState } from 'react'
import { AiButton, AiStringfy } from '@ai.s/ui-components-react'

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
            <h3>button demo</h3>
            <div>
                <p>点击次数：{count}</p>
                <p>
                    <span>default样式: </span>
                    <AiButton onAiClick={handleClick}>Default Btn</AiButton>
                    <AiButton onAiClick={handleClick} disabled={true}>Default Btn(disabled)</AiButton>
                    <span>default危险: </span>
                    <AiButton onAiClick={handleClick} danger={true}>Default Btn</AiButton>
                    <AiButton onAiClick={handleClick} disabled={true} danger={true}>Default Btn(disabled)</AiButton>
                </p>
                <p>
                    <span>primary样式: </span>
                    <AiButton onAiClick={handleClick} type={'primary'}>Primary Btn</AiButton>
                    <AiButton onAiClick={handleClick} type={'primary'} disabled={true}>Primary Btn(disabled)</AiButton>
                    <span>primary危险: </span>
                    <AiButton onAiClick={handleClick} type={'primary'} danger={true}>Primary Btn</AiButton>
                    <AiButton onAiClick={handleClick} type={'primary'} disabled={true} danger={true}>Primary Btn(disabled)</AiButton>
                </p>
                <p>
                    <span>dashed样式: </span>
                    <AiButton onAiClick={handleClick} type={'dashed'}>Dashed Btn</AiButton>
                    <AiButton onAiClick={handleClick} type={'dashed'} disabled={true}>Dashed Btn(disabled)</AiButton>
                    <span>dashed危险: </span>
                    <AiButton onAiClick={handleClick} type={'dashed'} danger={true}>Dashed Btn</AiButton>
                    <AiButton onAiClick={handleClick} type={'dashed'} disabled={true} danger={true}>Dashed Btn(disabled)</AiButton>
                </p>
                <p>
                    <span>text样式: </span>
                    <AiButton onAiClick={handleClick} type={'text'}>Text Btn</AiButton>
                    <AiButton onAiClick={handleClick} type={'text'} disabled={true}>Text Btn(disabled)</AiButton>
                    <span>text危险: </span>
                    <AiButton onAiClick={handleClick} type={'text'} danger={true}>Text Btn</AiButton>
                    <AiButton onAiClick={handleClick} type={'text'} disabled={true} danger={true}>Text Btn(disabled)</AiButton>
                </p>
                <p>
                    <span>link样式: </span>
                    <AiButton onAiClick={handleClick} type={'link'} href="http://www.baidu.com">Link Btn</AiButton>
                    <AiButton onAiClick={handleClick} type={'link'} href="http://www.baidu.com" disabled>Link Btn(disabled)</AiButton>
                    <span>link危险：</span>
                    <AiButton onAiClick={handleClick} type={'link'} href="http://www.baidu.com" target={'blank'} danger>Link Btn</AiButton>
                    <AiButton onAiClick={handleClick} type={'link'} href="http://www.baidu.com" disabled danger>Link Btn(disabled)</AiButton>
                </p>
                <p>
                    <span>circle样式：</span>
                    <AiButton onAiClick={handleClick} type={'primary'} shap={'circle'}>A</AiButton>
                    <AiButton onAiClick={handleClick} type={'primary'} shap={'circle'} disabled={true}>A</AiButton>
                    <span>circle危险：</span>
                    <AiButton onAiClick={handleClick} type={'primary'} shap={'circle'} danger={true}>A</AiButton>
                    <AiButton onAiClick={handleClick} type={'primary'} shap={'circle'} disabled={true} danger={true}>A</AiButton>
                </p>
                <p>
                    <span>round样式：</span>
                    <AiButton onAiClick={handleClick} type={'primary'} shap={'round'}>Round Btn</AiButton>
                    <AiButton onAiClick={handleClick} type={'primary'} shap={'round'} disabled={true}>Round Btn</AiButton>
                    <span>round危险：</span>
                    <AiButton onAiClick={handleClick} type={'primary'} shap={'round'} danger={true}>Round Btn</AiButton>
                    <AiButton onAiClick={handleClick} type={'primary'} shap={'round'} disabled={true} danger={true}>Round Btn</AiButton>
                </p>

                <p>
                    <span>large尺寸：</span>
                    <AiButton onAiClick={handleClick} type={'primary'} size={'large'}>Round Btn</AiButton>
                    <AiButton onAiClick={handleClick} type={'primary'} size={'large'} disabled>Round Btn</AiButton>
                </p>
                <p>
                    <span>small尺寸：</span>
                    <AiButton onAiClick={handleClick} type={'primary'} size={'small'}>Round Btn</AiButton>
                    <AiButton onAiClick={handleClick} type={'primary'} size={'small'} disabled>Round Btn</AiButton>
                </p>


                <div style={{ width: 1000, backgroundColor: '#bec8c8', margin: 'auto', paddingTop: 20, paddingBottom: 20 }}>
                    <span style={{ display: 'block' }}>幽灵按钮</span>
                    <p>
                        <span>幽灵default：</span>
                        <AiButton onAiClick={handleClick} ghost>Ghost default</AiButton>
                        <AiButton onAiClick={handleClick} ghost disabled={true}>Ghost default(disabled)</AiButton>
                        <span>default危险: </span>
                        <AiButton onAiClick={handleClick} ghost danger={true}>Ghost default</AiButton>
                        <AiButton onAiClick={handleClick} ghost disabled={true} danger={true}>Ghost default(disabled)</AiButton>
                    </p>
                    <p>
                        <span>幽灵primary：</span>
                        <AiButton onAiClick={handleClick} type={'primary'} ghost>Ghost primary</AiButton>
                        <AiButton onAiClick={handleClick} type={'primary'} ghost disabled>Ghost primary(disabled)</AiButton>
                        <span>primary危险: </span>
                        <AiButton onAiClick={handleClick} type={'primary'} ghost danger>Ghost primary</AiButton>
                        <AiButton onAiClick={handleClick} type={'primary'} ghost disabled danger>Ghost primary(disabled)</AiButton>
                    </p>
                    <p>
                        <span>幽灵dashed：</span>
                        <AiButton onAiClick={handleClick} type={'dashed'} ghost>Ghost dashed</AiButton>
                        <AiButton onAiClick={handleClick} type={'dashed'} ghost disabled>Ghost dashed(disabled)</AiButton>
                        <span>primary危险: </span>
                        <AiButton onAiClick={handleClick} type={'dashed'} ghost danger>Ghost dashed</AiButton>
                        <AiButton onAiClick={handleClick} type={'dashed'} ghost disabled danger>Ghost dashed(disabled)</AiButton>
                    </p>
                    <p>
                        <span>幽灵text：</span>
                        <AiButton onAiClick={handleClick} type={'text'} ghost>Ghost text</AiButton>
                        <AiButton onAiClick={handleClick} type={'text'} ghost disabled>Ghost text(disabled)</AiButton>
                        <span>text危险: </span>
                        <AiButton onAiClick={handleClick} type={'text'} ghost danger>Ghost text</AiButton>
                        <AiButton onAiClick={handleClick} type={'text'} ghost disabled danger>Ghost text(disabled)</AiButton>
                    </p>
                    <p>
                        <span>幽灵link：</span>
                        <AiButton onAiClick={handleClick} type={'link'} ghost>Ghost link</AiButton>
                        <AiButton onAiClick={handleClick} type={'link'} ghost disabled>Ghost link(disabled)</AiButton>
                        <span>link危险: </span>
                        <AiButton onAiClick={handleClick} type={'link'} ghost danger>Ghost link</AiButton>
                        <AiButton onAiClick={handleClick} type={'link'} ghost disabled danger>Ghost link(disabled)</AiButton>
                    </p>
                    <p>
                        <span>幽灵circle：</span>
                        <AiButton onAiClick={handleClick} shap={'circle'} ghost>G</AiButton>
                        <AiButton onAiClick={handleClick} shap={'circle'} ghost disabled>G</AiButton>
                        <span>circle危险: </span>
                        <AiButton onAiClick={handleClick} shap={'circle'} ghost danger>G</AiButton>
                        <AiButton onAiClick={handleClick} shap={'circle'} ghost disabled danger>G</AiButton>
                    </p>
                    <p>
                        <span>幽灵round：</span>
                        <AiButton onAiClick={handleClick} type="dashed" shap={'round'} ghost>Ghost</AiButton>
                        <AiButton onAiClick={handleClick} type="dashed" shap={'round'} ghost disabled>Ghost(disabled)</AiButton>
                        <span>circle危险: </span>
                        <AiButton onAiClick={handleClick} type="dashed" shap={'round'} ghost danger>Ghost</AiButton>
                        <AiButton onAiClick={handleClick} type="dashed" shap={'round'} ghost disabled danger>Ghost(disabled)</AiButton>
                    </p>
                </div>

                {/* {renderData()} */}
            </div>
        </div>
    );
}

export default BtnTest;
