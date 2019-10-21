function update(){
	var idoc = document.getElementById('iframe').contentWindow.document;

  idoc.open();
  code= editor1.getValue()+"<style>"+editor2.getValue()+"</style>"+"<script>"+editor3.getValue()+"</script>"
	idoc.write(code);
	idoc.close();
}
//set up editor 1 (html)
function setupEditor1()
{
  window.editor1 = ace.edit("editor1");
  editor1.setTheme("ace/theme/twilight");
  editor1.getSession().setMode("ace/mode/html");
  editor1.setValue(`<!DOCTYPE html>
<html>
<head>

</head>
<body>
  <div id="viet"></div>
</body>
</html>`,1); //1 = moves cursor to end



  editor1.focus();
  
  
  editor1.setOptions({
    fontSize: "11pt",
    showLineNumbers: true,
    showGutter: true,
    vScrollBarAlwaysVisible:false,
    enableBasicAutocompletion: true, enableLiveAutocompletion: true,
    enableSnippets: true
  });

  editor1.setShowPrintMargin(true);
  editor1.setBehavioursEnabled(true);
  
}
//set up editor 2 (CSS)
function setupEditor2()
{
  window.editor2 = ace.edit("editor2");
  editor2.setTheme("ace/theme/twilight");
  editor2.getSession().setMode("ace/mode/css");
  editor2.setValue(`/*CSS*/
#viet{color:red}`,1); //1 = moves cursor to end
  
  editor2.focus();
  
  
  editor2.setOptions({
    fontSize: "11pt",
    showLineNumbers: true,
    showGutter: true,
    vScrollBarAlwaysVisible:false,
    enableBasicAutocompletion: true, enableLiveAutocompletion: true,
    enableSnippets: true
  });

  editor2.setShowPrintMargin(true);
  editor2.setBehavioursEnabled(true);
  
}
//set up editor 3 (JS)
function setupEditor3()
{
  window.editor3 = ace.edit("editor3");
  editor3.setTheme("ace/theme/twilight");
  editor3.getSession().setMode("ace/mode/javascript");
  editor3.setValue(`/*javscript*/
viet.innerHTML=""`,1); //1 = moves cursor to end

  // editor3.getSession().on('change', function() {
  //   update();
  // });

  editor3.focus();
  
  
  editor3.setOptions({
    fontSize: "11pt",
    showLineNumbers: true,
    showGutter: true,
    vScrollBarAlwaysVisible:false,
    enableBasicAutocompletion: true, enableLiveAutocompletion: true,
    enableSnippets: true
  });
  editor3.setShowPrintMargin(true);
  editor3.setBehavioursEnabled(true);
  
}
setupEditor1();
setupEditor2();
setupEditor3();
