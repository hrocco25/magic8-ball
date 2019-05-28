$(document).ready(function(){
	//object
var magic8Ball = {};
  
  
  
//needs to be outside of method and under magic8BAll
magic8Ball.listOfAnswers = ["It is certain", "Without a doubt", "Outlook good", "maybe", "Ask again later", "Better not tell you now", "Don't count on it", "My reply is no", "My sources say no" ];
  
  $("#answer").hide();
 

  
	
//making a method
magic8Ball.askQuestion = function(question) {
  
   $("#answer").fadeIn(4000);
  
   $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
  
  $("#8ball").effect("shake");

  
  
  var randomNumber = Math.random();
  //console.log("var randomNumber = " + randomNumber);
 
  var randomNumberArray = randomNumber * this.listOfAnswers.length;
  //console.log("var randomNumberArray = " + randomNumberArray);
 
  var randomIndex = Math.floor(randomNumberArray);
  //console.log("var randomIndex = " + randomIndex);
 
  var answer = this.listOfAnswers[randomIndex];
	
	$("#answer").text( answer);
  
    
    console.log(question);
    console.log(answer);
    
    
};

var onClick = function() {
  

 
$("#answer").hide();
  
 

  
$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
  

  setTimeout(
       function() {
           //show prompt
           var question = prompt("Ask a yes or no question");
           magic8Ball.askQuestion(question);
       }, 500);
  

};
  


$("#questionButton").click( onClick );
  


  
  

});
