var playerwins = 0

var compwins = 0

var x = 'y'

function intro(){


	var name = prompt('What\'s your name?');

	alert('Hello, ' + name + '!');

	alert('I\'d like to play quartz, parchment, sheers with you, ' + name + '.');

	alert('Let\'s begin.');

	alert('type \'s\' for sheers, \'q\' for quartz, and \'p\' for parchment!');

}

function MainLoop(){
	var playerwins = 0

	var compwins = 0

	while(compwins < 3 || playerwins < 3){

	var choice=prompt('Your turn!');

	var compchoice=Math.floor(Math.random()*3);

	if(choice == 'q' && compchoice == 0){

		alert('Tie...');

  }else if(choice == 'q' && compchoice == 1){

			alert('Computer won...');

			compwins = compwins + 1

    }else if (choice == 'q' && compchoice == 2){

			alert('You won!');

			playerwins = playerwins + 1

			}else if ( choice == 'p' && compchoice == 0){

			alert('You won!');

			playerwins = playerwins + 1

			}else if (choice == 'p' && compchoice == 1){

			alert('Tie...');

			}else if (choice == 'p' && compchoice == 2){

			alert('Computer picked sheers');

			compwins = compwins + 1

			}else if (choice == 's' && compchoice == 0){

			alert('Sorry, Computer won that round...')

			compwins = compwins + 1

			}else if (choice == 's' && compchoice == 1){

			alert('You won that round!');

			playerwins = playerwins + 1

			}else if (choice == 's' && compchoice == 2){

			alert('Tie...')

			}

	alert(playerwins + '-' + compwins);

	if(playerwins == 3 || compwins == 3){

		break;

		}

	}

}

function DisplayWin(){

if(compwins == 3){

	alert('Sorry, Three wins Computer won the game!');

}else if(playerwins == 3){

	alert('You won! Congrats!');

}

}

function playagain(){

	var x = prompt('Play again? (y) or (n)')

}

while(2<3){

	intro();


	MainLoop();

	DisplayWin();

	playagain();

}
