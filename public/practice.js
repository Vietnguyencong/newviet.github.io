


editor1 = ace.edit("code1");// set up editor 1
pre_string1 = `
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
set_up_editor(editor1, pre_string1)
runcode(editor1, 'result1')


editor2 = ace.edit("code2");// set up editor 2
pre_string2 = `
<div>old string: this is a string </div>
<div id='demo'>result</div>


<script>
//replace 'string' in mystring variable to 'javascript'
var mystring='this is a string'
var res=mystring.replace('string','javascript')
document.getElementById('demo').innerHTML='new string: '+ res
</script>`
set_up_editor(editor2, pre_string2)


editor3 = ace.edit("code3"); // set up editor 3
pre_string3 = `<div>javascript is not fun at all</div>
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
set_up_editor(editor3, pre_string3);

editor4 = ace.edit("code4"); // set up editor 4
pre_string4 = `<div>javascript is not fun at all</div>
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
set_up_editor(editor4, pre_string4);

editor5 = ace.edit("code5"); // set up editor 5 (fix 5 cai)
pre_string5 = `
<div id='first_ele'>first ele</div>
<div id='last_ele'>last ele</div>
<script>
//split each words in the string
    var myArray=['viet','dep','trai']
    document.getElementById('first_ele').innerHTML=myArray[0];
    document.getElementById('last_ele').innerHTML= myArray[myArray.length-1];
</script>`
set_up_editor(editor5, pre_string5);

editor6 = ace.edit("code6"); // set up editor 7 (fix 5 cai)
pre_string6 = `
<script>
  //This one is easy, you then can do it
</script>`
set_up_editor(editor6, pre_string6);

editor7 = ace.edit("code7"); // set up editor 7 (fix 5 cai)
pre_string7 = `<div id='demo'>original string</div></div>
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
set_up_editor(editor7, pre_string7);

editor8 = ace.edit("code8"); // set up editor 8 (fix 5 cai)
pre_string8 = `<div id='demo'></div>
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
set_up_editor(editor8, pre_string8);

editor9 = ace.edit("code9"); // set up editor 9 (fix 6 cai)
pre_string9 = `<div id='demo'></div>
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
set_up_editor(editor9, pre_string9);

editor10 = ace.edit("code10"); // set up editor 10 (fix 6 cai)
pre_string10 = `<div id='demo'></div>
<div id='demo0'></div>
<script>
    var mystring='record the position of words in beg '
    var arr_of_char=mystring.split('')
    var newarray=[0] //the first word's positionn is at 0
    for(i=0;i<arr_of_char.length;i++){
        //if the element is ' ' then push i+1 into the newarray
        if(arr_of_char[i]==' ') {
        newarray.push(i+1)// (i+1) is the position of the words
        }
    }
    demo.innerHTML=mystring
    demo0.innerHTML=newarray
</script>`
set_up_editor(editor10, pre_string10);

editor11 = ace.edit("code11"); // set up editor 11 (fix 6 cai)
pre_string11 = `

<div id='demo0'>table should be right here</div>
<script>
    var mystring='record   the  occurences " e" i n beg '
    var arr_of_wor=mystring.split(' ')
    console.log(arr_of_wor)
    os='<table border="2px"style="background-color:green">'
    for(i=0;i<arr_of_wor.length/2;i++){
        os+='<tr>'
        for (j=0;j<2;j++){
            if(arr_of_wor[i*2+j]=='') {
                os+='<td>null</td>'
        } 
            else{
                os+='<td>'+arr_of_wor[i*2+j]+'</td>'
            }
        }
        os+='</tr>'
    }
    os+='</table>'
    demo0.innerHTML=os
</script>`
set_up_editor(editor11, pre_string11);

editor12 = ace.edit("code12"); // set up editor 12 (fix 6 cai)
pre_string12 = `

<div id='demo0'>the result should be right here</div>
<script>
    var mystring='record   the  occurences " e" i n beg '
    while(mystring.indexOf(' ')>-1){
        mystring=mystring.replace(' ','*')
    }
    demo0.innerHTML=mystring
</script>`
set_up_editor(editor12, pre_string12);

editor13 = ace.edit("code13"); // set up editor 13 (fix 6 cai)
pre_string13 = `
<div id='demo0'>the result should be right here</div>
<script>
    var mystring='abc'
    var acii_char0=mystring.charCodeAt(0)
    var acii_char1=mystring.charCodeAt(1)
    demo0.innerHTML=acii_char0+' , '+acii_char1
</script>`
set_up_editor(editor13, pre_string13);


