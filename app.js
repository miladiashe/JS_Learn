const title = document.querySelector(".title h1");

function handleTitleClick() {
    if (title.className === "active"){
        title.className = ""
    }else{
        title.className = "active"
    }
}

title.onclick = handleTitleClick