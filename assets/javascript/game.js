//psuedo code

//function the random no. 
//set value in each one of the crystal.
// ..hide value amount.
// ..when click , update the score counter.
///////////////////score wise/////////////////////
//condition..
// .. player wins if total score matches the random no.
// .. player loses if their > randomNo.
//game RESTARTs if player wins || loses.
// .. when game restart , start new random no.
// .. crystals have new random value.
// .. user score and score counter reset to 0.
//wins & loses counter stay update to the end.

// rule Intro//
$("#ruleHead").click(function(){
$("#ruleContent").slideDown(3000);
});
$("#close").click(function(){
$("#ruleContent").slideUp(1500);
});

//generate random No.//

var yourScore = 0;
var scoreCounter;
var winCounter = 0;
var loseCounter = 0;
var yourScore;
var value;
var randomnumber;

function getNumber() {
    var minNumber = 20; 
    var maxNumber = 90; 
    randomnumber = Math.floor(Math.random() * (maxNumber) + minNumber)+1; 
    $('#randomNo').html(randomnumber); 
    console.log(randomnumber);
    return randomnumber;
}
	getNumber();

	//set value to the crystals//
	crystal("#blue");
	crystal("#green");
	crystal("#red");
	crystal("#yellow");
	function crystal(id){
		scoreCounter = $("#totalScore")
		var crystalMin = 1; 
	    var crystalMax = 11; 
	    blueRandom = Math.floor(Math.random() * (crystalMax) + crystalMin)+1; 
	    $(id).attr('value', blueRandom);
	    return blueRandom;
}  

function getValue() {
	$(".value").on("click", function () {
		value = $(this).attr("value");
		console.log(typeof parseInt(value));
		yourScore += parseInt(value);
		console.log(yourScore);
		$("#totalScore").html(yourScore);
		
		if (loseCounter === 10){
			confirm("YOU LOSE!!! Your losing score : " + loseCounter + " Your winning score : "  + winCounter + " Try harder!");
			location.reload();
		}

		if (winCounter === 10){
			confirm("YOU WIN!!! Your losing score : " + loseCounter + " Your winning score : "  + winCounter + " Good job!");
			location.reload();
		}
		if(yourScore > randomnumber){
			loseCounter++;
			$("#loseCounter").html(loseCounter);
			$("#gameResult").html("YOU LOSE!!!");
			$("#gameResult").show("YOU LOSE!!!");
			$("#gameResult").hide("YOU LOSE!!!");
			}

		if(yourScore === randomnumber){
			winCounter++;
			console.log(winCounter);
			$("#winCounter").html(winCounter);
			$("#gameResult").html("YOU WIN!!!");
			$("#gameResult").show("YOU WIN!!!");
			$("#gameResult").hide("YOU WIN!!!");
		} 

		// Reset Diamond //

		if(yourScore >= randomnumber){
			yourScore = 0;
			$(getNumber).reset;
			$(crystal("#blue")).reset;
			$(crystal("#red")).reset;
			$(crystal("#green")).reset;
			$(crystal("#yellow")).reset;
		}
	
	
});
}
getValue();





	
	






