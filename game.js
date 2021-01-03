player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("qt").innerHTML="Question Turn-"+player1_name;
document.getElementById("at").innerHTML="Answer Turn-"+player2_name;
document.getElementById("p1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
//sending answer
function send() {
    
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + "X"+ number2 +"</h4>";
    input_box = "<br><h3 style='color: white;'>Your Answer:</h3> <input type='number' id='ya'>";
    check_button = "<br><br><br><p><button id='sa' class='btn btn-success' onclick='check()'>Check</button></p>";
    row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

