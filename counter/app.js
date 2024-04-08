let count = document.querySelector("#main h1")
let inc = document.querySelector("#in")
let de = document.querySelector("#de")
let re = document.querySelector(".re")

let num = 0

inc.addEventListener('click',()=>{
    num +=1
    count.textContent = num
})
de.addEventListener('click',()=>{
    num += -1
    count.textContent = num
})
re.addEventListener('click',()=>{
    num = 0
    count.textContent = nums
})