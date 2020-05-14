var playing = false;
var score;
var highscore = 0;
var counter;
var action;
var correctans;
document.getElementById("startreset").onclick = function() {
    if(playing==true){
        location.reload();
    } else{
        playing = true;
        score = 0;
        
        document.getElementById("scorevalue").innerHTML = score;
        document.getElementById("highscorevalue").innerHTML = highscore;
        document.getElementById("startreset").innerHTML = "Reset Game"; 
        show("counter");
        show("highscore");
        hide("gameover");
        enablebuttons();
        counter = 10;
        timeremaining();
        document.getElementById("remainingtime").innerHTML = counter;
        generateQA();
    }
}
for(i=1; i<5; i++){
    document.getElementById("button"+i).onclick = function() {
        if(playing == true){
            if(this.innerHTML == correctans){
                score++;
                var updatescore = highscore;
                if(score>updatescore){
                   highscore++;
                   document.getElementById("highscorevalue").innerHTML = highscore; 
                }
            document.getElementById("scorevalue").innerHTML = score;
            document.getElementById("highscorevalue").innerHTML = highscore;
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct");
                }, 1000);
                generateQA();
            } else{
                hide("correct");
                show("wrong");
                setTimeout(function(){
                    hide("wrong");
                }, 1000);
                
            }
        }
    }
}
    
function timeremaining() {
     action = setInterval(function() {
        counter -= 1;
         document.getElementById("remainingtime").innerHTML = counter;
           if(counter == 0) {
            clearInterval(action);
           show("gameover");
            document.getElementById("gameover").innerHTML = "<p>Game Over! <br/> Your score is: " + score + "<br/> High Score: " + highscore + "</p>";
            document.getElementById("startreset").innerHTML = "Start Game"; 
            hide("counter");
               disablebuttons();
               playing = false;
               
        }
        }, 1000);
      
}

function generateQA(){
    var x, y;
    x = 1+Math.round(Math.random() * 19);
    y = 1+Math.round(Math.random() * 19);
    correctans = x * y;
    document.getElementById("display").innerHTML = "<p>" +x+ "x" +y+ "</p>";
    var correctpos = 1+Math.round(Math.random() * 3);
    document.getElementById("button"+correctpos).innerHTML = correctans;
    var answer = [correctans];
    for(i=1; i<5; i++){
        do{
        var wrongans = (1+Math.round(Math.random() * 19))*(1+Math.round(Math.random() * 19));
        }while(answer.indexOf(wrongans)>-1)
        if(correctpos != i){
            document.getElementById("button"+i).innerHTML = wrongans;
            answer.push(wrongans);
        }
    }
}

function show(id){
    document.getElementById(id).style.display = "block";
}

function hide(id){
    document.getElementById(id).style.display = "none";
}
function disablebuttons(){
    for(i=1; i<5; i++){
    document.getElementById("button"+i).disabled = true;
    document.getElementById("button"+i).style.cursor = "default";
}
}
function enablebuttons(){
    for(i=1; i<5; i++){
    document.getElementById("button"+i).disabled = false;
    document.getElementById("button"+i).style.cursor = "pointer";
}
}
