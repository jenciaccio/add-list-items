//variables
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const description= document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
const clearAllButton= document.querySelector('button.clearAllButton');

//hides and shows list
toggleList.addEventListener('click', ()=>
{if(listDiv.style.display=='none') {
	listDiv.style.display = 'block';
	toggleList.textContent = 'Hide List';
}	else {listDiv.style.display = 'none';
toggleList.textContent = 'Show List'}							
});

//changes name of list
description.addEventListener('click', ()=>{
descriptionP.textContent = descriptionInput.value +':'
descriptionInput.value = '';//clears input field after list name is changed
})

//adds item to the list
addItemButton.addEventListener('click', ()=>
															
 {
	let ul = document.getElementsByTagName('ul')[0];
	let li = document.createElement('li');
	li.textContent = addItemInput.value; //takes the item added by user
	ul.appendChild(li); //adds item to list
	addItemInput.value = ''; //clears input field after item is added
 })
//removes last item in the list												 
removeItemButton.addEventListener('click', ()=>
															
 {
	let ul = document.getElementsByTagName('ul')[0];
	let li = document.querySelector('li:last-child');
	ul.removeChild(li); 
	})
			
	//clears whole list
clearAllButton.addEventListener('click', ()=>{
let li = document.getElementsByTagName('li');
for(let i=0; i< li.length;  i++) {
li[i].textContent = ''};
})