if (window.innerWidth < 768) {
    console.log("Screen is less than 768px")
}

function screenSize() {
    if (window.innerWidth < 768) {
        console.log("Screen is less than 768px")
        
    }
}

window.onresize = screenSize;