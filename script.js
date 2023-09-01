// rules button pop
document.getElementById("rules").addEventListener("click", bring_in);
function bring_in(){
    document.getElementById("game_rules").classList.add("pop");
}
// cross button cancel
document.getElementsByClassName("cross_btn")[0].addEventListener("click", bring_out);
function bring_out(){
    document.getElementById("game_rules").classList.remove("pop");
}
// local storage
var comp = 0;
var user = 0;
if(localStorage.getItem("cpu")){
    var comp = localStorage.getItem("cpu");
    var user = localStorage.getItem("usr");
    // console.log("hai");
}else {
    localStorage.setItem("cpu", 0);
    localStorage.setItem("usr", 0);
    console.log("bye");
}
document.getElementsByClassName("comp_score")[0].innerHTML = localStorage.getItem("cpu");
document.getElementsByClassName("user_score")[0].innerHTML = localStorage.getItem("usr");
// get input
document.getElementsByClassName("stone")[0].addEventListener("click", stone);
function stone(){
    document.getElementsByClassName("play_area")[0].classList.add("hide"); 
    document.getElementsByClassName("result_area")[0].classList.remove("hide");
    document.getElementsByClassName("stone")[1].classList.remove("hide");   
    document.getElementsByClassName("scissor")[1].classList.add("hide");   
    document.getElementsByClassName("paper")[1].classList.add("hide");   
    let pc = Math.floor((Math.random()*3)+1);
    if(pc == 3){//lost
        document.getElementsByClassName("win_3")[0].classList.add("trans");
        document.getElementsByClassName("win_3")[0].classList.remove("animate");
        document.getElementsByClassName("win_2")[0].classList.add("trans");
        document.getElementsByClassName("win_1")[0].classList.add("trans");
        document.getElementsByClassName("pc_3")[0].classList.add("animate");
        document.getElementsByClassName("pc_3")[0].classList.remove("trans");
        document.getElementsByClassName("pc_2")[0].classList.remove("trans");
        document.getElementsByClassName("pc_1")[0].classList.remove("trans");
        document.getElementsByClassName("paper")[2].classList.remove("hide");   
        document.getElementsByClassName("scissor")[2].classList.add("hide");  
        document.getElementsByClassName("result_text_win")[0].classList.add("hide");
        document.getElementsByClassName("result_text_lost")[0].classList.remove("hide")
        document.getElementsByClassName("result_text_tie")[0].classList.add("hide");
        document.getElementsByClassName("result_text_fixed")[0].classList.remove("col_trans");
        document.getElementsByClassName("play_again")[0].classList.remove("hide");
        document.getElementsByClassName("replay")[0].classList.add("hide");
        document.getElementsByClassName("next_btn")[0].classList.add("hide");
        localStorage.setItem("cpu", ++comp);
        document.getElementsByClassName("comp_score")[0].innerHTML = localStorage.getItem("cpu");
     } else if(pc == 2){//win
        document.getElementsByClassName("win_3")[0].classList.remove("trans");
        document.getElementsByClassName("win_3")[0].classList.add("animate");
        document.getElementsByClassName("win_2")[0].classList.remove("trans");
        document.getElementsByClassName("win_1")[0].classList.remove("trans");
        document.getElementsByClassName("pc_3")[0].classList.remove("animate");
        document.getElementsByClassName("pc_3")[0].classList.add("trans");
        document.getElementsByClassName("pc_2")[0].classList.add("trans");
        document.getElementsByClassName("pc_1")[0].classList.add("trans");
        document.getElementsByClassName("scissor")[2].classList.remove("hide");   
        document.getElementsByClassName("paper")[2].classList.add("hide");  
        document.getElementsByClassName("result_text_win")[0].classList.remove("hide");
        document.getElementsByClassName("result_text_lost")[0].classList.add("hide")
        document.getElementsByClassName("result_text_tie")[0].classList.add("hide");
        document.getElementsByClassName("result_text_fixed")[0].classList.remove("col_trans");
        document.getElementsByClassName("play_again")[0].classList.remove("hide");
        document.getElementsByClassName("replay")[0].classList.add("hide");
        document.getElementsByClassName("next_btn")[0].classList.remove("hide");
        localStorage.setItem("usr", ++user);
        document.getElementsByClassName("user_score")[0].innerHTML = localStorage.getItem("usr");
    } else {//tie           
        document.getElementsByClassName("win_3")[0].classList.remove("animate");
        document.getElementsByClassName("win_3")[0].classList.add("trans");
        document.getElementsByClassName("win_2")[0].classList.add("trans");
        document.getElementsByClassName("win_1")[0].classList.add("trans");
        document.getElementsByClassName("pc_3")[0].classList.remove("animate");
        document.getElementsByClassName("pc_3")[0].classList.add("trans");
        document.getElementsByClassName("pc_2")[0].classList.add("trans");
        document.getElementsByClassName("pc_1")[0].classList.add("trans");
        document.getElementsByClassName("scissor")[2].classList.add("hide");   
        document.getElementsByClassName("paper")[2].classList.add("hide"); 
        document.getElementsByClassName("stone")[2].classList.remove("hide"); 
        document.getElementsByClassName("result_text_win")[0].classList.add("hide");
        document.getElementsByClassName("result_text_lost")[0].classList.add("hide")
        document.getElementsByClassName("result_text_tie")[0].classList.remove("hide");
        document.getElementsByClassName("result_text_fixed")[0].classList.add("col_trans");
        document.getElementsByClassName("play_again")[0].classList.add("hide");
        document.getElementsByClassName("replay")[0].classList.remove("hide");
        document.getElementsByClassName("next_btn")[0].classList.add("hide");
    }
}
document.getElementsByClassName("scissor")[0].addEventListener("click", scissor);
function scissor(){
    document.getElementsByClassName("play_area")[0].classList.add("hide"); 
    document.getElementsByClassName("result_area")[0].classList.remove("hide");
    document.getElementsByClassName("stone")[1].classList.add("hide");   
    document.getElementsByClassName("scissor")[1].classList.remove("hide");   
    document.getElementsByClassName("paper")[1].classList.add("hide");
    let pc = Math.floor((Math.random()*3)+1);
    if(pc == 3){//win
        document.getElementsByClassName("win_3")[0].classList.remove("trans");
        document.getElementsByClassName("win_3")[0].classList.add("animate");
        document.getElementsByClassName("win_2")[0].classList.remove("trans");
        document.getElementsByClassName("win_1")[0].classList.remove("trans");
        document.getElementsByClassName("pc_3")[0].classList.remove("animate");
        document.getElementsByClassName("pc_3")[0].classList.add("trans");
        document.getElementsByClassName("pc_2")[0].classList.add("trans");
        document.getElementsByClassName("pc_1")[0].classList.add("trans");
        document.getElementsByClassName("paper")[2].classList.remove("hide");   
        document.getElementsByClassName("stone")[2].classList.add("hide");   
        document.getElementsByClassName("result_text_win")[0].classList.remove("hide");
        document.getElementsByClassName("result_text_lost")[0].classList.add("hide")
        document.getElementsByClassName("result_text_tie")[0].classList.add("hide");
        document.getElementsByClassName("result_text_fixed")[0].classList.remove("col_trans");
        document.getElementsByClassName("play_again")[0].classList.remove("hide");
        document.getElementsByClassName("replay")[0].classList.add("hide");
        document.getElementsByClassName("next_btn")[0].classList.remove("hide");
        localStorage.setItem("usr", ++user);
        document.getElementsByClassName("user_score")[0].innerHTML = localStorage.getItem("usr");
    } else if(pc == 2){//draw
        document.getElementsByClassName("win_3")[0].classList.remove("animate");
        document.getElementsByClassName("win_3")[0].classList.add("trans");
        document.getElementsByClassName("win_2")[0].classList.add("trans");
        document.getElementsByClassName("win_1")[0].classList.add("trans");
        document.getElementsByClassName("pc_3")[0].classList.remove("animate");
        document.getElementsByClassName("pc_3")[0].classList.add("trans");
        document.getElementsByClassName("pc_3")[0].classList.add("trans");
        document.getElementsByClassName("pc_2")[0].classList.add("trans");
        document.getElementsByClassName("pc_1")[0].classList.add("trans");
        document.getElementsByClassName("scissor")[2].classList.remove("hide");   
        document.getElementsByClassName("paper")[2].classList.add("hide");
        document.getElementsByClassName("result_text_win")[0].classList.add("hide");
        document.getElementsByClassName("result_text_lost")[0].classList.add("hide")
        document.getElementsByClassName("result_text_tie")[0].classList.remove("hide");
        document.getElementsByClassName("result_text_fixed")[0].classList.add("col_trans");
        document.getElementsByClassName("play_again")[0].classList.add("hide");
        document.getElementsByClassName("replay")[0].classList.remove("hide");
        document.getElementsByClassName("next_btn")[0].classList.add("hide");
    } else {//lost
        document.getElementsByClassName("win_3")[0].classList.remove("animate");
        document.getElementsByClassName("win_3")[0].classList.add("trans");
        document.getElementsByClassName("win_2")[0].classList.add("trans");
        document.getElementsByClassName("win_1")[0].classList.add("trans");
        document.getElementsByClassName("pc_3")[0].classList.add("animate");
        document.getElementsByClassName("pc_3")[0].classList.remove("trans");
        document.getElementsByClassName("pc_2")[0].classList.remove("trans");
        document.getElementsByClassName("pc_1")[0].classList.remove("trans");
        document.getElementsByClassName("scissor")[2].classList.add("hide");   
        document.getElementsByClassName("paper")[2].classList.add("hide"); 
        document.getElementsByClassName("stone")[2].classList.remove("hide"); 
        document.getElementsByClassName("result_text_win")[0].classList.add("hide");
        document.getElementsByClassName("result_text_lost")[0].classList.remove("hide")
        document.getElementsByClassName("result_text_tie")[0].classList.add("hide");
        document.getElementsByClassName("result_text_fixed")[0].classList.remove("col_trans");
        document.getElementsByClassName("play_again")[0].classList.remove("hide");
        document.getElementsByClassName("replay")[0].classList.add("hide");
        document.getElementsByClassName("next_btn")[0].classList.add("hide");
        localStorage.setItem("cpu", ++comp);
        document.getElementsByClassName("comp_score")[0].innerHTML = localStorage.getItem("cpu");
    }
}
document.getElementsByClassName("paper")[0].addEventListener("click", paper);
function paper(){
    document.getElementsByClassName("play_area")[0].classList.add("hide"); 
    document.getElementsByClassName("result_area")[0].classList.remove("hide");
    document.getElementsByClassName("stone")[1].classList.add("hide");   
    document.getElementsByClassName("scissor")[1].classList.add("hide");   
    document.getElementsByClassName("paper")[1].classList.remove("hide");
    let pc = Math.floor((Math.random()*3)+1);
    if(pc == 3){//draw               
        document.getElementsByClassName("win_3")[0].classList.remove("animate");
        document.getElementsByClassName("win_3")[0].classList.add("trans");
        document.getElementsByClassName("win_2")[0].classList.add("trans");
        document.getElementsByClassName("win_1")[0].classList.add("trans");
        document.getElementsByClassName("pc_3")[0].classList.remove("animate");
        document.getElementsByClassName("pc_3")[0].classList.add("trans");
        document.getElementsByClassName("pc_2")[0].classList.add("trans");
        document.getElementsByClassName("pc_1")[0].classList.add("trans");
        document.getElementsByClassName("paper")[2].classList.remove("hide");   
        document.getElementsByClassName("stone")[2].classList.add("hide");   
        document.getElementsByClassName("result_text_win")[0].classList.add("hide");
        document.getElementsByClassName("result_text_lost")[0].classList.add("hide")
        document.getElementsByClassName("result_text_tie")[0].classList.remove("hide");
        document.getElementsByClassName("result_text_fixed")[0].classList.add("col_trans");
        document.getElementsByClassName("play_again")[0].classList.add("hide");
        document.getElementsByClassName("replay")[0].classList.remove("hide");
        document.getElementsByClassName("next_btn")[0].classList.add("hide");
    } else if(pc == 2){//lost
        document.getElementsByClassName("win_3")[0].classList.remove("animate");
        document.getElementsByClassName("win_3")[0].classList.add("trans");
        document.getElementsByClassName("win_2")[0].classList.add("trans");
        document.getElementsByClassName("win_1")[0].classList.add("trans");
        document.getElementsByClassName("pc_3")[0].classList.add("animate");
        document.getElementsByClassName("pc_3")[0].classList.remove("trans");
        document.getElementsByClassName("pc_2")[0].classList.remove("trans");
        document.getElementsByClassName("pc_1")[0].classList.remove("trans");
        document.getElementsByClassName("scissor")[2].classList.remove("hide");   
        document.getElementsByClassName("paper")[2].classList.add("hide");
        document.getElementsByClassName("result_text_win")[0].classList.add("hide");
        document.getElementsByClassName("result_text_lost")[0].classList.remove("hide")
        document.getElementsByClassName("result_text_tie")[0].classList.add("hide");
        document.getElementsByClassName("result_text_fixed")[0].classList.remove("col_trans");
        document.getElementsByClassName("play_again")[0].classList.remove("hide");
        document.getElementsByClassName("replay")[0].classList.add("hide");
        document.getElementsByClassName("next_btn")[0].classList.add("hide");
        localStorage.setItem("cpu", ++comp);
        document.getElementsByClassName("comp_score")[0].innerHTML = localStorage.getItem("cpu");
    } else {//win
        document.getElementsByClassName("win_3")[0].classList.add("animate");
        document.getElementsByClassName("win_3")[0].classList.remove("trans");
        document.getElementsByClassName("win_2")[0].classList.remove("trans");
        document.getElementsByClassName("win_1")[0].classList.remove("trans");
        document.getElementsByClassName("pc_3")[0].classList.remove("animate");
        document.getElementsByClassName("pc_3")[0].classList.add("trans");
        document.getElementsByClassName("pc_2")[0].classList.add("trans");
        document.getElementsByClassName("pc_1")[0].classList.add("trans");
        document.getElementsByClassName("scissor")[2].classList.add("hide");   
        document.getElementsByClassName("paper")[2].classList.add("hide"); 
        document.getElementsByClassName("stone")[2].classList.remove("hide"); 
        document.getElementsByClassName("result_text_win")[0].classList.remove("hide");
        document.getElementsByClassName("result_text_lost")[0].classList.add("hide")
        document.getElementsByClassName("result_text_tie")[0].classList.add("hide");
        document.getElementsByClassName("result_text_fixed")[0].classList.remove("col_trans");
        document.getElementsByClassName("play_again")[0].classList.remove("hide");
        document.getElementsByClassName("replay")[0].classList.add("hide");
        document.getElementsByClassName("next_btn")[0].classList.remove("hide");
        localStorage.setItem("usr", ++user);
        document.getElementsByClassName("user_score")[0].innerHTML = localStorage.getItem("usr");
    }
}

document.getElementsByClassName("play_again")[0].addEventListener("click", refresh);
document.getElementsByClassName("replay")[0].addEventListener("click", refresh);
function refresh(){
    document.getElementsByClassName("play_area")[0].classList.remove("hide"); 
    document.getElementsByClassName("result_area")[0].classList.add("hide");
    document.getElementsByClassName("stone")[1].classList.add("hide");   
    document.getElementsByClassName("scissor")[1].classList.add("hide");   
    document.getElementsByClassName("paper")[1].classList.add("hide");
    document.getElementsByClassName("stone")[2].classList.add("hide");   
    document.getElementsByClassName("scissor")[2].classList.add("hide");   
    document.getElementsByClassName("paper")[2].classList.add("hide");
    document.getElementsByClassName("next_btn")[0].classList.add("hide");
}

console.log(localStorage.getItem("cpu"));
