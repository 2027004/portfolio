/***************** ***************/
/***************** ***************/
/* CHANGING MARGINS!!!*/
/***************** ***************/
/***************** ***************/


function moveName(direction){
    if(direction=="right")
        currentDirect = window.getComputedStyle(user).right;
    if(direction=="left")
        currentDirect = window.getComputedStyle(user).right;
    if(direction=="up")
        currentDirect = window.getComputedStyle(user).top;
    if(direction=="bottom")
        currentDirect = window.getComputedStyle(user).top;

    currentDirect = currentDirect.slice(0,-2);

    if(direction=="right"){
        console.log(direction);
        currentDirect = Number(currentDirect) - 10;
        console.log(currentDirect);
        user.style.right = currentDirect + "px";
    }
    if(direction=="left"){
        console.log(direction);
        currentDirect = Number(currentDirect) + 10;
        console.log(currentDirect);
        user.style.right = currentDirect + "px";
    }
    if(direction=="up"){
        console.log(direction);
        currentDirect = Number(currentDirect) - 10;
        console.log(currentDirect);
        user.style.top = currentDirect + "px";
    }
    if(direction=="bottom"){
        console.log(direction);
        currentDirect = Number(currentDirect) + 10;
        console.log(currentDirect);
        user.style.top = currentDirect + "px";
    }
}

function moveBiog(direction){
    if(direction=="right")
        currentDirect = window.getComputedStyle(biog).right;
    if(direction=="left")
        currentDirect = window.getComputedStyle(biog).right;
    if(direction=="up")
        currentDirect = window.getComputedStyle(biog).top;
    if(direction=="bottom")
        currentDirect = window.getComputedStyle(biog).top;

    currentDirect = currentDirect.slice(0,-2);

    if(direction=="right"){
        console.log(direction);
        currentDirect = Number(currentDirect) - 10;
        console.log(currentDirect);
        biog.style.right = currentDirect + "px";
    }
    if(direction=="left"){
        console.log(direction);
        currentDirect = Number(currentDirect) + 10;
        console.log(currentDirect);
        biog.style.right = currentDirect + "px";
    }
    if(direction=="up"){
        console.log(direction);
        currentDirect = Number(currentDirect) - 10;
        console.log(currentDirect);
        biog.style.top = currentDirect + "px";
    }
    if(direction=="bottom"){
        console.log(direction);
        currentDirect = Number(currentDirect) + 10;
        console.log(currentDirect);
        biog.style.top = currentDirect + "px";
    }
}

//BOXES

function templatesChange(value){
    if(value =="1"){
        user.style.left = "40%";
        biog.style.left = "45%";

        box1.style.width = "30%";
        box1.style.height = "49%";
        box1.style.left = "0%";
        box1.style.bottom = "51%";

        box2.style.width = "30%";
        box2.style.height = "50.5%";
        box2.style.left = "70%";
        box2.style.bottom = "0%";

        box3.style.width = "40%";
        box3.style.height = "50.5%";
        box3.style.left = "30%";
        box3.style.bottom = "0%";

        box4.style.width = "30%";
        box4.style.height = "49%";
        box4.style.left = "70%";
        box4.style.bottom = "51%";

        box5.style.width = "30%";
        box5.style.height = "50.5%";
        box5.style.left = "70%";
        box5.style.bottom = "0%";

        box6.style.width = "0%";
        box6.style.height = "0%";
        box5.style.left = "0%";
        box5.style.bottom = "0%";
    }
    if(value =="2"){
        user.style.left = "10%";
        biog.style.left = "15%";

        box1.style.width = "30%";
        box1.style.height = "33%";
        box1.style.left = "40%";
        box1.style.bottom = "67%";

        box2.style.width = "30%";
        box2.style.height = "33%";
        box2.style.left = "70%";
        box2.style.bottom = "67%";

        box3.style.width = "30%";
        box3.style.height = "33%";
        box3.style.left = "40%";
        box3.style.bottom = "33.5%";

        box4.style.width = "30%";
        box4.style.height = "33%";
        box4.style.left = "70%";
        box4.style.bottom = "33.5%";

        box5.style.width = "30%";
        box5.style.height = "33%";
        box5.style.left = "40%";
        box5.style.bottom = "0%";

        box6.style.width = "30%";
        box6.style.height = "33%";
        box6.style.left = "70%";
        box6.style.bottom = "0%";
        
    }
    if(value =="3"){
        user.style.left = "40%";
        biog.style.left = "45%";

        box1.style.width = "33%";
        box1.style.height = "33%";
        box1.style.left = "0%";
        box1.style.bottom = "33%";

        box2.style.width = "33%";
        box2.style.height = "33%";
        box2.style.left = "0%";
        box2.style.bottom = "0%";

        box3.style.width = "34%";
        box3.style.height = "33%";
        box3.style.left = "33%";
        box3.style.bottom = "33%";

        box4.style.width = "34%";
        box4.style.height = "33%";
        box4.style.left = "33%";
        box4.style.bottom = "0%";

        box5.style.width = "33%";
        box5.style.height = "33%";
        box5.style.left = "67%";
        box5.style.bottom = "33%";

        box6.style.width = "33%";
        box6.style.height = "33%";
        box6.style.left = "67%";
        box6.style.bottom = "0%";
    }
}

