const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const score_div = document.querySelector('score');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const playagain_button = document.getElementById('playagainbutton');

let playerScore = 0;
let computerScore = 0;
let round = 0;

function win(userChoice, computerChoice) {
    playerScore++;
    round++;
    userScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `<h2>${userChoice} beats ${computerChoice}, player wins</h2>`;
    gameOver();
}

function lose(userChoice, computerChoice) {
    computerScore++;
    round++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = playerScore;
    result_div.innerHTML = `<h2>${computerChoice} beats ${userChoice}, computer wins</h2>`;
    gameOver();
}

function draw(userChoice, computerChoice) {
    round++;
    result_div.innerHTML = `<h2>${userChoice} and ${computerChoice}, it's a draw!</h2>`;
    userScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    gameOver();
}


function gameOver() {
    if(round === 3 && (playerScore > computerScore)) {
        result_div.innerHTML = `<h2>You win :)</h2>`;
        rock_div.style.pointerEvents = 'none';
        paper_div.style.pointerEvents = 'none';
        scissors_div.style.pointerEvents = 'none';
        playagain_button.style.visibility = 'visible';
        playAgain();
    }

    else if(round === 3 && (playerScore < computerScore)) {
        result_div.innerHTML = `<h2>You lose :(</h2>`;
        rock_div.style.pointerEvents = 'none';
        paper_div.style.pointerEvents = 'none';
        scissors_div.style.pointerEvents = 'none';
        playagain_button.style.visibility = 'visible';
        playAgain();
    }
}

function playAgain(){
    playagain_button.addEventListener('click', function(){
        window.location.reload();
    });
}

function computerPlay() {
    const movearr = [
        'Rock',
        'Paper',
        'Scissors'
    ];
    const move = movearr[Math.floor(Math.random() * movearr.length)];
    return move;
}


function game(userChoice) {
        const computerChoice = computerPlay();
        switch (userChoice + computerChoice){
            case 'RockScissors':
            case 'PaperRock':
            case 'ScissorsPaper':
                win(userChoice, computerChoice);
                console.log(round);
            break;
            
            case 'RockPaper':
            case 'PaperScissors':
            case 'ScissorsRock':
                lose(userChoice, computerChoice);
                console.log(round);
            break;

            case 'RockRock':
            case 'PaperPaper':
            case 'ScissorsScissors':
                draw(userChoice, computerChoice);
                console.log(round);
            break;
        }    
}

function main(){
    rock_div.addEventListener('click', function(){
        game('Rock')
    });

    paper_div.addEventListener('click', function(){
        game('Paper')
    });

    scissors_div.addEventListener('click', function(){
        game('Scissors')
    });
}

main();
