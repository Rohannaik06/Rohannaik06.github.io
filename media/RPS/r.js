let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const us=document.querySelector("#user-score");
const cs=document.querySelector("#comp-score");

const compchoice = () =>{
    const options=["rock","paper","scissors"];
    const idx=Math.floor(Math.random()*3);
    return options[idx];
}

const drawgame=()=>{
    msg.innerText="Game was draw. play again";
    msg.style.backgroundColor="gray";
}

const showwinner=(userwin)=>{
    if(userwin)
    {
        userscore++;
        us.innerText=userscore;
        msg.innerText="You win";
        msg.style.backgroundColor="green";
    }
    else
    {
        compscore++;
        cs.innerText=compscore;
        msg.innerText="You lose";
        msg.style.backgroundColor="red";
    }
}
const playgame=(userchoice)=>{
    console.log("user choice :",userchoice);
    const compChoice=compchoice();
    console.log("comp choice :",compChoice);

    if(userchoice === compChoice)
    {
        drawgame();
    }
    else
    {
        let userwin=true;
        if(userchoice==="rock")
        {
            userwin=compChoice==="paper" ? false:true;
        }
        else if(userchoice==="paper")
        {
            userwin=compChoice==="scissors" ? false:true;
        }
        else
        {
            userwin=compChoice==="rock" ? false:true;
        }
        showwinner(userwin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});