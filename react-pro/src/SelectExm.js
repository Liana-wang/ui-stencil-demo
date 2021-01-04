import * as React from 'react'
import { AiSelect, AiSelectOption } from '@ai/ui-components-react'

export default class SelectExm extends React.Component {
    state = {
        selected: {
            id: '44',
            text: 'JavaScript'
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
    //     this.setState({
    //         selected: {
    //             id: '44',
    //             text: 'JavaScript'
    //         }
    //     })
    // }


    changeSelect = (ev) => {
        console.log(ev)
        this.setState({
            selected: ev.detail.value
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
                        value={this.state.selected}
                        placeholder={'请选择'}
                        onAiChange={this.changeSelect}
                        compareWith={'id'}
                    >
                        {
                            this.options.map((option, index) => (<AiSelectOption value={option} key={index}>{option.text}</AiSelectOption>))
                        }
                    </AiSelect>
                </div>
            </div>
        )
    }
}