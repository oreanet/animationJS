const button = document.querySelector("#btn");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const button2 =document.querySelectorAll("#btn2");

let mode = true;
let mode2=true;
let firstclick = false;
let nbclick=0;

button.addEventListener("click", function() {
    if(!firstclick)
    {
        button.classList.remove("btn");
        firstclick=true;
    }

    h1.classList.toggle("purple");
    body.classList.toggle("black");

    nbclick++;

    if(mode)
    {
        button.className = "Jour"; 
        button.classList.remove("btnnight");
        button.classList.add("btnday");
        this.textContent = " Mode Jour";
        mode=false;
    }
    else
    {
        button.className = "Nuit"; 
        button.classList.remove("btnday");
        button.classList.add("btnnight");
        this.textContent = "Mode Nuit";
        mode=true;
    }
    
    if(nbclick>10)
    {
        button2.forEach(btn => {
            btn.textContent="ne clique pas trop fort!";
            btn.classList.add("btn2_3");
        });  
    }
    
})

button2.forEach(btn => {
    btn.addEventListener("click", function() {
        if(mode2)
        { 
            btn.classList.remove("btn2_1");
            btn.classList.add("btn2_2");
            btn.textContent="on a tous le meme effet!";
            mode2=false;
        }
        else
        {
            btn.textContent="on a tous le meme effet!";
            btn.classList.remove("btn2_2");
            btn.classList.add("btn2_1");
            mode2=true;
        }
    })
});

button.addEventListener("click", function(e) {
    
    let x = e.clientX - e.target.offsetLeft+860;
    let y = e.clientY - e.target.offsetTop +380;

    let ripples = document.createElement('span');
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";
    button.appendChild(ripples);

    setTimeout(() =>{
        ripples.remove();
    },1000);
})

