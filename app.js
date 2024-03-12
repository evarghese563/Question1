
var li = document.getElementsByTagName("li");


function checkconsonant(str){
    let x = str.length;
    let temp = x -1;
    flag = 0
    vowel = 0
    consonant = 0
    
    for(i=0; i<x ;i++){
        if(str[i] =='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
            vowel+=1;
        }else{
            consonant+=1;
        }
    }


    li[1].textContent = "Number of vowels: "+ vowel

    li[2].textContent = "Number of consonants: "+ consonant



}


function word(){
    var str = document.getElementById("firstfunc").value;
    li[0].textContent = str;
    
    checkconsonant(str)

    
}