editor14 = ace.edit("code14"); // set up editor 14 (fix 6 cai)
pre_string14 = `
<div id='demo0'>the result should be right here</div>
<script>
var mystring='my full nam iss Viet Nguyen Cog'
var countArray=[0,0]
words=mystring.split(' ')
for(i=0;i<words.length;i++){
    if(words[i].length==2)countArray[0]++;
    if(words[i].length==3)countArray[1]++;
}
demo0.innerHTML=countArray
</script>`
set_up_editor(editor14, pre_string14);


editor15 = ace.edit("code15"); // set up editor 15 (fix 6 cai)
pre_string15 = `
<div id='demo0'>the result should be right here</div>
<script>
    var mystring='123456789'
    var newWord=''
    chars=mystring.split('')
    for(i=chars.length-1;i>=0;i--){
        var x=chars[i]
        newWord+=x
    }
    demo0.innerHTML=newWord
</script>`
set_up_editor(editor15, pre_string15);

editor16 = ace.edit("code16"); // set up editor 16 (fix 6 cai)
pre_string16 = `
<div id='demo0'>the result should be right here</div>
<script>
    var mystring = 'viet nguyen cong'
    x = []
    for (i = 0; i < 26; i++) {
        x[i] = 0;
    }
    mystring.split("");
    for (i = 0; i < mystring.length; i++) {
        x[mystring[i].charCodeAt(0) - 97]++;
    }
    demo0.innerHTML = 'Array counting 26 chars in mystring: <br>'+ x
</script>`
set_up_editor(editor16, pre_string16);

editor17 = ace.edit("code17"); // set up editor 17 (fix 6 cai)
pre_string17 = `
<form>
    <input type="radio" name='js' value="V" checked> Viet&nbsp;
    <input type="radio" name='js' value="N"> Nguyen&nbsp;
    <input type="radio" name='js' value="C"> Cong&nbsp;
    <br><input type='button' onclick='retrieve()' value='click here'>
    <div id='demo0'>the answer</div>
</form>
<script>
    function retrieve() {
        var mylist = document.getElementsByName('js')
        x = []
        console.log(mylist)
        for (i = 0; i < mylist.length; i++) {
            x.push(mylist[i].value)
        }
        demo0.innerHTML = x
    }
</script>`
set_up_editor(editor17, pre_string17);

editor18 = ace.edit("code18"); // set up editor 18 (fix 6 cai)
pre_string18 = `
<form>
<input type="radio" name='js' value="V" > Viet&nbsp;
<input type="radio" name='js' value="N" checked> Nguyen&nbsp;
<input type="radio" name='js' value="C"> Cong&nbsp;
<br><input type='button' onclick='retrieve()' value='click here'>
<div id='demo0'>the answer</div>
</form>
<script>
function retrieve() {
    var mylist = document.getElementsByName('js')
    var count_element=0
    var checked_element
    console.log(mylist)
    for (i = 0; i < mylist.length; i++) {
        if (mylist[i].checked==true){
            count_element=i;
            checked_element=mylist[i].value
        }
    }
    demo0.innerHTML = count_element+","+checked_element
}
</script>`
set_up_editor(editor18, pre_string18);

editor19 = ace.edit("code19"); // set up editor 19 (fix 6 cai)
pre_string19 = `
<form>
<input type="radio" name='js' value="V" > Viet&nbsp;
<input type="radio" name='js' value="N" checked> Nguyen&nbsp;<br>
<input type="checkbox" name='js' value="V" > Viet&nbsp;
<input type="checkbox" name='js' value="N" checked> Nguyen&nbsp;
<input type="checkbox" name='js' value="C" checked> Cong&nbsp;
<input type="checkbox" name='js' value="a" > abc&nbsp;
<br><input type='button' onclick='retrieve()' value='click here'>
<div id='demo0'>answer is right here</div>
</form>
<script>
function retrieve() {
    var mylist = document.getElementsByName('js')
    os='<table>'
    for (i = 0; i < mylist.length; i++) {
        if (mylist[i].type=='checkbox'){
            // you can the rest, I am lazy, sorry!
        }
    }
    os+='</table>'
    demo0.innerHTML = os`
set_up_editor(editor19, pre_string19);


