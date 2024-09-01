let userScore=0;
let compScore=0;

let choices= document.querySelectorAll(".choice");
let msg= document.querySelector("#message");
let userResult=document.querySelector("#user-result");
let compResult=document.querySelector("#computer-result");

const genCompChoice=() =>{
    const options= ["rock","paper","scissor"];
    const ranId=Math.floor(Math.random() *3);
    return options[ranId];
}


const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin)
        {
            // console.log("Huraayyy !!!! You Win");
            msg.innerText=`Huraayyy !!!! You Win  Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor="green";
            userScore++;
            userResult.innerText=userScore;
        }
    else{
        // console.log("Alass !! You lose");
        msg.innerText=`Alass !! You lose Computers ${compChoice} beats Your ${userChoice} `;
        msg.style.backgroundColor="red";
        compScore++;
        compResult.innerText=compScore;
    }    
}

const draw = (userChoice) => {
    // console.log("Game is draw!!");
    msg.innerText=`Game is draw!! You and Computer chose ${userChoice}`;
    msg.style.backgroundColor="#2a4849";
}

const playGame= (userChoice)=>{
    // console.log("User Choice = ",userChoice);
    const compChoice=genCompChoice();
    // console.log("Computer Choice = ",compChoice);
    
    if(userChoice === compChoice)
        {
            draw(userChoice);   
        }
        else{
             let userWin= true;

             if(userChoice === "rock")
                {
                    //comp= paper, scissor
                    userWin = compChoice === "paper" ? false : true;

                } else if(userChoice === "paper")
                {
                    userWin = compChoice === "rock" ? true : false; 
                } else{
                    userWin= compChoice === "rock" ? false : true;
                }  
                showWinner(userWin,userChoice,compChoice);  
        }
        
        
}


choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click",() =>{
        userChoice=choice.getAttribute("id");
        // console.log("element was clicked.",userChoice);
        playGame(userChoice);
    })
})

