let user_score=0;
let computer_score=0;
const userscore_span=document.getElementById("user-score");
const computerscore_span=document.getElementById("computer-score");
const result_div=document.querySelector(".result");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");
const smalluserword = "user".fontsize(3).sub();
const smallcompword = "comp".fontsize(3).sub();

function getcomputerchoice() {
	const choices = ['r','p','s'];
	const random_number=Math.floor(Math.random()*3);
	return choices[random_number];
}

function converttoword(letter) {
	if (letter=='r') return "Rock"
	if (letter=='p') return "Paper"
	if (letter=="s") return "Scissor"
}

function win(user_choice,computer_choice) {
const user_choice_div=document.getElementById(user_choice);
user_score++;
userscore_span.innerHTML = user_score;
result_div.innerHTML = `${converttoword(user_choice)}${smalluserword} beats ${converttoword(computer_choice)}${smallcompword}. You win!`;
user_choice_div.classList.add('green-glow'); 
setTimeout(function() {user_choice_div.classList.remove('green-glow')},300); 
}

function lose(user_choice,computer_choice) {
const user_choice_div=document.getElementById(user_choice);
computer_score++;
computerscore_span.innerHTML = computer_score;
result_div.innerHTML = `${converttoword(user_choice)}${smalluserword} loses to ${converttoword(computer_choice)}${smallcompword}. You lost!`;
user_choice_div.classList.add('red-glow'); 
setTimeout(function() {user_choice_div.classList.remove('red-glow')},300); 
}

function draw(user_choice,computer_choice) {
const user_choice_div=document.getElementById(user_choice);
result_div.innerHTML = `${converttoword(user_choice)}${smalluserword} equals ${converttoword(computer_choice)}${smallcompword}. It is a draw!`;
user_choice_div.classList.add('grey-glow'); 
setTimeout(function() {user_choice_div.classList.remove('grey-glow')},300); 
}


function game(user_choice) {
	const computer_choice=getcomputerchoice();
	switch(user_choice+computer_choice) {
		case "rs":
		case "pr":
		case "sp":
			win(user_choice,computer_choice);
			break;

		case "rp":
		case "ps":
		case "sr":
			lose(user_choice,computer_choice);
			break;

		case "rr":
		case "pp":
		case "ss":
			draw(user_choice,computer_choice);
			break;
	}
}


function main() {
	rock_div.addEventListener("click",function() {
		game("r");
	})

	paper_div.addEventListener("click",function() {
	game("p");
	})

	scissors_div.addEventListener("click",function() {
	game("s");
	})	
}

main();