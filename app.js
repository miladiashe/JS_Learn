const title = document.querySelector(".title h1");

function handleTitleClick() {
    const currentColor = title.style.color
    let newColor
    if (currentColor === "blue") {
        newColor = "pink"
    }else{
        newColor = "blue"
    }
    title.style.color = newColor

}

title.onclick = handleTitleClick