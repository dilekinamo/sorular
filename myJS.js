function gizle(){
    let contents=document.getElementsByClassName("cevap");
    for(i=0;i<contents.length;i++){
        contents[i].style.display="none";
    }
}

function clicked(index){
    let contents=document.getElementsByClassName("cevap");
    for(i=0;i<contents.length;i++){
        contents[i].style.display="none";
    }
    contents[index].style.display="block";
}

