import { useState } from 'react';
import { motion } from 'framer-motion'


import './App.scss';
import Toolbar from './Comp/Toolbar';
import Editor from './Comp/Editor';
import Preview from './Comp/Preview';


// ALLOWS LINE BREAKS WITH RETURN BUTTON

      
     

function App() {
        const [markdown,setMarkdown]=useState(placeholder)
        const [editorMaximized,setEditorMaximized]=useState(false)
        const [previewMaximized,setPreviewMaximized]=useState(false)
          const [rotation, toggleRotation] = useState(0)


        const handleChange=(e)=>{
                setMarkdown(e.target.value);
        }
        const handleEditorMaximized =()=>{
                toggleRotation(rotation + 360)
                 setEditorMaximized(editorMaximized=>!editorMaximized)
        }
        const handlePreviewMaximized =()=>{
                toggleRotation(rotation + 360)
                 setPreviewMaximized(previewMaximized=>!previewMaximized)
        }
        
        const classes = editorMaximized
                ? ['editorWrap maximized', 'previewWrap hide', 'fa fa-compress']
                : previewMaximized
                ? ['editorWrap hide', 'previewWrap maximized', 'fa fa-compress']
                : ['editorWrap', 'previewWrap', 'fa fa-arrows-alt'];
  return (
    <div className="App">
        <motion.div   transition={{duration:0.3}} animate={{ rotate: rotation }}  className={classes[0]}>
                <Toolbar icon={classes[2]}
                        onClick={handleEditorMaximized}
                        text="Editor"/>
                <Editor markdown={markdown} 
                        onChange={handleChange} />
        </motion.div>
        <motion.div   transition={{duration:0.3}}     animate={{ rotate: rotation }}      className={classes[1]}>
                <Toolbar icon={classes[2]}
                        onClick={handlePreviewMaximized}
                        text="Previewer"/>
                <Preview markdown={markdown}  />
        </motion.div>
    </div>
  );
}

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://github.com/ogooluwanick), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![ogooluwa's Logo](namelogo.png)
`;

export default App;
