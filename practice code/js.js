


function set_up_editor(EDITOR) {

    window.editor = ace.edit(EDITOR);
    editor.setTheme("ace/theme/twilight");
    editor.getSession().setMode("ace/mode/html");
    editor.focus();
    editor.setOptions({
      fontSize: "10pt",
      fontFamily: "Menlo, Monaco, Consolas, 'Courier New', monospace",
      showLineNumbers: true,
      showGutter: true,
      vScrollBarAlwaysVisible:false,
      enableBasicAutocompletion: true, enableLiveAutocompletion: true,
      enableSnippets: true
    });
  
    editor.setShowPrintMargin(true);
    editor.setBehavioursEnabled(true);
    
}

function runcode(result) {
	var idoc = document.getElementById(result).contentWindow.document;
    idoc.open();
    code = editor.getValue();
    idoc.write(code);
    idoc.close();
}
set_up_editor("code1");

runcode("result1")