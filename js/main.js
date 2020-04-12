$(document).ready(function () {

    $('.case').click(function setPlayers() {

        if (count % 2) {

            $(this).append(player1);
            console.log($(this).attr("id") + $(this).attr("coords"));
            $(this).css({
                "background-color": "red",
                "border-color": "red"
            });

            if (+$(this).attr("id") == 1) {
                v1_h1 += 1
            }
            if (+$(this).attr("id") == 2) {
                v1_h2 += 1
            }
            if (+$(this).attr("id") == 3) {
                v1_h3 += 1
            }

            if (v1_h1 === 3 || v1_h2 === 3 || v1_h3 === 3) {
                v1 = true;
                alert("PLAYER 1 WINS");
                location.reload();
            }

            if (+$(this).attr("coords") == 1) {
                v1_v1 += 1
            }
            if (+$(this).attr("coords") == 2) {
                v1_v2 += 1
            }
            if (+$(this).attr("coords") == 3) {
                v1_v3 += 1
            }

            if (v1_v1 === 3 || v1_v2 === 3 || v1_v3 === 3) {
                v1 = true;
                alert("PLAYER 1 WINS");
                location.reload();
            }

            if (+$(this).attr("coords") == 2 && +$(this).attr("id") == 2) {
                var v1_d = 1;
            }

            if (v1_d === 1 && 
                ((v1_h1 === 1 && v1_v1 === 1) || (v1_h1 === 1 && v1_v3 === 1)  || 
                (v1_h1 === 2 && v1_v1 === 2) || (v1_h1 === 2 && v1_v3 === 2 )) && 
                ((v1_h3 === 1 && v1_v1 === 1) || (v1_h3 === 1 && v1_v3 === 1) || 
                (v1_h3 === 2 && v1_v1 === 2) || (v1_h3 === 2 && v1_v3 === 2))) {
                v1 = true;
                alert("PLAYER 1 WINS");
                location.reload();
            }

        } else {

            $(this).append(player2);
            console.log($(this).attr("id") + $(this).attr("coords"));
            $(this).css({
                "background-color": "black",
                "color": "red"
            });

            if (+$(this).attr("id") == 1) {
                v2_h1 += 1
            }
            if (+$(this).attr("id") == 2) {
                v2_h2 += 1
            }
            if (+$(this).attr("id") == 3) {
                v2_h3 += 1
            }

            if (v2_h1 === 3 || v2_h2 === 3 || v2_h3 === 3) {
                v2 = true;
                alert("PLAYER 2 WINS");
                location.reload();
            }

            if (+$(this).attr("coords") == 1) {
                v2_v1 += 1
            }
            if (+$(this).attr("coords") == 2) {
                v2_v2 += 1
            }
            if (+$(this).attr("coords") == 3) {
                v2_v3 += 1
            }

            if (v2_v1 === 3 || v2_v2 === 3 || v2_v3 === 3) {
                v2 = true;
                alert("PLAYER 2 WINS");
                location.reload();
            }

        };

        count--;
        if (count == 0 && v1 === false && v2 === false) {
            document.getElementById("v").innerHTML = "MATCH NULL";
            location.reload();
        }
    });



    const player1 = '<i class="fas fa-expand-arrows-alt"></i>';
    const player2 = '<i class="fas fa-circle-notch"></i>';
    let count = 9;
    let v1 = false;
    let v2 = false;
    let v1_h1 = 0;
    let v1_h2 = 0;
    let v1_h3 = 0;
    let v2_h1 = 0;
    let v2_h2 = 0;
    let v2_h3 = 0;
    var v1_v1 = 0;
    var v1_v2 = 0;
    var v1_v3 = 0;
    var v2_v1 = 0;
    var v2_v2 = 0;
    var v2_v3 = 0;
    var v1_d = 0;
    var v2_d = 0;
});