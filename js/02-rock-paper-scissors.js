let cpuOptions  = ['rock', 'paper', 'scissors'];
let cpuChoice   = cpuOptions[Math.floor(Math.random() * 3)];
let yourChoice  = prompt('Which one do you choose? Rock, Paper, or Scissors');

rockPaperScissors(yourChoice, cpuChoice);


function rockPaperScissors(yourChoice, cpuChoice) {
    const currentMatch = `You: ${yourChoice} vs Computer: ${cpuChoice}`;

    if (yourChoice == cpuChoice) {
        alert(`${currentMatch} is a Tie`);
        return;
      }

    if (yourChoice == "Rock" && cpuChoice == "Scissors" ) {
        alert(`${currentMatch} = You Win`);
        } else if (cpuChoice == "Paper") {
        alert(`${currentMatch} = Computer Wins`);
        } 
        
    if (yourChoice == "Paper" && cpuChoice == "Rock") {
          alert(`${currentMatch} = You Win`);
        } else if (cpuChoice == "Scissors") {
          alert(`${currentMatch} = Computer Wins`);
        }

    if (cpuChoice == "Paper") {
          alert(`${currentMatch} = You Win`);
        } else {
          alert(`${currentMatch} = Computer Wins`);
        }
      }

    // if (yourChoice === "Rock") {
    //   if (cpuChoice === "Scissors") {
        // alert(`${currentMatch} = You Win`);
    //   } else {
        // alert(`${currentMatch} = Computer Wins`);
    //   }
    // } else if (yourChoice === "Paper") {
    //   if (cpuChoice === "Rock") {
        // alert(`${currentMatch} = You Win`);
    //   } else {
        // alert(`${currentMatch} = Computer Wins`);
    //   }
    // } else {
    //   if (cpuChoice === "Paper") {
        // alert(`${currentMatch} = You Win`);
    //   } else {
        // alert(`${currentMatch} = Computer Wins`);
    //   }
    // }
// }
// rockPaperScissors(yourChoice, cpuChoice);