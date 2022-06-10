import React from 'react'
import { marked } from 'marked';
import Parser from 'html-react-parser';

export default function Previewer(props) {
    function parseText() {
        // Parse to markdown
        var text = marked.parse(props.text, { breaks: true })

        // Parse to render in html
        return (
            <div id="preview">
                {Parser(text)}
            </div>
        )
    }

    return (
        <section id="preview-section">
            <h2 className="section-title">Preview</h2>
            {parseText()}
        </section>
    )
}