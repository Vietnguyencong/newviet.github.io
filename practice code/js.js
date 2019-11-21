


editor1 = ace.edit("code1");// set up editor 1
pre_string1=`
<form name="first_form">
  <textarea name="first_text">
    this is the value of the textarea
  </textarea><br>
  <input type="button" value="retrieve value"  onclick="yourfunction()">
</form> 
<div id="demo"></div>

<script>
function yourfunction(){
    value=document.first_form.first_text.value
    document.getElementById("demo").innerHTML=value
}
</script>`
set_up_editor(editor1,pre_string1)
runcode(editor1,'result1')


editor2 = ace.edit("code2");// set up editor 2
pre_string2=`
<div>old string: this is a string </div>
<div id='demo'>result</div>


<script>
//replace 'string' in mystring variable to 'javascript'
var mystring='this is a string'
var res=mystring.replace('string','javascript')
document.getElementById('demo').innerHTML='new string: '+ res
</script>`
set_up_editor(editor2,pre_string2)


editor3= ace.edit("code3"); // set up editor 3
pre_string3=`<div>javascript is not fun at all</div>
<div id='demo'>result</div>
<script>
//replace all the 'a' characters by an empty string
    var mystring='javascript is not fun at all'
    //repeat the loop until 'a' is not found in the string
    while(mystring.indexOf('a')>-1){
        mystring=mystring.replace('a','')
    }
    document.getElementById('demo').innerHTML=mystring 
</script>`
set_up_editor(editor3,pre_string3);

editor4= ace.edit("code4"); // set up editor 4
pre_string4=`<div>javascript is not fun at all</div>
<div id='demo'>result</div>
<div id='length'></div>
<script>
//split each words in the string
    var mystring='javascript is not fun at all'
    var res=mystring.split(" ")
    document.getElementById('demo').innerHTML=res;
    document.getElementById('length').innerHTML='legnth: '+
    res.length;
</script>`
set_up_editor(editor4,pre_string4);

editor5= ace.edit("code5"); // set up editor 5 (fix 5 cai)
pre_string5=`
<div id='first_ele'>first ele</div>
<div id='last_ele'>last ele</div>
<script>
//split each words in the string
    var myArray=['viet','dep','trai']
    document.getElementById('first_ele').innerHTML=myArray[0];
    document.getElementById('last_ele').innerHTML= myArray[myArray.length-1];
</script>`
set_up_editor(editor5,pre_string5);

// editor6= ace.edit("code6"); // set up editor 6 (fix 5 cai)
// pre_string6=`
// <!--this one is easy, you can do it-->`
// set_up_editor(editor6,pre_string6);

editor7= ace.edit("code7"); // set up editor 7 (fix 5 cai)
pre_string7=`<div id='demo'>original string</div></div>
<div id='demo0'>upper case string</div>
<div id='demo1'>lower case string</div>
<script>
    var mystring='Viet NGUYEN CongdePtrai'
    var UpString=mystring.toUpperCase()
    var LowString=mystring.toLowerCase()
    demo.innerHTML=mystring
    demo0.innerHTML=UpString
    demo1.innerHTML=LowString
</script>`
set_up_editor(editor7,pre_string7);

editor8= ace.edit("code8"); // set up editor 8 (fix 5 cai)
pre_string8=`<div id='demo'></div>
<div id='demo0'></div>
<script>
    var mystring='how many times "f","i" appear in beg?'
    var arr_of_char=mystring.split('')
    var newarray=[0,0]
    for(i=0;i<arr_of_char.length;i++){
        //if the element is 'f' then increase newarray[0] by 1
        if(arr_of_char[i]=='f')  newarray[0]++
        //if the element is 'i' then increase newarray[1] by 1
        if(arr_of_char[i]=='i')  newarray[1]++
    }
    demo.innerHTML=mystring
    demo0.innerHTML=newarray
</script>`
set_up_editor(editor8,pre_string8);

