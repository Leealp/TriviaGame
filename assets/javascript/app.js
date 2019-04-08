var timer;

$("#start").on("click",function(){
	gameplay.start();
})

var questions = [{
	question:"what is the capital of Texas?",
	response:["Dallas", "Austin", "San Antonio"],
	correctanswer: "Austin",
},{
	question:"what was John Kennedy know by?",
	response:["John", "Johnny", "Jack"],
	correctanswer: "Jack",
},{
	question:"what is the independence day of Mexico?",
	response:["October 9th", "May 5th", "September 16th"],
	correctanswer: "September 16th",
},{
	question:"where was Obama born?",
	response:["Kenya", "Hawai", "Chicago"],
	correctanswer: "Hawai",
},{
	question:"In what year there was no World Series due to a players strike.?",
	response:["1994", "1904", "1983"],
	correctanswer: "1994",
}]


var gameplay = {
	correct: 0,
	incorrect: 0,
	counter: 15,
	clock: function(){
		gameplay.counter--;
		$('#counter').html(gameplay.counter);
		if(gameplay.counter<=0){
			gameplay.done();
		}
	},

	start: function(){
		var timer;
		timer = setInterval(gameplay.clock,1000);
		$("#startcontainer").prepend('<h2>Time Remaining: <span id="counter">15</span> Seconds</h2>');
		for(var i =0; i<questions.length; i++){
		$("#startcontainer").append('<h2>'+questions[i].question+'</h2>');
		for(var j=0; j<questions[i].response.length;j++){

			$("#startcontainer").append("<input type='radio' name='question-"+i+"'value='"+questions[i].response[j]+"'>"
				+questions[i].response[j])
				$("#start").remove()
		}
	}
  },

  done: function(){
  	$.each($("input[name='question-0']:checked"),function(){
  		if($(this).val()==questions[0].correctanswer){
  			gameplay.correct++;
  		} else{
  			gameplay.incorrect++;
  		}
  	});

  	$.each($("input[name='question-1']:checked"),function(){
  		if($(this).val()==questions[1].correctanswer){
  			gameplay.correct++;
  		} else{
  			gameplay.incorrect++;
  		}
  	});

  	$.each($("input[name='question-2']:checked"),function(){
  		if($(this).val()==questions[2].correctanswer){
  			gameplay.correct++;
  		} else{
  			gameplay.incorrect++;
  		}
  	});

  	$.each($("input[name='question-3']:checked"),function(){
  		if($(this).val()==questions[3].correctanswer){
  			gameplay.correct++;
  		} else{
  			gameplay.incorrect++;
  		}
  	});

  	$.each($("input[name='question-4']:checked"),function(){
  		if($(this).val()==questions[4].correctanswer){
  			gameplay.correct++;
  		} else{
  			gameplay.incorrect++;
  		}
  	});

  	this.result();

  },

  	result: function(){ 
  		clearInterval(timer);
  		$('#startcontainer h2').remove();
  		$('#startcontainer').html("<h2>Game Over!</h2>");
  		$('#startcontainer').append("<h3>Correct Answers: "+this.correct+"</h3>");
  		$('#startcontainer').append("<h3>Inorrect Answers: "+this.incorrect+"</h3>");
  		$('#startcontainer').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");


  	}

}


















