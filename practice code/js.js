

//set up the editor
function set_up_editor(EDITOR) {

    window.editor = ace.edit(EDITOR);
    editor.setTheme("ace/theme/twilight");
    editor.getSession().setMode("ace/mode/html");
    editor.setValue(`<html>
    <body>
        
    </body>
</html>`)
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

// run the code inside the small editor
function runcode(result) {
	var idoc = document.getElementById(result).contentWindow.document;
    idoc.open();
    code = editor.getValue();
    idoc.write(code);
    idoc.close();
}
set_up_editor("code1");
runcode("result1")


// show or hide function
function show_hide(ID){
  display_style=document.getElementById(ID).style.display
  if (display_style=="none"){
    document.getElementById(ID).style.display="block"
  }
  else {document.getElementById(ID).style.display="none"}
}



// track the list element when clicked
function trackElement(id){  
  var x = document.getElementsByTagName("li");
  for(i=0;i<x.length;i++){
      x[i].style.border=""
  }
  document.getElementById(id).style.border="1px solid #e67e22"
}


//change view to large / small for the small editor in the tutorial
var viewChanged= true;
function changeView(id){
  if (viewChanged==true){
    document.getElementById(id).style.width="110%"
    document.getElementById(id).style.height="500px"
    document.getElementById(id).style.transform="translateX(-50px)"
    document.getElementById("bg-modal").style.display="block"

    viewChanged=false
  }
  else {// turn back into the normal stage
    document.getElementById(id).style.width="80%"
    document.getElementById(id).style.height="350px"
    document.getElementById(id).style.transform="translateX(0)"
    document.getElementById("bg-modal").style.display="none"
    
    viewChanged=true
  }
}