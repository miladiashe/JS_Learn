const title = document.querySelector(".title h1");

function handleTitleClick() {
    const clickedClass = "clicked"
    title.classList.toggle(clickedClass)
}

title.onclick = handleTitleClick