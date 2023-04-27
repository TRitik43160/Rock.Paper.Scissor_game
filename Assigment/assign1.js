var computerscore = 0;
var userscore = 0;

//span id
const user_score = document.getElementById('s1');
const computer_score = document.getElementById('s2');

//div class
const scoreboard = document.querySelector(".scoreboard");
const result = document.querySelector("p");

//img id
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissors = document.getElementById('s');


rock.addEventListener("click", function () {
    game('r');
});
paper.addEventListener('click', function () {
    game('p');
});
scissors.addEventListener('click', function () {
    game('s');
});


function getcomputerchoice() {
    const choices = ['r', 'p', 's'];
    const randomnumber = Math.floor(Math.random() * 3);
    return choices[randomnumber];
}

function game(userchoice) {
    const computerchoice = getcomputerchoice();
    switch (userchoice + computerchoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userchoice, computerchoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userchoice, computerchoice);
            break;

        case 'rr':
        case 'pp':
        case 'ss':
            draw(userchoice, computerchoice);
            break;
    }

}

function convert(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    else
        return "Scissors";
}

function win(userchoice, computerchoice) {

    const smalluser = "user".fontsize(3).sub();
    const smallcomp = "comp".fontsize(3).sub();
    const user_choice = document.getElementById(userchoice);
    userscore++;
    user_score.innerHTML = userscore;
    computer_score.innerHTML = computerscore;
    result.innerHTML = `${convert(userchoice)}${smalluser} beats ${convert(computerchoice)}${smallcomp}.you win!!`
    user_choice.classList.add('green-glow');
    setTimeout(() => { user_choice.classList.remove('green-glow'); }, 500);
}

function lose(userchoice, computerchoice) {
    computerscore++;
    user_score.innerHTML = userscore;
    computer_score.innerHTML = computerscore;
    const user_choice = document.getElementById(userchoice);
    const smalluser = "user".fontsize(3).sub();
    const smallcomp = "comp".fontsize(3).sub();
    result.innerHTML = `${convert(userchoice)}${smalluser}  beaten from  ${convert(computerchoice)}${smallcomp} .You lose!!`
    user_choice.classList.add('red-glow');
    setTimeout(() => { user_choice.classList.remove('red-glow'); }, 500);
}

function draw(userchoice, computerchoice) {
    const user_choice = document.getElementById(userchoice);
    user_score.innerHTML = userscore;
    computer_score.innerHTML = computerscore;
    const smalluser = "user".fontsize(3).sub();
    const smallcomp = "comp".fontsize(3).sub();
    result.innerHTML = `${convert(userchoice)}${smalluser} draws ${convert(computerchoice)}${smallcomp}.It's a Draw!!`
    user_choice.classList.add('grey-glow');
    setTimeout(() => { user_choice.classList.remove('grey-glow'); }, 500);
}