editor20 = ace.edit("code20"); // set up editor 20(fix 6 cai)
pre_string20 = `
<form>
<input type="radio" name='js' value="V" > Viet&nbsp;
<input type="radio" name='js' value="N" checked> Nguyen&nbsp;<br>
<input type="checkbox" name='js' value="V" > Viet&nbsp;
<input type="checkbox" name='js' value="N" checked> Nguyen&nbsp;
<input type="checkbox" name='js' value="C" checked> Cong&nbsp;
<input type="checkbox" name='js' value="a" > abc&nbsp;
<br><input type='button' onclick='retrieve()' value='click here'>
<div id='demo0'>answer is right here</div>
</form>
<script>
function retrieve() {
    var mylist = document.getElementsByTagName('input')
    checked_list=[]
    for (i = 0; i < mylist.length; i++) {
        if (/*check if the element is checkbox */&&/*check if the element is checked*/){
            // you can do the rest, I am lazy, sorry!
        }
    }
    demo0.innerHTML = checked_list
}
</script>`
set_up_editor(editor20, pre_string20);

editor21 = ace.edit("code21"); // set up editor 21(fix 6 cai)
pre_string21 = `
<form name='nguyen_cong'>
<select name='viet'>
    <option value='n'>Viet</option>
    <option value='c'>Nguyen</option>
    <option value='v'>Cong</option>
</select>
<br><input type='button' onclick='retrieve()' value='click here'>
<div id='demo0'>answer appears right here</div>
</form>
<script>
function retrieve() {
    var mylist = document.getElementsByTagName('option')
    os="<table border='1px'>"
    for (i = 0; i < mylist.length; i++) {
        os+='<tr>'
        os+='<td>'+ /*you do it*/+ '</td>'
        os+='</tr>'
    }
    os+='</table>'
    demo0.innerHTML = os
}
</script>`
set_up_editor(editor21, pre_string21);

editor22 = ace.edit("code22"); // set up editor 22(fix 6 cai)
pre_string22 = `
<br><input type='button' onclick='retrieve()' value='click here'>
<div id='demo0'>answer appear right here</div>
<script>
    function retrieve() {
        var mystring = 'nguyen congviet, nguyen congviet, nguyen congviet, nguyen congviet'
        var phrase_list = mystring.split(',')
        for (i = 0; i < phrase_list.length; i++) {
            phrase_list[i]=phrase_list[i]+'<br>'
        }
        demo0.innerHTML = phrase_list
    }
</script>`
set_up_editor(editor22, pre_string22);

editor23 = ace.edit("code23"); // set up editor 23(fix 6 cai)
pre_string23 = `
<br><input type='button' onclick='retrieve()' value='click here'>
<div id='demo'></div>
<div id='demo0'>answer appears right here</div>
<script>
    function retrieve() {
        var mystring = 'viet nguyen cong'
        //capitalize the first letter of mystring
        var newString=mystring[0].toUpperCase()
        for(i=1;i<mystring.length;i++){
            newString+=mystring[i]
        }
        demo.innerHTML=mystring
        demo0.innerHTML = newString
    }
</script>`
set_up_editor(editor23, pre_string23);

editor24 = ace.edit("code24"); // set up editor 24(fix 6 cai)
pre_string24 = `
<form>
<input type="radio" name='js' value="V" checked> Viet&nbsp;
<input type="radio" name='js' value="N"> Nguyen&nbsp;
<input type="radio" name='js' value="C"> Cong&nbsp;
<br><input type='button' onclick='retrieve()' value='click here'>
<div id='demo0'>the answer</div>
</form>
<script>
function retrieve() {
    var mylist = document.getElementsByName('js')
    for (i = 0; i < mylist.length; i++) {
        if (mylist[i].value == 'C') {
            mylist[i].checked = true
        }
    }
    demo0.innerHTML = 'Done'
}
</script>`
set_up_editor(editor24, pre_string24);

editor25 = ace.edit("code25"); // set up editor 25(fix 6 cai)
pre_string25 = `
<form name='nguyen_cong'>
<select name='viet'>
    <option value='viet'>Viet</option>
    <option value='nguyen'>Nguyen</option>
    <option value='cong'>Cong</option>
</select>
<br><input type='button' onclick='retrieve()' value='click here'>
<div id='demo0'>answer appears right here</div>
</form>
<script>
function retrieve() {
    var mylist = document.getElementsByTagName('option')
    var select_value=document.nguyen_cong.viet.value
    var index
    for (i = 0; i < mylist.length; i++) {
        if(mylist[i].value==select_value){
            index=i
        }
    }
    demo0.innerHTML = select_value+","+index
}
</script>`
set_up_editor(editor25, pre_string25);

