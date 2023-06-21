// Dark Mode Functionality
const root = document.querySelector(":root");
const cs = getComputedStyle(root)


function toggleDark(btn) {

    document.body.style.transition = "2s";
    
    if (document.body.style.background === "rgb(33, 33, 33)"){
        document.body.style.background = "white";
        btn.innerHTML = `<i class="fal fa-moon"></i>`
        root.style.setProperty("--pri-color", "#e3e6f3")
        root.style.setProperty("--pri-text-color", "#1a1a1a")
        root.style.setProperty("--dark-text", "#1a1a1a")
        root.style.setProperty("--sec-text-color", "#465b52")
        root.style.setProperty("--heading-text-color", "#222")
        root.style.setProperty("--gray-text", "gray")

        
    }
    else{
        document.body.style.background = "#212121";
        btn.innerHTML = `<i class="fal fa-sun"></i>`
        root.style.setProperty("--pri-color", "#212121")
        root.style.setProperty("--pri-text-color", "white")
        root.style.setProperty("--dark-text", "white")
        root.style.setProperty("--sec-text-color", "#abc5ba")
        root.style.setProperty("--heading-text-color", "white")
        root.style.setProperty("--gray-text", "#abc5ba")
    }

}