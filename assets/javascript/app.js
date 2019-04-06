$("#start").on("click",function(){
	for(var i =0; i<questions.length; i++){
		$("startcontainer").append('<h2>'+questions[i].question+'</h2>');
		for(var j=0; j<questions[i].answers.length;j++){

			$("startcontainer").append("<input type='radio' name='question-"+i+"'value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])

		}
	}


})

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