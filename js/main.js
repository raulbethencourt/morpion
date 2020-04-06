$(document).ready(function () {

    $('.case').click(function setPlayers() {

        if (count % 2) {
            $(this).append(player2);
            $(this).css({
                "background-color": "red",
                "border-color": "red"
            });
        } else {
            $(this).append(player1);
            $(this).css({
                "background-color": "black",
                "color": "red"
            });
        };
        
        count++;
    });

    const player1 = '<i class="fas fa-expand-arrows-alt"></i>';
    const player2 = '<i class="fas fa-circle-notch"></i>';
    let count = 0;
});