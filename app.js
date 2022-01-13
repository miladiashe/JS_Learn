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

function handleWindowResize() {
    document.body.style.backgroundColor = "Yellow"
    
}

function handleOffline() {
    alert("살려주세오 와이파이가 없어오")
}

function handleOnline() {
    alert("살았어오 와이파이가 있어오")
}


title.onclick = handleTitleClick
title.addEventListener("mouseenter", handleMouseEnter)
title.addEventListener("mouseleave", handleMouseLeave)

window.addEventListener("resize", handleWindowResize)
window.addEventListener("offline", handleOffline)
window.addEventListener("online", handleOnline)