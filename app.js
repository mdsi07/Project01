// console.log("Hello... World");

//TASK 03 Deliverables

//var header = document.getElementById('main-header');
//header.style.borderBottom = 'solid 3px #000';

/* practices for list item formatting
// var items = document.getElementsByClassName('list-group-item');
// items[0].style.fontWeight = 'bold';
// items[1].style.fontWeight = 'bold';
// items[2].style.fontWeight = 'bold';
// items[3].style.fontWeight = 'bold';

// items[0].style.color = 'green';
// items[1].style.color = 'green';
// items[2].style.color = 'green';
// items[3].style.color = 'green'; */


//var title = document.getElementsByClassName('title');
//title[0].style.fontWeight = 'bold';
//title[0].style.color = 'green';


// TASK 04 Deliverables

//var items = document.getElementsByClassName('list-group-item');

//items[2].style.backgroundColor = 'green';

//items[0].style.fontWeight = 'bold';
//items[1].style.fontWeight = 'bold';
//items[2].style.fontWeight = 'bold';
//items[3].style.fontWeight = 'bold';


// TASK 05 Deliverables

//var li = document.getElementsByTagName('li');

//For background Color
/*for(var i =0; i< li.length; i++)
{
    li[i].style.backgroundColor = '#f4f4f4';
} */


// TASK 06 Deliverables

//using QuerySelector()
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.color = 'white';

//using QuerySelectorAll()
// var secondItem = document.querySelectorAll('li');
// secondItem[1].style.color = 'green';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i = 0; i < odd.length; i++)
// {
//     odd[i].style.backgroundColor = 'green';
// }



//TASK 07 Deliverables

var itemList = document.querySelector('#items');

// (01) parentElement
itemList.parentElement.style.backgroundColor = '#f1fff1';

// (02) lastElementChild
itemList.lastElementChild.textContent = 'List Element 4';

// (03) lastChild
console.log(itemList.lastChild);
itemList.lastChild.textContent = 'End of the List Elements';

// (04) createChild  <--
console.log(itemList.child);

// (05) firstElementChild
itemList.firstElementChild.textContent = 'List Element 1';

// (06) firstChild
console.log(itemList.firstChild);
itemList.firstChild.textContent = 'Belew are the List Elements';

// (07) nextSibling <--
console.log(itemList.nextSibling);

// (08) nextelementsibling <--
console.log(itemList.nextElementSibling);

// (09) previousSibling <--
console.log(itemList.previousSibling);

// (10) previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.textContent = 'List Elements';

// (11) createElement

// create a div
var  newDiv = document.createElement('div');

// add a class
newDiv.className = 'newDivClassName';

// add a id
newDiv.id = 'newDivId';

// (12) add attribute
newDiv.setAttribute('title', 'newDivTitle');

// (13) create text node
var newDivText = document.createTextNode('Welcome to');

// (14) appendChild
newDiv.appendChild(newDivText);

// Now, Implement the Deleverables to the DOM
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);


// I'm implement some changes for Page looking good
itemList.children[1].textContent = 'List Element 2';
itemList.children[2].textContent = 'List Element 3';