editor9= ace.edit("code9"); // set up editor 9 (fix 6 cai)
pre_string9=`<div id='demo'></div>
<div id='demo0'></div>
<script>
    var mystring='record the occurences "e" in beg '
    var arr_of_char=mystring.split('')
    var newarray=[] //contain the occurences of 'a'
    for(i=0;i<arr_of_char.length;i++){
        //if the element is 'e' then push i into the newarray
        if(arr_of_char[i]=='e') {
            newarray.push(i)
        }
    }
    demo.innerHTML=mystring
    demo0.innerHTML=newarray
</script>`
set_up_editor(editor9,pre_string9);

editor10= ace.edit("code10"); // set up editor 10 (fix 6 cai)
pre_string10=`<div id='demo'></div>
<div id='demo0'></div>
<script>
    var mystring='record the occurences "e" in beg '
    var arr_of_char=mystring.split('')
    var newarray=[] //contain the occurences of 'a'
    for(i=0;i<arr_of_char.length;i++){
        //if the element is 'e' then push i into the newarray
        if(arr_of_char[i]==' ') {
        newarray.push(i+1)// (i+1) is the position of the words
        }
    }
    demo.innerHTML=mystring
    demo0.innerHTML=newarray
</script>`
set_up_editor(editor10,pre_string10);




//set up the html editor function
function set_up_editor(editor,pre_string) {

    editor.setTheme("ace/theme/twilight");
    editor.getSession().setMode(`ace/mode/html`);
    editor.setValue(pre_string)
    // editor.setFontSize("18px");
    // editor.setOption('fontSize',"20px")

    // editor.focus();
    editor.resize();
    editor.focus()
    editor.setOptions({
      fontSize: "10pt",
      fontFamily: "Menlo, Monaco, Consolas, 'Courier New', monospace",
      showLineNumbers: false,
      showGutter: false,
      vScrollBarAlwaysVisible:false,
      hScrollBarAlwaysVisible: false,
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: true,
      animatedScroll: true,

    });
    // editor.setShowPrintMargin(true);
     editor.setBehavioursEnabled(true);


}
//set up js editor
function set_up_jseditor(editor,pre_string) {

  editor.setTheme("ace/theme/twilight");
  editor.getSession().setMode(`ace/mode/javascript`);
  editor.setValue(pre_string)
  // editor.setFontSize("18px");
  // editor.setOption('fontSize',"20px")

  // editor.focus();
  editor.resize();
  editor.setOptions({
    fontSize: "10pt",
    fontFamily: "Menlo, Monaco, Consolas, 'Courier New', monospace",
    showLineNumbers: false,
    showGutter: false,
    vScrollBarAlwaysVisible:false,
    hScrollBarAlwaysVisible: false,
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    enableSnippets: true,
    animatedScroll: true,

  });
  // editor.setShowPrintMargin(true);
  // editor.setBehavioursEnabled(true);


}
// run the code inside the small editor function
function runcode(editor,result) {
	var idoc = document.getElementById(result).contentWindow.document;
    idoc.open();
    code = editor.getValue();
    idoc.write(code);
    idoc.close();
}



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
    document.getElementById(id).style.zIndex="1000"
    document.getElementById(id).style.width="120%"
    document.getElementById(id).style.height="380px"
    document.getElementById(id).style.transform="translateX(-60px)"
    document.getElementById(id).style.zIndex="1000"
    // document.getElementById(id).style.position="fixed"
    document.getElementById("bg-modal").style.display="block"

    viewChanged=false
  }
  else {// turn back into the normal stage
    document.getElementById(id).style.width="90%"
    document.getElementById(id).style.height="270px"
    document.getElementById(id).style.transform="translateX(0)"
    document.getElementById(id).style.zIndex="998"

    // document.getElementById(id).style.position=""
    document.getElementById("bg-modal").style.display="none"
    
    viewChanged=true
  }
}

//move to a diffent article session
function changeArticle(artID){
    articleList=document.getElementsByTagName("article")
    for (i=0;i<articleList.length;i++){
        articleList[i].style.display="none"
    }
    document.getElementById(artID).style.display="block"
}


