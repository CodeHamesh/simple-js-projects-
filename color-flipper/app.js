function randomColos() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgb = `rgb(${r},${g},${b})`
    return rgb
}

let h1 = document.querySelector("h1")
let body = document.querySelector("body")


btn.addEventListener("click",()=>{
    body.style.backgroundColor = randomColos()
    h1.textContent = randomColos();

})