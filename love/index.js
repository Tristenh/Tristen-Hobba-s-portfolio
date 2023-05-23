
function loveCalculator() {
    let loveScore = Math.random() *100;
    loveScore = Math.floor(loveScore) + 1;
    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById("name2").value;
    let score = loveScore <= 20 ? 'no way 🤮' 
    :(loveScore <= 40) ? 'no'
    :(loveScore <= 55) ? 'maybe' 
    :(loveScore <= 70) ? 'yes' 
    :(loveScore <= 85)? 'damn' 
    : 'OHH YEAAAHH 👉 👌'
    document.getElementById('score').textContent = `${score}`;
    document.getElementById("input").textContent =`${ name1} ❤️ ${name2}`;
    document.getElementById("loveScore").textContent =`${loveScore}%`;
}