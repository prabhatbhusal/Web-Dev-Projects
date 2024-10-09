
var n=Math.random()
n=n*6
n=Math.floor(n)+1
var i=Math.random()
i=i*6
i=Math.floor(i)+1
let img1=document.getElementsByClassName("img1");
let img2=document.getElementsByClassName("img2");
console.log(img1[0].setAttribute("src","/images/dice"+n+".png"));
console.log(img2[0].setAttribute("src","/images/dice"+i+".png"));
if (n>i){
    document.getElementById("result").innerHTML="Player 1 wins!"
}
else if (i>n){
    document.getElementById("result").innerHTML="Player 2 wins!"
}
else{
    document.getElementById("result").innerHTML="Draw!"
}
