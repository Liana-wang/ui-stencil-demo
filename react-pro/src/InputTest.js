import { useState } from 'react'
import { AiInput } from '@ai.s/ui-components-react'
import Icon from './Icon'

function InputTest() {
    const [value, setValue] = useState('')

    return (
        <div style={{ margin: 'auto', paddingBottom: 200 }}>
            <h3>input demo</h3>
            <p>
                <span>基本使用</span>
                <span className={'input-item'}><AiInput placeholder='请输入' value={value} onAiChange={({ detail }) => setValue(detail.value)} /></span>
                <span>有默认值</span>
                <span className={'input-item'}><AiInput placeholder='请输入' value={value} defaultValue={'adasdasd'} /></span>
                <span>禁用</span>
                <span className={'input-item'}><AiInput placeholder='请输入' value={value} defaultValue={'adasdasd'} disabled /></span>
                <span>只读</span>
                <span className={'input-item'}><AiInput placeholder='请输入' value={value} readonly /></span>
            </p>
            <p>
                <span>无边框</span>
                <span className={'input-item'}><AiInput placeholder='请输入' bordered={false} /></span>
                <span>有默认值</span>
                <span className={'input-item'}><AiInput placeholder='请输入' defaultValue={'fffffff'} bordered={false} /></span>
                <span>禁用</span>
                <span className={'input-item'}><AiInput placeholder='请输入' defaultValue={'fffffff'} bordered={false} disabled /></span>
                <span>只读</span>
                <span className={'input-item'}><AiInput placeholder='请输入' defaultValue={'fffffff'} bordered={false} readonly /></span>
            </p>
            <p>
                <span>前缀</span>
                <span className={'input-item'}>
                    <AiInput placeholder='请输入' hasPrefix>
                        <Icon slot='prefix' />
                    </AiInput>
                </span>
            </p>
            <p>
                <span>后缀</span>
                <span className={'input-item'}>
                    <AiInput placeholder='请输入' hasSuffix>
                        <Icon slot='suffix' />
                    </AiInput>
                </span>
            </p>
            <p>
                <span>前缀/后缀</span>
                <span className={'input-item'}>
                    <AiInput placeholder='请输入' hasPrefix hasSuffix>
                        <Icon slot='prefix' />
                        <Icon slot='suffix' />
                    </AiInput>
                </span>
            </p>
            <p>
                <span>前缀/后缀-禁用</span>
                <span className={'input-item'}>
                    <AiInput placeholder='请输入' disabled hasPrefix hasSuffix defaultValue={'hhhh'}>
                        <Icon slot='prefix' />
                        <Icon slot='suffix' />
                    </AiInput>
                </span>
            </p>
            <p>
                <span>带删除按钮</span>
                <span className={'input-item'}>
                    <AiInput placeholder='请输入' allowClear defaultValue={'sdsd'} onAiPressEnter={(e) => console.log(e)} />
                </span>
            </p>
            <p>
                <span>最多输入10个字符</span>
                <span className={'input-item'}>
                    <AiInput placeholder='请输入' defaultValue={'sdsd'} maxLength={10} />
                </span>
            </p>
        </div>
    );
}

export default InputTest;
