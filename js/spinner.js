window.addEventListener("load", function () {
    const loadingScreen = document.getElementById("loading");
    if (loadingScreen) {
        loadingScreen.style.opacity = "0"; // Fade out
        setTimeout(() => {
            loadingScreen.style.display = "none"; // Hide completely after fade-out
        }, 500); // Match this with CSS transition time
    }
});
