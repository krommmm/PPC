var mains = document.querySelectorAll('.PPC');
var pierre = document.querySelector('.pierre');
var papier = document.querySelector('.papier');
var ciseaux = document.querySelector('.siceaux');
var randomNumber = Math.floor(Math.random() * 3) + 1;
var resultatFinal = document.querySelector('.resultat');
var winOrLose = document.querySelector('.winOrLose');
var player = document.querySelector('.you .fa-regular');
var computer = document.querySelector('.ordi .fa-regular');

// click bouton => 3 2 1 > afficher resultat

const showHands = (ordi, you) => {
	let classes = computer.classList; // Déclaration en dehors du switch
	let playerClasses = player.classList;
  
	switch (ordi) {
	  case 'pierre':
		classes.forEach((classe) => {
		  if (classe !== 'ordi' && classe !== 'fa-regular') {
			computer.classList.remove(classe);
		  }
		});
		computer.classList.add('fa-hand-back-fist');
		break;
  
	  case 'papier':
		classes.forEach((classe) => {
		  if (classe !== 'ordi' && classe !== 'fa-regular') {
			computer.classList.remove(classe);
		  }
		});
		computer.classList.add('fa-hand');
		break;
  
	  case 'ciseaux':
		classes.forEach((classe) => {
		  if (classe !== 'ordi' && classe !== 'fa-regular') {
			computer.classList.remove(classe);
		  }
		});
		computer.classList.add('fa-hand-scissors');
		break;
	};

	switch (you) {
		case 'pierre':
			playerClasses.forEach((classe) => {
			if (classe !== 'you' && classe !== 'fa-regular') {
			  player.classList.remove(classe);
			}
		  });
		  player.classList.add('fa-hand-back-fist');
		  break;
	
		case 'papier':
			playerClasses.forEach((classe) => {
			if (classe !== 'you' && classe !== 'fa-regular') {
				player.classList.remove(classe);
			}
		  });
		  player.classList.add('fa-hand');
		  break;
	
		case 'ciseaux':
			playerClasses.forEach((classe) => {
			if (classe !== 'you' && classe !== 'fa-regular') {
				player.classList.remove(classe);
			}
		  });
		  player.classList.add('fa-hand-scissors');
		  break;
	  }
  };
  

const melting = (ordi, you) => {
	switch (you) {
		case 'pierre':
			if (ordi === 'papier') {
				winOrLose.textContent = 'Perdu :(';
			} else if (ordi === 'ciseaux') {
				winOrLose.textContent = 'Gagné :)';
			} else {
				winOrLose.textContent = 'Egalité';
			}
			break;

		case 'papier':
			if (ordi === 'ciseaux') {
				winOrLose.textContent = 'Perdu :(';
			} else if (ordi === 'pierre') {
				winOrLose.textContent = 'Gagné :)';
			} else {
				winOrLose.textContent = 'Egalité';
			}
			break;

		case 'ciseaux':
			if (ordi === 'pierre') {
				winOrLose.textContent = 'Perdu :(';
			} else if (ordi === 'papier') {
				winOrLose.textContent = 'Gagné :)';
			} else {
				winOrLose.textContent = 'Egalité';
			}
			break;
	}
};

const PPC = (nb) => {
	switch (nb) {
		case 1:
			return 'pierre';
			break;

		case 2:
			return 'papier';
			break;

		case 3:
			return 'ciseaux';
			break;

		default:
			console.log('erreur');
	}
};

Array.from(mains).map((element) => {
	element.addEventListener('click', function () {
		randomNumber = Math.floor(Math.random() * 3) + 1;
		var resultatOrdinateur = PPC(randomNumber);
		var yourChoice = element.classList[1];
		melting(resultatOrdinateur, yourChoice);
		//resultatFinal.textContent = `Moi : ${yourChoice}  -----  Ordinateur: ${resultatOrdinateur}`;
		showHands(resultatOrdinateur, yourChoice);
	});
});


