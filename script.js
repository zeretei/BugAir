let stats = {
  coins: 0, //coins
  p1: 15, //price 1 for upgrade 1
  ps1: 0 //per second for upgrade 1
}

function add(){//adds coins
  stats.coins++;//+1
  document.getElementById("coins").innerHTML="Coins: " + stats.coins;
}


function b1() {
    if (stats.coins >= stats.p1) {
        stats.ps1++;
        stats.coins = stats.coins - stats.p1;
        stats.p1 = Math.round(stats.p1 * 1.15);
        document.getElementById("u1").innerHTML = "Price: " + stats.p1 + " Upgrades - " + stats.ps1;//updates the html
        document.getElementById("coins").innerHTML = "Coins: " + stats.coins;//updates the html
    } else {
        alert('Not enough cows!');
    }
}
setInterval(function() {
  stats.coins = stats.coins + stats.ps1;//changes
  document.getElementById("coins").innerHTML = "Coins: " + stats.coins;
}, 1000);//every second
