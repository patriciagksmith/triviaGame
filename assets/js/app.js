var panel = $("#quiz-area");

// Question set
var questions = [{
  question: "Normal adult dogs have how many teeth?",
  answers: ["24", "38", "42", "32"],
  correctAnswer: "42"
}, {
  question: "What is a dog's most highly developed sense?",
  answers: ["Taste", "Smell", "Sight", "Touch"],
  correctAnswer: "Smell"
}, {
  question: "Puppies are delivered how many weeks after conception?",
  answers: ["36", "22", "9", "16"],
  correctAnswer: "9"
}, {
  question: "Which dog breed is the smallest?",
  answers: ["Dachshund", "Shih tzu", "Pomeranian", "Chihuahua"],
  correctAnswer: "Chihuahua"
}, {
  question: "Which dog breed has a black tongue?",
  answers: ["Husky", "Labrador", "Weimaraner", "Chow Chow"],
  correctAnswer: "Chow Chow"
}, {
  question: "What is the most popular breed of dog, according to the American Kennel Club\'\s registrations?",
  answers: ["Golden Retriever", "Beagle", "German Shepherd", "Labrador"],
  correctAnswer: "Labrador"
}, {
  question: "What is the name of the dog on the front of the Cracker Jack box?",
  answers: ["Jack", "Max", "Bingo", "Fido"],
  correctAnswer: "Bingo"
}, {
  question: "Which dog yodels instead of barks?",
  answers: ["Komondor", "Otterhound", "Basenji", "Basset hound"],
  correctAnswer: "Basenji"
}];

// Variable that will hold the setInterval
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--; //Declared in the beginning
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();//Defined at the end of the object as a function
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000); //Calls the countdown function every second

    $("#sub-wrapper").prepend("<h3>Time Remaining: <span id='counter-number'>120</span> Seconds</h3>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h2>Correct Answers: " + this.correct + "</h2>");
    panel.append("<h2>Incorrect Answers: " + this.incorrect + "</h2>");
    panel.append("<h2>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h2>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});