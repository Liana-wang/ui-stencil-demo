import * as React from 'react'
import { AiSelect, AiSelectOption } from '@ai/ui-components-react'

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

    newOptions = [
        'React',
        'Vue',
        'Angular',
        'JavaScript',
    ]

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({
    //             selected: {
    //                 id: '44',
    //                 text: 'JavaScript',
    //             }
    //         })
    //     }, 1000);
    // }


    changeSelect = (ev) => {
        console.log(ev)
        this.setState({
            selected: ev.detail.selected
        })
    }

    compare = (value, compareValue) => {
        return value && compareValue ? value.id === compareValue.id : value === compareValue
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
                            this.options.map((option, index) => (<AiSelectOption option={option} key={index}>{option.text}</AiSelectOption>))
                        }
                    </AiSelect>
                </div>

                {/* <div className={'select-wrapper'}>
                    <AiSelect
                        value={this.state.selected}
                        placeholder={'请选择'}
                        onAiChange={this.changeSelect}
                    >
                        <AiSelectOption value={'React'} key={1}>{'React'}</AiSelectOption>
                        <AiSelectOption value={'Vue'} key={2}>{'Vue'}</AiSelectOption>
                        <AiSelectOption value={'JS'} key={3}>{'JS'}</AiSelectOption>
                    </AiSelect>
                </div> */}
            </div>
        )
    }
}