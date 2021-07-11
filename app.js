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
const lis = listUl.children;

//function buttons to LI elements 
function attachListItemButtons(li) {
    let upBtn = document.createElement('button');
    let rmvBtn = document.createElement('button');
    let downBtn = document.createElement('button');
    upBtn.className = 'up';
    upBtn.textContent = 'Up';
    li.appendChild(upBtn)
    rmvBtn.className = 'remove';
    rmvBtn.textContent = 'Remove';
    li.appendChild(rmvBtn)
    downBtn.className = 'down';
    downBtn.textContent = 'Down';
    li.appendChild(downBtn);
}

//adds buttons to all li on page
for (let i = 0; i < lis.length; i++) {
    attachListItemButtons(lis[i]);
}

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


    li.textContent = addItemInput.value; //takes the item added by user
    attachListItemButtons(li)
    ul.appendChild(li); //adds item to list
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