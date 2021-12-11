
function adduser(){
    p1=document.getElementById("player_1").value;
    p2=document.getElementById("player_2").value;
    localStorage.setItem("player_1",p1);
    localStorage.setItem("player_2",p2);
    window.location="game_page.html";
}
