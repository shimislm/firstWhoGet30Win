let player1_coins, player2_coins, player1_status, player2_status, player1_dice, player2_dice;
window.onload = () => {
    // player1 = 5 player2 = 5
    player1_coins = player2_coins = 10;
    player1_status = player2_status = '';
    document.querySelector("#id_player1Coins").innerHTML = `${player1_coins}`;
    document.querySelector("#id_player2Coins").innerHTML = `${player2_coins}`;
}
// iphone zoom in disable
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});
// function diceRoll{} = const diceRoll = () =>{}
const diceRoll = () => {
    player1_dice = Math.ceil(Math.random() * 6)
    player2_dice = Math.ceil(Math.random() * 6)
    console.log(`${player1_dice},${player2_dice}`);
    document.querySelector("#id_img1").src = `dice_images/dice${player1_dice}.jpg`;
    document.querySelector("#id_img2").src = `dice_images/dice${player2_dice}.jpg`;
    // player1 win
    if (player1_dice > player2_dice) {
        player1_win();
    }
    // player2 win
    else if (player2_dice > player1_dice) {
        player2_win();
    }
    // even
    else {
        even_score();
    }
}

const player1_win = () => {
    // player1
    player1_coins+=2;
    if(player1_coins>=30)
    {
        resetGame();
        alert("Harley win");
        return;

    }
    document.querySelector("#id_status_player1").innerHTML = 'Win 2 coins';
    document.querySelector("#id_status_player1").style.color = 'green';
    document.querySelector("#id_player1Coins").innerHTML = `${player1_coins}`;
    //player2
    player2_coins-=1;
    if(player2_coins<=0){
        alert("Joker lose all his money , Harley win");
        resetGame();
        return;
    }
    document.querySelector("#id_status_player2").innerHTML = 'Lose 1 coins';
    document.querySelector("#id_status_player2").style.color = 'red';
    document.querySelector("#id_player2Coins").innerHTML = `${player2_coins}`;
}
const player2_win = () => {
        // player1
        player2_coins+=2;
        if(player2_coins>=30)
        {
            resetGame();
            alert("Joker win");
            return;
        }
        document.querySelector("#id_status_player2").innerHTML = 'Win 2 coins';
        document.querySelector("#id_status_player2").style.color = 'green';
        document.querySelector("#id_player2Coins").innerHTML = `${player2_coins}`;
        //player2
        player1_coins-=1;
        if(player1_coins<=0){
            alert("Harley lose all her money, Joker win");
            resetGame();
            return;
        }
        document.querySelector("#id_status_player1").innerHTML = 'Lose 1 coins';
        document.querySelector("#id_status_player1").style.color = 'red';
        document.querySelector("#id_player1Coins").innerHTML = `${player1_coins}`;
}
const even_score = () => {
    document.querySelector("#id_status_player2").innerHTML = 'even';
    document.querySelector("#id_status_player2").style.color = 'gray';
    document.querySelector("#id_status_player1").innerHTML = 'even';
    document.querySelector("#id_status_player1").style.color = 'gray';
}
const resetGame = () =>{
    player1_coins = 10;
    player2_coins = 10;
    document.querySelector("#id_status_player2").innerHTML = 'Lets Roll';
    document.querySelector("#id_status_player1").innerHTML = 'Lets Roll';
    document.querySelector("#id_status_player1").style.color = 'aqua';
    document.querySelector("#id_status_player2").style.color = 'aqua';
    document.querySelector("#id_player1Coins").innerHTML = `${player1_coins}`;
    document.querySelector("#id_player2Coins").innerHTML = `${player2_coins}`;
    document.querySelector("#id_img1").src = `dice_images/dice1.jpg`;
    document.querySelector("#id_img2").src = `dice_images/dice1.jpg`;
    
}