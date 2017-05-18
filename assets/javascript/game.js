//psuedo code

//function the random no. onload.
//set value in each one of the crystal.
// ..hide value amount.
// ..when click , update the score counter.
//condition..
// .. player wins if total score matches the random no.
// .. player loses if their > randomNo.
//game RESTARTs if player wins || loses.
// .. when game restart , start new random no.
// .. crystals have new random value.
// .. user score and score counter reset to 0.
//wins & loses counter stay update to the end.


// #randomNo;
// #totalScore;
// #winCounter;
// #loseCounter;
// #blue;
// #green;
// #red;
// #yellow;



// rule Intro//
$("#ruleHead").click(function(){
$("#ruleContent").slideDown(3000);
});
$("#close").click(function(){
$("#ruleContent").slideUp(1500);
});


//generate random No. onload
window.onload = getNumber; //

function getNumber() {
    var minNumber = 20; // The minimum number you want
    var maxNumber = 90; // The maximum number you want
    var randomnumber = Math.floor(Math.random() * (maxNumber) + minNumber)+1; // Generates random number
    $('#randomNo').html(randomnumber); // Sets content of <div> to number
    return false; // Returns false just to tidy everything up
}

	$("#randomNo").prepend(getNumber);
