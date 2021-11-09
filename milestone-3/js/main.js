const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

/**
 * - inizializzare i dati
 * - ciclare l'array
 * - per ogni ciclo generare un template html con dati dinamici
 * - stampare i dati
 * dove li stampo?? dopo il container
 * creo una funzione per stampare i dati
 * quando carico la pagina, la funzione le stampa tutte!!! 
 * ma: stampa un paramentro che è un array che contiene le icone da stampare (solo al caricamento saranno tutte le icone))
 * 
 * 
 * 
 * ** Milestone 3 **
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone *(animal, vegetable, user)*. Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
 */


//con arrow function faccio funzione chooseType
const chooseType = (event) => {
	console.log('dentro funzione chooseType');
	/**
	 * prendo value della select
	 * filtro l'array in base al value
	 * chiamo funzione per stampare le card selezionate
	 */

	const chosenType = event.target.value;
	console.log('valore selezionato:', chosenType);

	//inizializzo array vuoto dove andrò a mettere le card slezionate col select
	let chosenIcons = [];

	//devo anche stabilire che se seleziono "all" allora avrò stampate tutte le card, indipendentemente dal tipo
	if(chosenType === 'all'){
		chosenIcons = icons;
	} else {
		//adesso posso filtrare l'array
		chosenIcons = icons.filter((icon) => {
			return chosenType === icon.type;
		});
	}

	createCards(chosenIcons);
}

//prendo container
const container = document.querySelector('.container');

//funzione evento change
document.querySelector('.form-select').addEventListener('change', chooseType);

createCards();

function createCards(){
	console.log('dentro funzione crea cards');
  //resetto l'ambiete dove devo stampare l'elenco la prima volta
  document.querySelector('.container').innerHTML = '';

  // cilo for of su array per ottenere i cari elementi
  for(let icon of icons){
    createHtml(icon);
		console.log('icona:', icon);		
  }
}

//funzione per creare struttura html di ogni card
function createHtml(item){
  console.log('dentro funzione crea html');

  const container = document.querySelector('.container');
  //console.log('container', container);
  let prevContent = container.innerHTML;

  //destrutturo oggetto icon per accedere alle sue proprietà
  const {name, prefix, family, color} = item;

  //definisco struttura html
  prevContent +=
  `
		<div class="box text-center">
      <i class="${family} ${prefix}${name} fs-1" style="color:${color}""></i>
      <h5 class="text-uppercase fs-5">${name}</h5>
    </div>  
 
  `;

  container.innerHTML = prevContent;
  
}