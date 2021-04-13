import React, { Component } from 'react'
import { AiButton } from '@ai.s/ui-components-react'


export default class Example extends Component<unknown, unknown> {
    state = {
        selected: {
            id: '11',
            text: 'React'
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

    render() {
        return (
            <div>
                <AiButton>确定</AiButton>
            </div>
        )
    }
}
