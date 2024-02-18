let nextButton = document.getElementById("next")
let backButton = document.getElementById("back")
let card = document.querySelector(".card")
let i = 1, variation = 0;
let audio = new Audio("Piano\ Trap\ Beethoven\ -\ josh\ pan.mp3")
audio.currentTime = 11;
audio.play()

console.log(nextButton)
console.log(backButton)
console.log(card)


let change = () => {
    
    console.log("variation : " + variation)    
    if (variation >= 3 * 17.75 || i>=4) {    
        variation = 0;
        i = 0;
    }
    else
    {
        ++i;
        variation += 17.75;
    }
    card.style.transform = `translateX(-${variation}rem)`
    
    console.log("i : "+i)
    console.log("variation : "+ variation)
}

let Interval = setInterval(() => {
    /*
    ++i
        
    if(i==0)
        card.style.transform = `translateX(53.15)}rem)`
    else if(i==4)
        card.style.transform = `translateX(0)}rem)`    
    
    else
    {
        variation+=17.75
        card.style.transform = `translateX(-${variation}rem)`
    }

    if(i==0)
    {
        i=4;
        variation = 53.15
    }
    else if(i==4)
    {
        i = 0;
        variation = 0
    }
    */

    change()
}, 2500);


nextButton.addEventListener("click", () => {
    clearInterval(Interval);
    if (i >= 4) {
        i = 1;
        variation = 0
        card.style.transform = `translateX(${variation}rem)`
    }
    else {
        variation += 17.75
        card.style.transform = `translateX(-${variation}rem)`
        ++i;
    }
    Interval = setInterval(() => change(), 2500);

})

backButton.addEventListener("click", () => {
    clearInterval(Interval);
    
    if (i == 1) 
    {
        i = 4;
        variation = (3 * 17.75)
        card.style.transform = `translateX(-${variation}rem)`
    }
    else {
        variation -= 17.75
        card.style.transform = `translateX(-${variation}rem)`
        --i;
    }
    Interval = setInterval(() => change(), 2500);
})