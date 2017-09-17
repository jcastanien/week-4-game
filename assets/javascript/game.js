$(document).ready(function() {

    var wins = 0;
    var losses = 0;
    var playerCounter = 0;
    var crystals = [0, 1, 2, 3];
    var crystalstwo = {};
    var randomNumber = 0;

    //randomly generated number every time the game starts ( the number is between 19 and 120)
    function randomness() {
        randomNumber = Math.floor((Math.random() * 120) + 1);
        $("#random-number").html(randomNumber);
    }

    randomness();

    //Four crystals a, b, c, d.  each one represents a number as well which is a random number between 1 and 12.  This number is hidden from you and each time you click on a crystal it adds points to your total score.

    function randomCrystal() {

        for (var i = 0; i < crystals.length; i += 1) {
            crystalstwo[crystals[i]] = Math.floor((Math.random() * 12) + 1);

            //for each crystal 
            //get crystal element
            //generate random .. this needs to be in the for loop
            //set to data of element


            //$("#crystal-one").attr("value", crystalstwo[0]);
            //$("#crystal-two").attr("value", crystalstwo[1]);
            //$("#crystal-three").attr("value", crystalstwo[2]);
            //$("#crystal-four").attr("value", crystalstwo[3]);

        };
        console.log(crystalstwo);

    };

    randomCrystal();

    $("#crystal-one").on("click", function() {
        playerCounter = playerCounter + crystalstwo[0];
        $("#your-score").html(playerCounter);
        winLoss();

    });

    $("#crystal-two").on("click", function() {
        playerCounter = playerCounter + crystalstwo[1];
        $("#your-score").html(playerCounter);
        winLoss();
    });

    $("#crystal-three").on("click", function() {
        playerCounter = playerCounter + crystalstwo[2];
        $("#your-score").html(playerCounter);
        winLoss();
    });

    $("#crystal-four").on("click", function() {
        playerCounter = playerCounter + crystalstwo[3];
        $("#your-score").html(playerCounter);
        winLoss();
    });

    //When your score matches the random number generated in the beginning you get a win. if the score goes over the generated number you lose. must have a Wins total and a losses total. 
    function winLoss() {
        console.log($("#your-score").html());
        if ($("#your-score").html() === randomNumber) {
            wins++;
            $("#wins").html("wins:" + wins);
            reset();
        } else if ($("#your-score").html() > randomNumber) {

            losses++
            $("#losses").html("Losses:" + losses);
            reset();
        }
    }


    //if (playerCounter > randomNumber) {
    //	losses++;
    //	$("#losses").html("Losses:" + losses);
    //	 $("#your-score").empty();
    //	reset();
    //} else if (playerCounter === randomNumber){
    //	wins++;
    //	$("#wins").html("wins:" + wins);
    //	 $("#your-score").empty();
    //	reset();
    //}

    //if (playerCounter > randomNumber) {
    //	losses++;
    //	$("#losses").html("Losses:" + losses);
    //	console.log(losses + "losses");
    //reset();
    //} 
    //};
    //console.log(playerCounter);
    //console.log(randomNumber);

    //else if (playerCounter === randomNumber) {
    //	wins++;
    //	$("#wins").html("Wins:" + wins);
    //	console.log(wins + "wins");
    //reset();

    //}

    function reset() {
        randomCrystal();
        randomness();
        playerCounter =0;
        $("#your-score").html("0");




    }
});

//Now the random number generates a new number and your score is reset to zero. All of the crystals will also have a different random number.