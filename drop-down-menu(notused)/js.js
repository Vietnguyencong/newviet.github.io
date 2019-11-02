
function dosomething(){
    var x = document.getElementById("big").parentElement.nodeName;
    document.getElementById("viet").innerHTML = x;
    
}
// var y = document.getElementById("vietdeptraiqua").parentElement.children;
// y[1].children[0].style.backgroundColor ="yellow"


function get(id){
    
    var x = document.getElementById("vietdeptraiqua").parentElement.children;
    
    for(i=0;i<x.length;i++){
        x[i].style.border=""
    }
            
    document.getElementById(id).style.border="1px solid #e67e22"
    // console.log (x[1].nodeName)
    // console.log (document.getElementById(id).nodeName)
    
}