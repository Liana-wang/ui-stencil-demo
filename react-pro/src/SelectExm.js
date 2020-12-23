import * as React from 'react'
import { AiSelect, AiSelectOption } from '@ai/ui-components-react'

export default class SelectExm extends React.Component {
    state = {
        selected:
        {
            id: '11',
            text: 'React'
        },
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

    changeSelect = (ev) => {
        console.log(ev)
        this.setState({
            selected: ev.detail.value
        })
    }

    render() {
        return (
            <div>
                <p>selected: {this.state.selected.text}</p>
                <AiSelect
                    value={this.state.selected}
                    onAiChange={this.changeSelect}
                    compareWith={'id'}
                >
                    {
                        this.options.map((option, index) => (<AiSelectOption value={option} key={index}>{option.text}</AiSelectOption>))
                    }
                </AiSelect>
            </div>
        )
    }
}