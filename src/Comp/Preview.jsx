import React from 'react'
import { marked } from 'marked';

const Preview = (props) => {
        
        marked.setOptions({
                breaks: true,
                sanitize: true,
        });

        const renderer = new marked.Renderer();
        renderer.link = function (href, title, text) {
                return `<a target="_blank" href="${href}" alt="${title}" title="${title}">${text}</a>`;
        };

        return (
          <div
            dangerouslySetInnerHTML={{
                __html: marked(props.markdown, { renderer: renderer })
                }}
            id="preview"
          />
        );
      };

      export default Preview

