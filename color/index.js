// GREET
function greet() {
    let name = document.getElementById(`nameInput`).value
    let lastName = document.getElementById(`lastNameInput`).value
    window.location.href= `newpage.html?name=${name}&lastName=${lastName}`
}

window.onload = function() {
    let urlParams= new URLSearchParams(window.location.search);
    let name= urlParams.get(`name`);
    let lastName= urlParams.get(`lastName`);
    document.getElementById(`returnName`).textContent = `${name} ${lastName}`;
}
// COLOR
function color() {
    let color = document.getElementById(`colorInput`).value;
    document.getElementById(`returnColor`).style.background = color;
}
const btn = document.getElementById(`btn`);
btn.addEventListener('click',  function() {
    let color = document.getElementById(`colorInput`).value;
    document.getElementById(`returnColor`).style.background = color;
    document.getElementById(`returnColorValue`).textContent = `${color}`;
});
// RANDOM COLOR
function getRandomColor() {
    let letters =`0123456789ABCDEF`;
    let color = `#`;
    for (i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*6)]
    }
    return color;
}
btnRandom.addEventListener(`click`, function(){
    let randomColor = getRandomColor();
    document.getElementById(`returnColor2`).style.background = randomColor;
    document.getElementById(`returnColorValue2`).textContent = randomColor;
})