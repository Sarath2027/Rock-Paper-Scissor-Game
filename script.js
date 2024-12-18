let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const gencmpChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const shoWinner=(userWin,userChoice,cmpChoice)=>{
    if(userWin){
        userscore++;
        userscorepara.textContent=userscore;
        msg.textContent=`You Win ! Your ${userChoice} beats ${cmpChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.textContent=compscore;
        msg.textContent=`You Lose ! ${cmpChoice} beats your${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{ 
    let cmpChoice=gencmpChoice();
    if(userChoice===cmpChoice){
        msg.textContent=`It's Draw, Computer also chose ${cmpChoice}`;
        msg.style.backgroundColor="#081b31"
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=cmpChoice==="paper" ?false:true;
        }
        else if(userChoice==="paper"){
            userWin=cmpChoice==="scissor"?false:true;
        }
        else{
            userWin=cmpChoice==="rock"?false:true;
        }
        shoWinner(userWin,userChoice,cmpChoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const choiceId=choice.getAttribute("id");
        playGame(choiceId);
    });
});