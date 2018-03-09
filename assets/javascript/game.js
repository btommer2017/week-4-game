
$(document).ready(function () {

    var gem1;
    var gem2;
    var gem3;
    var gem4;
    var totalScore = 0;
    var totalScoreTarget;
    var win = 0;
    var loss = 0;
    isTotalEqualTarget = false;
    isTotalGreaterThanTarget = false;
    initializeGame();

    // Use a function to reset the game and assign new crystal values and target value.
    function initializeGame() {

        totalScore = 0;
        gem1 = Math.floor((Math.random() * 12) + 1);
        gem2 = Math.floor((Math.random() * 12) + 1);
        gem3 = Math.floor((Math.random() * 12) + 1);
        gem4 = Math.floor((Math.random() * 12) + 1);
        totalScoreTarget = Math.floor((Math.random() * 101) + 19);
        $("#totalScoreTarget").text(totalScoreTarget);
        $("#currentTotalScore").text(totalScore);
        $("#wins").text("Wins: " + win);
        $("#losses").text("Loses: " + loss);

        //set the value for the containers holding the gem images
        $("#gem1").val(gem1);
        $("#gem2").val(gem2);
        $("#gem3").val(gem3);
        $("#gem4").val(gem4);
        isTotalEqualTarget = false;
        isTotalGreaterThanTarget = false;
    }
    //#########################################################################################################

    // Add an on click listener to all elements that have the class "crystal"
    $(".crystal").on("click", function () {

        var thisValue = $(this).val();
        // totalScore =  $(this).val() + totalScore;
        totalScore = totalScore + parseInt(thisValue);
        $("#currentTotalScore").text(totalScore);
        if (totalScore === totalScoreTarget) {
            isTotalEqualTarget = true;
            $("#currentTotalScore").text(totalScore);

            alert("You Win!");
            setTimeout(function () {
                win = win + 1;
            }, 1500);
            setTimeout(function () {
                initializeGame();
            }, 1500);
        }

        if (totalScore > totalScoreTarget) {
            isTotalGreaterThanTarget = true;
            $("#currentTotalScore").text(totalScore);

            alert("You Lose, Try Again!");
            setTimeout(function () {
                loss = loss + 1;
            }, 1500);
            setTimeout(function () {
                initializeGame();
            }, 1500);
        }

    });
    //#########################################################################################################
});
