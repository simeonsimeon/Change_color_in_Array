let btn=document.getElementById("btn");
let text=document.getElementById("text");
let arr=["red","blue","gray","yellow","black"];
let count=0;
console.log(text);
function change(){
    text.style.display="block";
    text.style.color=arr[count];
count++;
if(arr[count]>=5){
    count=0;
}

}
btn.addEventListener("click",function(){
    change();
});