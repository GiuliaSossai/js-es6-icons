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
 * ** Milestone 3 **
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone *(animal, vegetable, user)*. Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
 */



//funzion evento change
document.querySelector('.form-select').addEventListener('change', chooseType());

//funzione per definire il tipo di icone da visualizzare
function chooseType() {
  const iconType = parseInt(document.querySelector('.form-select').value);
	console.log('tipo:', iconType);

	//suddivido l'array in 3 sotto-array per tipo

	//array animali
	const animals = icons.filter((icon) =>{
		return icon.type === 'animal'
	})
	console.log('animali:', animals);

	//array ortaggi
	const vegetables = icons.filter((icon) =>{
		return icon.type === 'vegetable'
	})
	console.log('ortaggi:', vegetables);

	//array utenti
	const users = icons.filter((icon) =>{
	return icon.type === 'user'
	})
	console.log('utenti:', users);

	//voglio visualizzare solo quelle card che hanno iconType===
	
}


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
  const {name, prefix, type, family, color} = item;

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
  <div class="box col-2 flex-column py-3 text-center ${type}">
    <div class="item-image">
      <i class="${family} ${prefix}${name} fs-1 ${color}"></i>
    </div>
    <div class="item-text text-uppercase">
       <h5>${name}</h5>
    </div>  
  </div>
  `;

  container.innerHTML = prevContent;
  
}