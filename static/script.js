
const generateRandomNumber = () => {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    // console.log(randomNumber);
    return randomNumber;
}

document.addEventListener("DOMContentLoaded", ()=> {
    const btn = document.querySelector(".btn");
    const res = document.querySelector(".rand");
    btn.addEventListener("click", ()=>{
        var rand = generateRandomNumber();
        console.log(rand);
        res.textContent = rand;
    });
});