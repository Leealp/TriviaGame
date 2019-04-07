			var timeleft = 90;		

					$("#start").on("click", function(){

						$("#timer").CSS("display", "block");

						var sett = setInterval(function(){

						timeleft = timeleft - 1;
						$("#timer").text(timeleft);

						},1000);


						///Generate questions for loop
						//results
						var questions = [{
	question:"what is the capital of Texas?",
	answers:["Dallas", "Austin", "San Antonio"],
	correctanswer: "Austin",
},{
	question:"what was John Kennedy know by?",
	answers:["John", "Johnny", "Jack"],
	correctanswer: "Jack",
},{
	question:"what is the capital of Texas?",
	answers:["Dallas", "Austin", "San Antonio"],
	correctanswer: "Austin",
},{
	question:"where was Obama born?",
	answers:["Kenya", "Hawai", "Chicago"],
	correctanswer: "Hawai",
},{
	question:"what is the capital of Texas?",
	answers:["Dallas", "Austin", "San Antonio"],
	correctanswer: "Austin",
},{
	question:"what is the capital of Texas?",
	answers:["Dallas", "Austin", "San Antonio"],
	correctanswer: "Austin",
},{
	question:"what is the capital of Texas?",
	answers:["Dallas", "Austin", "San Antonio"],
	correctanswer: "Austin",
},{
	question:"what is the capital of Texas?",
	answers:["Dallas", "Austin", "San Antonio"],
	correctanswer: "Austin",
},{
	question:"what is the capital of Texas?",
	answers:["Dallas", "Austin", "San Antonio"],
	correctanswer: "Austin",
},{
	question:"what is the capital of Texas?",
	answers:["Dallas", "Austin", "San Antonio"],
	correctanswer: "Austin",
}]
					})

