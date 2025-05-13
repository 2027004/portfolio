let portfolio = document.getElementById("portfolio");
let signlogin = document.getElementById("signlogin");

let user = document.getElementById("user");
let biog = document.getElementById("biog");
let loggedIn = false;


let nameSub = document.getElementById("nameSub");
let biogSub = document.getElementById("biogSub");
let nameMain = document.getElementById("nameMain");
let biogMain = document.getElementById("biogMain");
let bgColor = document.getElementById("bgColor");

// pop-up menus
let write = document.getElementById("write");
    write.style.display="none";
let colors = document.getElementById("colors");
    colors.style.display="none";
let margin = document.getElementById("margin");
    margin.style.display="none";
let templates = document.getElementById("templates");
    templates.style.display="none";
let boxInfo = document.getElementById("boxInfo");
    boxInfo.style.display="none"
    
box1 = document.getElementById("box1");
    box1Text = document.getElementById("box1Text");
box2 = document.getElementById("box2");
    box2Text = document.getElementById("box2Text");
box3 = document.getElementById("box3");
    box3Text = document.getElementById("box3Text");
box4 = document.getElementById("box4");
    box4Text = document.getElementById("box4Text");
box5 = document.getElementById("box5");
    box5Text = document.getElementById("box5Text");
box6 = document.getElementById("box6");
    box6Text = document.getElementById("box6Text");

let inClub = false;


//Make the DIV elements draggable:

/* CHANGE COLOR BUTTON */
function changeColor(color){
    fetch("/my-page", {
        method:"POST",
        headers: {
            "Content-Type":"application/json",
            "Authorization": auth.currentUser.uid    // 👈 send UID here!
        },
        body: JSON.stringify({background_color:color})
    })
    .then(() => {document.body.style.backgroundColor = color});
}
function changeNameColor(nameColor){
    fetch("/my-page", {
        method:"POST",
        headers: {
            "Content-Type":"application/json",
            "Authorization": auth.currentUser.uid    // 👈 send UID here!
        },
        body: JSON.stringify({name_color:nameColor})
    })
    .then(() => {user.style.color = nameColor});
}
function changeBiogColor(biogColor){
    fetch("/my-page", {
        method:"POST",
        headers: {
            "Content-Type":"application/json",
            "Authorization": auth.currentUser.uid    // 👈 send UID here!
        },
        body: JSON.stringify({biog_color:biogColor})
    })
    .then(() => {biog.style.color = biogColor});
}