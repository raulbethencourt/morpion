$(document).ready(function () {

    $('.case').click(function setPlayers() {

        if (count % 2) {
            $(this).append(player2);
        } else {
            $(this).append(player1);
        };
        count++;

    });

    const player1 = "X";
    const player2 = "O";
    let count = 0;

});