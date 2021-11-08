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
 * Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
 */
const favicons = document.getElementsByClassName('fas');
console.log('elenco favicons' , favicons);

//faccio ciclo su tutto l'array per intercettare i diversi valori di color
for (let icon in favicons){
  if (icon.color === 'orange'){
    favicons.classList.add('animal-icon');
  }
  if (icon.color === 'green'){
    favicons.classList.add('vegetable-icon');
  }
  if (icon.color === 'blue'){
    favicons.classList.add('user-icon');
  }
}

//suddivido l'array in 3 sott-array per categoria

//array animali
const animals = icons.filter((icon) =>{
  return icon.color === 'orange'
})
console.log('animali arancioni:', animals);
//animals[].classList.add('animal-icon');

//array ortaggi
const vegetables = icons.filter((icon) =>{
  return icon.color === 'green'
})
console.log('ortaggi verdi:', vegetables);

//array utenti
const users = icons.filter((icon) =>{
  return icon.color === 'blue'
})
console.log('utenti blu:', users);