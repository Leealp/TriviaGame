var timer;

$("#start").on("click",function(){
	game.start();
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
}]


var game = {
	correct: 0,
	incorrect: 0,
	counter: 15,
	countdown: function(){
		game.counter--;
		$('#counter').html(game.counter);
		if(game.counter<=0){
			console.log("time is up");
			game.done();
		}
	},

	start: function(){
		var timer;
		timer = setInterval(game.countdown,1000);
		$("#startcontainer").prepend('<h2>Time Remaining: <span id="counter">15</span> Seconds</h2>');
		for(var i =0; i<questions.length; i++){
		$("#startcontainer").append('<h2>'+questions[i].question+'</h2>');
		for(var j=0; j<questions[i].answers.length;j++){

			$("#startcontainer").append("<input type='radio' name='question-"+i+"'value='"+questions[i].answers[j]+"'>"
				+questions[i].answers[j])
				$("#start").remove()
		}
	}
  },

  done: function(){
  	$.each($('input[name="question-0]":checked'),function(){
  		if(($this).val()==questions[0].correctanswer){
  			game.correct++;
  		} else{
  			game.incorrect++;
  		}
  	});

  	$.each($('input[name="question-1]":checked'),function(){
  		if(($this).val()==questions[1].correctanswer){
  			game.correct++;
  		} else{
  			game.incorrect++;
  		}
  	});

  	$.each($('input[name="question-2]":checked'),function(){
  		if(($this).val()==questions[2].correctanswer){
  			game.correct++;
  		} else{
  			game.incorrect++;
  		}
  	});

  	$.each($('input[name="question-3]":checked'),function(){
  		if(($this).val()==questions[3].correctanswer){
  			game.correct++;
  		} else{
  			game.incorrect++;
  		}
  	});

  	$.each($('input[name="question-4]":checked'),function(){
  		if(($this).val()==questions[4].correctanswer){
  			game.correct++;
  		} else{
  			game.incorrect++;
  		}
  	});

  	this.result();

  },

  	result: function(){ 
  		clearInterval(timer);
  		$('#startcontainer h2').remove();
  		$('#startcontainer').html("<h2>Game Over!</h2>");
  		$('#startcontainer').append("<h3>Correct Answers: "+this.correct+"</h3>");
  		$('#startcontainer').append("<h3>inorrect Answers: "+this.incorrect+"</h3>");


  	}

}


















