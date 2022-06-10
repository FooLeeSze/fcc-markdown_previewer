import React from 'react'
import Previewer from './Previewer';
import {defaultText} from './defaultText'


export default function Editor() {
    const [input, setInput] = React.useState(defaultText);

    // Set input value on change
    function handleChange(event) {
        setInput(event.target.value)
    }

    return (
        <div id="main-content">
            <section id="editor-section">
                <h2 className="section-title">Editor</h2>
                <textarea id="editor" onChange={handleChange} defaultValue={input} />
            </section>
            <Previewer text={input} />
        </div>
    )
}