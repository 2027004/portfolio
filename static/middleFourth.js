nameSub.onclick = function(){
    const myName = document.getElementById("nameText").value;
    fetch("/my-page", {
        method: "POST",
        headers : {
            "Content-Type": "application/json",
            "Authorization": auth.currentUser.uid    // 👈 send UID here!
        },
        body: JSON.stringify({title : myName})
    })
    .then(() => {document.getElementById("user").textContent = `${myName}'s Portfolio`});
}

biogSub.onclick = function(){
    const myBio = document.getElementById("bio").value;
    fetch("/my-page", {
        method:"POST",
        headers: {
            "Content-Type":"application/json",
            "Authorization": auth.currentUser.uid    // 👈 send UID here!
        },
        body: JSON.stringify({biog:myBio})
    })
    .then(() => {document.getElementById("biog").textContent = myBio});
}



function showMenu(){
    menuArrow = document.getElementById("menuArrow");
    menu = document.getElementById("menu");
    menuLoadOut = document.getElementById("menuLoadOut");
    if(getComputedStyle(menu).top == "0px"){
        menu.style.top = "200px";
        menuLoadOut.style.display = "block";
        menuArrow.textContent = "/\\"
    }
    else if(getComputedStyle(menu).top == "200px"){
        menu.style.top = "0px";
        menuLoadOut.style.display = "none";
        menuArrow.textContent = "\\/"
    }
}

function writePop(){
    write.style.display = "block";
}
function colorsPop(){
    colors.style.display = "block";
}
function marginPop(){
    margin.style.display = "block";
}
function templatesPop(){
    templates.style.display = "block";
}
function boxInfoPop(){
    boxInfo.style.display = "block";
}

function templatesCloser(){
    templates.style.display = "none";
}
function nameCloser(){
    write.style.display= "none";
}
function colorCloser(){
    colors.style.display = "none";
}
function marginCloser(){
    margin.style.display = "none";
}
function boxInfoCloser(){
    boxInfo.style.display = "none";
}



function changeBox1Color(value){
    box1.style.borderColor = value;
    box1Text.style.color = value;
}
function changeBox2Color(value){
    box2.style.borderColor = value;
    box2Text.style.color = value;
}
function changeBox3Color(value){
    box3.style.borderColor = value;
    box3Text.style.color = value;
}
function changeBox4Color(value){
    box4.style.borderColor = value;
    box4Text.style.color = value;
}
function changeBox5Color(value){
    box5.style.borderColor = value;
    box5Text.style.color = value;
}
function changeBox6Color(value){
    box6.style.borderColor = value;
    box6Text.style.color = value;
}

function centre(){
    console.log("it works");
    document.getElementById("user").style.left = "40%"
    document.getElementById("biog").style.left = "43%"
  }

function changeBox1Name(value){
    box1Text.textContent = value;
    if(value=="serviceHours")
        box1Text.textContent = "Service Hours";
}
function changeBox2Name(value){
    box2Text.textContent = value;
    if(value=="serviceHours")
        box2Text.textContent = "Service Hours";
}
function changeBox3Name(value){
    box3Text.textContent = value;
    if(value=="serviceHours")
        box3Text.textContent = "Service Hours";
}
function changeBox4Name(value){
    box4Text.textContent = value;
    if(value=="serviceHours")
        box4Text.textContent = "Service Hours";
}
function changeBox5Name(value){
    box5Text.textContent = value;
    if(value=="serviceHours")
        box5Text.textContent = "Service Hours";
}
function changeBox6Name(value){
    box6Text.textContent = value;
    if(value=="serviceHours")
        box6Text.textContent = "Service Hours";
}