//set up the html editor function
function set_up_editor(editor, pre_string) {

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
        vScrollBarAlwaysVisible: false,
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
function set_up_jseditor(editor, pre_string) {

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
        vScrollBarAlwaysVisible: false,
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
function runcode(editor, result) {
    var idoc = document.getElementById(result).contentWindow.document;
    idoc.open();
    code = editor.getValue();
    idoc.write(code);
    idoc.close();
}



// show or hide function
function show_hide(ID) {
    display_style = document.getElementById(ID).style.display
    if (display_style == "none") {
        document.getElementById(ID).style.display = "block"
    }
    else { document.getElementById(ID).style.display = "none" }
}



// track the list element when clicked
function trackElement(id) {
    var x = document.getElementsByTagName("li");
    for (i = 0; i < x.length; i++) {
        x[i].style.border = ""
    }
    document.getElementById(id).style.border = "1px solid #e67e22"
}


//change view to large / small for the small editor in the tutorial
var viewChanged = true;

function changeView(id) {
    if (viewChanged == true) {
        // editor.resize()
        document.getElementById(id).style.width = "130%"
        document.getElementById(id).style.height = "480px"
        document.getElementById(id).style.transform = "translateX(-125px)"
        document.getElementById(id).style.zIndex = "1000"
        document.getElementById(id).children[0].children[1].text = 'Change into small view'
        document.getElementById(id).children[0].children[2].text = 'fit content for big view'
        // document.getElementById(id).style.position="fixed"
        document.getElementById("bg-modal").style.display = "block"
        viewChanged = false
    }
    else {// turn back into the normal stage
        document.getElementById(id).style.width = "90%"
        document.getElementById(id).style.height = "270px"
        document.getElementById(id).style.transform = "translateX(0)"
        document.getElementById(id).style.zIndex = "998"
        document.getElementById(id).children[0].children[1].text = 'Change View'
        document.getElementById(id).children[0].children[2].text = 'fit content for small view'
        // document.getElementById(id).style.position=""
        document.getElementById("bg-modal").style.display = "none"
        viewChanged = true
    }

}


//move to a diffent article session
function changeArticle(artID) {
    articleList = document.getElementsByTagName("article")
    for (i = 0; i < articleList.length; i++) {
        articleList[i].style.display = "none"
    }
    document.getElementById(artID).style.display = "block"
}


// RATE THE DIFFICULTY OF THE QUESTIONS

// var rates_oj = []
// for ( i= 0 ; i<24;i++){
//     var rate = {
//         'number': i+1,
//         'tol_point': 0,
//         'times': 0,
//     }
//     rates_oj.push(rate)
// } 

// OPEN THE RATE BOX, then set curr que number
var curr_que_num = 0
function open_rate_box(num) {
    document.getElementById('rate_box').style.display = 'flex'
    curr_que_num = num
    document.getElementById('rate_header').innerHTML= `RATTING QUE ${num}`
    document.getElementById('que_num').value= num.toString()// PASS num to "hidden" input 
    document.getElementById('confirm').style.display='none'
    
}

//close the box, send data to the sever
function close_box(ques_num) {
    document.getElementById('confirm').style.display='block'
    document.getElementById('rate_box').style.display = 'none'
    //add_rate(ques_num)
}
document.querySelector('#exit').addEventListener('click', function () { close_box(curr_que_num) })



// var rate_value = 0
// var is_select = false
// /*change the rate point*/
// function set_rate_value(value) {
//     rate_value = value
//     is_select = true
// }

/*add the rate when closing the rate box*/
// function add_rate(ques_num) {
//     for (i = 0; i < rates_oj.length; i++) {
//         if (i == ques_num - 1 && is_select == true) {
//             rates_oj[i].tol_point += rate_value
//             rates_oj[i].times++
//             rate_value = 0
//             is_select = false
//             let total_point = rates_oj[i].tol_point
//             let times = rates_oj[i].times
//             let avg_points = (total_point / times) * 50
//             console.log(avg_points)
//             document.getElementById(`final_rate_${ques_num}`).width = Math.ceil(avg_points)
//             document.getElementById(`rate_times_${ques_num}`).innerHTML = `there is/are <b style='font-size:12pt'>${times}</b> people who rated this question!`
//         }

//     }

// }

