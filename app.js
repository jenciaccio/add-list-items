//variables
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const description = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
const clearAllButton = document.querySelector('button.clearAllButton');


//removes item where "remove" button is clicked
listUl.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
        if (event.target.className == 'remove') {
            let li = event.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li)
        }
    }
    //moves up li when "up" is clicked
    if (event.target.className == 'up') {
        let li = event.target.parentNode;
        let prevLi = li.previousElementSibling;
        let ul = li.parentNode;
        if (prevLi) {
            ul.insertBefore(li, prevLi);
        }
    }
    //moves down li when "down" is clicked
    if (event.target.className == 'down') {
        let li = event.target.parentNode;
        let nextLi = li.nextElementSibling;
        let ul = li.parentNode;
        if (nextLi) {
            ul.insertBefore(nextLi, li);
        }

    };
});
//makes letters capitalized and lowercase while hovering over and then removing pointer


//listDiv.addEventListener('mouseover', (event)=>{
//	if(event.target.tagName == 'LI')	{event.target.textContent =event.target.textContent.toUpperCase();
//																		}
//
//	});
//listDiv.addEventListener('mouseout', (event)=>{
//if(event.target.tagName == 'LI')	{event.target.textContent = event.target.textContent.toLowerCase();
//																	}
//													 });

//hides and shows list
toggleList.addEventListener('click', () => {
    if (listDiv.style.display == 'none') {
        listDiv.style.display = 'block';
        toggleList.textContent = 'Hide List';
    } else {
        listDiv.style.display = 'none';
        toggleList.textContent = 'Show List'
    }
});

//changes name of list
description.addEventListener('click', () => {
    descriptionP.textContent = descriptionInput.value + ':'
    descriptionInput.value = ''; //clears input field after list name is changed
});

//adds item to the list

addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    let upBtn = document.createElement('button');
    let rmvBtn = document.createElement('button');
    let downBtn = document.createElement('button');

    upBtn.setAttribute('class', 'up');
    upBtn.innerHTML = "Up";
    rmvBtn.setAttribute('class', 'remove');
    rmvBtn.innerHTML = "Remove";
    downBtn.setAttribute('class', 'down');
    downBtn.innerHTML = "Down";

    li.textContent = addItemInput.value; //takes the item added by user
    ul.appendChild(li); //adds item to list
    li.appendChild(upBtn); //adds up button to new item
    li.appendChild(downBtn); //adds down button to new item
    li.appendChild(rmvBtn); //adds remove button to new item

    addItemInput.value = ''; //clears input field after item is added
});


//removes last item in the list												 
removeItemButton.addEventListener('click', () =>

    {
        let ul = document.getElementsByTagName('ul')[0];
        let li = document.querySelector('li:last-child');
        ul.removeChild(li);
    })

//clears whole list
clearAllButton.addEventListener('click', () => {
    let li = document.getElementsByTagName('li');
    for (let i = 0; i < li.length; i++) {
        li[i].textContent = ''
    };
})