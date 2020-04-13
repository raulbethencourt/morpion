//Ready function to securing good charging
$(document).ready(function () {

    //Click event to make the game works
    $('.case').click(function () {

        //Set beginning to player 1
        if (count % 2) {

            //After first click indicate player 2 tour 
            $("#player2").css("text-decoration", "underline");
            $("#player1").css("text-decoration", "none");

            //Set players 1 symbols in game
            $(this).append(player1);
            $(this).css({
                "background-color": "red",
                "border-color": "red"
            });

            //Set horizontal choices
            if (+$(this).attr("id") == 1) {
                v1_h1 += 1
            }
            if (+$(this).attr("id") == 2) {
                v1_h2 += 1
            }
            if (+$(this).attr("id") == 3) {
                v1_h3 += 1
            }

            //Set vertical choices
            if (+$(this).attr("coords") == 1) {
                v1_v1 += 1
            }
            if (+$(this).attr("coords") == 2) {
                v1_v2 += 1
            }
            if (+$(this).attr("coords") == 3) {
                v1_v3 += 1
            }

            //Set diagonal choices
            if (+$(this).attr("coords") == 2 && +$(this).attr("id") == 2) {
                v1_d_c = 1;
            }
            if (+$(this).attr("coords") == 1 && +$(this).attr("id") == 1) {
                v1_d_r += 1;
            }
            if (+$(this).attr("coords") == 3 && +$(this).attr("id") == 3) {
                v1_d_r += 1;
            }
            if (+$(this).attr("coords") == 3 && +$(this).attr("id") == 1) {
                v1_d_l += 1;
            }
            if (+$(this).attr("coords") == 1 && +$(this).attr("id") == 3) {
                v1_d_l += 1;
            }

            //Set players 1 victory
            if ((v1_d_c === 1 && v1_d_r === 2) ||
                (v1_d_c === 1 && v1_d_l === 2) ||
                (v1_v1 === 3 || v1_v2 === 3 || v1_v3 === 3) ||
                (v1_h1 === 3 || v1_h2 === 3 || v1_h3 === 3)) {
                v1 = true;
                $("#table").hide();
                $("#player1").hide();
                $("#player2").hide();
                $("#wrapper").html('<div class="victory"><h1>PLAYER 1 WINS</h1><button type="button" onclick="location.reload()" id="continue">CONTINUE</button></div>');
            }
        } else {

            //Same thing with player 2
            $("#player1").css("text-decoration", "underline");
            $("#player2").css("text-decoration", "none");

            $(this).append(player2);
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

            if (+$(this).attr("coords") == 1) {
                v2_v1 += 1
            }
            if (+$(this).attr("coords") == 2) {
                v2_v2 += 1
            }
            if (+$(this).attr("coords") == 3) {
                v2_v3 += 1
            }

            if (+$(this).attr("coords") == 2 && +$(this).attr("id") == 2) {
                v2_d_c = 1;
            }
            if (+$(this).attr("coords") == 1 && +$(this).attr("id") == 1) {
                v2_d_r += 1;
            }
            if (+$(this).attr("coords") == 3 && +$(this).attr("id") == 3) {
                v2_d_r += 1;
            }
            if (+$(this).attr("coords") == 3 && +$(this).attr("id") == 1) {
                v2_d_l += 1;
            }
            if (+$(this).attr("coords") == 1 && +$(this).attr("id") == 3) {
                v2_d_l += 1;
            }

            if ((v2_d_c === 1 && v2_d_r === 2) ||
                (v2_d_c === 1 && v2_d_l === 2) ||
                (v2_v1 === 3 || v2_v2 === 3 || v2_v3 === 3) ||
                (v2_h1 === 3 || v2_h2 === 3 || v2_h3 === 3)) {
                v2 = true;
                $("#table").hide();
                $("#player1").hide();
                $("#player2").hide();
                $("#wrapper").html('<div class="victory"><h1>PLAYER 2 WINS</h1><button type="button" onclick="location.reload()" id="continue">CONTINUE</button></div>');
            };
        };

        //Count decreasing each click
        count--;

        //Match null settings
        if (count == 0 && v1 === false && v2 === false) {
            $("#table").hide();
            $("#player1").hide();
            $("#player2").hide();
            $("#wrapper").html('<div class="victory"><h1>MATCH NULL</h1><button type="button" onclick="location.reload()" id="continue">CONTINUE</button></div>');
        }
    });

    //Set starter player indication
    $("#player1").css("text-decoration", "underline");

    //All variables and constants
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
    let v1_v1 = 0;
    let v1_v2 = 0;
    let v1_v3 = 0;
    let v2_v1 = 0;
    let v2_v2 = 0;
    let v2_v3 = 0;
    let v1_d_c = 0;
    let v1_d_r = 0;
    let v1_d_l = 0;
    let v2_d_c = 0;
    let v2_d_r = 0;
    let v2_d_l = 0;
});