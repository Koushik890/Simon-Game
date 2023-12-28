let gameSeq = [];
let userSeq = [];
let h2 = document.querySelector("h2");
let colour = ["pink", "orange", "blue", "purple"];
let body = document.querySelector("body");

let started = false;
let level = 0;

document.addEventListener("keypress", function(){
    if(started === false){
        console.log("Game started");
        started = true;
        levelUp();
    }
});

let reset = () => {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

let gameFlash = function(btn){
    btn.classList.add('flash');
    setTimeout(() => {
        btn.classList.remove('flash');
    }, 250);
}

let userFlash = function(btn){
    btn.classList.add('greenFlash');
    setTimeout(() => {
        btn.classList.remove('greenFlash');
    }, 250);
}

let sysFlash = function(body){
    body.classList.add('redFlash');
    setTimeout(() => {
        body.classList.remove('redFlash');
    }, 250);
}


let levelUp = function(){
    // userSeq = [];
    level++;
    h2.innerText = `Level - ${level}`;

    let randNum = Math.floor((Math.random()) * 3);
    let randCol =  colour[randNum];
    gameSeq.push(randCol);
    let randBtn = document.querySelector(`.btn-${randCol}`);

    // console.log(randNum);
    // console.log(randCol);
    // console.log(randBtn);
    console.log('gameSeq',gameSeq);
    gameFlash(randBtn);

}

let checkAns = ()=>{
 
    let idx = userSeq.length - 1;
    console.log(idx);

    console.log('userSeq idx- ',userSeq[idx]);
    console.log('gameSeq idx- ',gameSeq[idx]);

    console.log("userSeq while checking",userSeq);
    console.log("gameSeq while checking",gameSeq);

    if(gameSeq[idx] === userSeq[idx]){
        console.log("Can play...");
        if(gameSeq.length == userSeq.length){
            setTimeout(() =>{
                userSeq = [];
                levelUp();
                console.log("userSeq after level-up",userSeq);
            }, 1000);
        }
        
    }else{
        h2.innerHTML = "<br>Game Over! Press any key to start";
        h2.prepend(`You Scored ${level}`);
        sysFlash(body);
        reset();
    }
}

let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click", function(){
        // console.log(this);
        userFlash(this); 
        userSeq.push(this.classList[1].slice(4));
        console.log('userSeq',userSeq);

        checkAns();

    });
}