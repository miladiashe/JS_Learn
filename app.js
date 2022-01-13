const title = document.querySelector(".title h1");

function handleTitleClick() {
    title.style.color = "red"
}

function handleMouseEnter() {
    title.style.color = "Violet"
}

function handleMouseLeave() {
    title.style.color = "Purple"
}

title.onclick = handleTitleClick
title.addEventListener("mouseenter", handleMouseEnter)
title.addEventListener("mouseleave", handleMouseLeave)

