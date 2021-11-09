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
 * ** Milestone 3 **
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone *(animal, vegetable, user)*. Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
 */



//funzion evento change
// const form = document.querySelector('select');

// form.addEventListener('change', chooseType());

// //funzione per definire il tipo di icone da visualizzare
// function chooseType() {
//   // const numeroScelta = parseInt(document.querySelector('.form-select').value);
// 	// console.log('scelta numero:', numeroScelta);

// 	//const testoScelta = document.querySelector('.form-select').textContent;

// 	const testoScelta = form.options[form.selectedIndex].text;
// 	console.log('testo:', testoScelta);

// 	//suddivido l'array in 3 sotto-array per tipo
// 	//array animali
// 	const animals = icons.filter((icon) =>{
// 		return icon.type === 'animal'
// 	})
// 	console.log('animali:', animals);

	//array ortaggi
// 	const vegetables = icons.filter((icon) =>{
// 		return icon.type === 'vegetable'
// 	})
// 	console.log('ortaggi:', vegetables);

// 	//array utenti
// 	const users = icons.filter((icon) =>{
// 	return icon.type === 'user'
// 	})
// 	console.log('utenti:', users);

// 	//per ogni numero scelta devo associare solo un icon.type: quindi uno andrà con all, 2 con animal, 3 con vegetable, 4 con user
// 	if(testoScelta === 'animal'){
// 		createCards();
// 		return animals
// 	}
	
// }



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
  console.log('container', container);
  let prevContent = container.innerHTML;

  //destrutturo oggetto icon per accedere alle sue proprietà
  const {name, prefix, family, color} = item;

	// const element = document.querySelector('.fas');
		
	// if (item.color === 'orange'){
	// 	console.log('animale')
	// 	element.classList.add('animal-icon');
	// }else if (item.color === 'green'){
	// 	console.log('frutta')
	// 	element.classList.add('vegetable-icon');
	// } else {
	// 	console.log('user')
	// 	element.classList.add('user-icon');
	// }

  //definisco struttura html
  prevContent +=
  `
		<div class="box p-3 text-center">
      <i class="${family} ${prefix}${name} fs-1" style="color:${color}""></i>
      <h5 class="text-uppercase fs-5">${name}</h5>
    </div>  
  </div>
  `;

  container.innerHTML = prevContent;
  
}