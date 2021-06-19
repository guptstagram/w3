import React from "react";
import AceEditor from "react-ace";

import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-solarized_light';
import CodeComponent from "./code.component";

const App = () => {

  const [code, setCode] = React.useState("");

  const handleHTML = (newval) => setCode(newval);

  return (
    <>
      <div className="wrapper">
        <div className="section">
          <AceEditor
            mode="html"
            theme="solarized_light"
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            setOptions={{
              enableBasicAutocompletion: false,
              enableLiveAutocompletion: false,
              enableSnippets: false,
              showLineNumbers: true,
              tabSize: 2,
            }}
            onChange={handleHTML}
          />
        </div>
        <div className="section">
          <CodeComponent code={code} />
        </div>
      </div>
    </>
  )
}

export default App;
