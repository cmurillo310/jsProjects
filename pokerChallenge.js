let playerScore = 0;
document.getElementById("playerScore").innerHTML = playerScore;
  
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  var hearts = ["1♥️", "2♥️", "3♥️", "4♥️", "5♥️", "6♥️", "7♥️", "8♥️", "9♥️", "J♥️", "Q♥️", "K♥️", "A♥️"];
  var spades = ["1♠️", "2♠️", "3♠️", "4♠️", "5♠️", "6♠️", "7♠️", "8♠️", "9♠️", "J♠️", "Q♠️", "K♠️", "A♠️"];
  var diamonds = ["1♦", "2♦", "3♦", "4♦", "5♦", "6♦", "7♦", "8♦", "9♦", "J♦", "Q♦", "K♦", "A♦"];
  var clubs = ["1♣️", "2♣️", "3♣️", "4♣️", "5♣️", "6♣️", "7♣️", "8♣️", "9♣️", "J♣️", "Q♣️", "K♣️", "A♣️"];
  var deck = hearts.concat(spades, diamonds, clubs);

  var cardOne = document.getElementById("cardOne");
  var cardTwo = document.getElementById("cardTwo");
  var cardThree = document.getElementById("cardThree");
  var cardFour = document.getElementById("cardFour");
  var cardFive = document.getElementById("cardFive");

  // Used like so
  function dealCards() {
    shuffle(deck);
    console.log(deck);
    cardOne.innerHTML = deck[0];
    cardTwo.innerHTML = deck[1];
    cardThree.innerHTML = deck[2];
    cardFour.innerHTML = deck[3];
    cardFive.innerHTML = deck[4];
    document.getElementById("gameText").innerHTML = "Select any cards you want to keep. Unselected cards will be discarded for new cards. Press Go to continue.";
    document.getElementById("begin").className = "hidden";
    document.getElementById("go").className = "display";
  }

  document.getElementById("begin").addEventListener("click", test);

  function test() {
    $(".card").each(function() {
      $(this).addClass("cards");
  });
  $(".card").on('click', (function() {
    $(this).toggleClass("cardsSelected");
  }));
  }

  function go() {
    var hand = [];
    hand.push(cardOne.innerHTML, cardTwo.innerHTML, cardThree.innerHTML, cardFour.innerHTML, cardFive.innerHTML);
    console.log(hand);
    var pair = false;
    for (var i = 0; i <= 4; i++) {
      if (hand[i] === hand[i]) {
        pair = true;
        alert("You got a pair!");
        document.getElementById("playerScore").innerHTML = ++playerScore;
        break;
      }
      if (pair === false) {
        alert("No pair");
      }
    }
  }
function dealCards1() {
    var playerNum = document.getElementById("numField").value;
    var comNum = Math.floor(Math.random() * 11);
    if (playerNum > 10 || playerNum < 1) {
        alert('Please enter a number between 1-10.');
    }
    else if (playerNum > comNum) {
        alert("Your number is: " + playerNum + " | " + "Computer Number is: " + comNum);
        alert("You win!");
        document.getElementById("playerScore").innerHTML = ++playerScore;
    }
    else if (playerScore <= comNum) {
        alert("Your number is: " + playerNum + " | " + "Computer Number is: " + comNum);
        alert("Try again!");
    }
}