import React, { useState } from 'react'

export default function ReactHookPage(): React.ReactElement {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>点击次数{count}</p>
            <button onClick={() => setCount(count + 1)}>点击</button>
        </div>
    )
}

