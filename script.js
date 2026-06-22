console.log("Hello World");
function getComputerChoice(){
    let num=Math.floor(Math.random()*10);
    if(num%3==0) return "Rock";
    else if(num%2==0) return "Paper";
    else return "Scissor";
}
