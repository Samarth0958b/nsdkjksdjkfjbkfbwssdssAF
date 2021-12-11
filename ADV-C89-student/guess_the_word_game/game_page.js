p1_name=localStorage.getItem("player_1");
p2_name=localStorage.getItem("player_2");
document.getElementById("player_1_name").innerHTML=p1_name + " :";
document.getElementById("player_2_name").innerHTML=p2_name + " :";
p1_score=0;
p2_score=0;
document.getElementById("player1_score").innerHTML=p1_score;
document.getElementById("player2_score").innerHTML=p2_score;
document.getElementById("player_question").innerHTML="question turn " + p1_name;
document.getElementById("player_answer").innerHTML="answer turn " + p2_name;

function send(){
     word=document.getElementById("word").value;

    letter_1=word.charAt(1);
    len=Math.floor(word.length/2);

    letter_2=word.charAt(len);
    lenminus=word.length-1;

    letter_3=word.charAt(lenminus);
    rp1=word.replace(letter_1,"_");
    rp2=rp1.replace(letter_2,"_");
    rp3=rp2.replace(letter_3,"_");
    letterword="<h4 id='rp'>q."+rp3+"</h4>";
    inputbox="<br>.answer<input type='text' id='ans'>";
    checkbutton="<br><button class='btn btn-warning' onclick='check()'>Check</button>"
    row= letterword + inputbox + checkbutton;
   document.getElementById("output").innerHTML=row;
   document.getElementById("word").value="";
}
question_turn="player1";
answer_turn="player2";
 function check(){

   get_answer=document.getElementById("ans").value
   answer=get_answer.toLowerCase();
   console.log("answer in lower case" + answer);
    
   if(answer==word){
      console.log("thats a right answer");
    if (answer_turn=="player1"){
      p1_score= p1_score + 1 ;
   document.getElementById("player1_score").innerHTML=p1_score;
   }
   else{
      p2_score==p2_score + 1;
     document.getElementById("player2_score").innerHTML=p2_score;
   }
}
if (question_turn=="player1"){
    question_turn="player2";
 document.getElementById("player_question").innerHTML="Question Turn - " + p2_name;
 }
 else{
    question_turn="player1";
 document.getElementById("player_question").innerHTML="Question Turn - " + p1_name;
 }
 if (answer_turn=="player1"){
   answer_turn="player2";
document.getElementById("player_answer").innerHTML="answer Turn - " + p2_name;
}
else{
   answer_turn="player1";
document.getElementById("player_answer").innerHTML="answer Turn - " + p1_name;
}
 }