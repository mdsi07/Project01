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

// var itemList = document.querySelector('#items');

// // (01) parentElement
// itemList.parentElement.style.backgroundColor = '#f1fff1';

// // (02) lastElementChild
// itemList.lastElementChild.textContent = 'List Element 4';

// // (03) lastChild
// console.log(itemList.lastChild);
// itemList.lastChild.textContent = 'End of the List Elements';

// // (04) createChild  <--
// console.log(itemList.child);

// // (05) firstElementChild
// itemList.firstElementChild.textContent = 'List Element 1';

// // (06) firstChild
// console.log(itemList.firstChild);
// itemList.firstChild.textContent = 'Belew are the List Elements';

// // (07) nextSibling <--
// console.log(itemList.nextSibling);

// // (08) nextelementsibling <--
// console.log(itemList.nextElementSibling);

// // (09) previousSibling <--
// console.log(itemList.previousSibling);

// // (10) previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.textContent = 'List Elements';

// // (11) createElement

// // create a div
// var  newDiv = document.createElement('div');

// // add a class
// newDiv.className = 'newDivClassName';

// // add a id
// newDiv.id = 'newDivId';

// // (12) add attribute
// newDiv.setAttribute('title', 'newDivTitle');

// // (13) create text node
// var newDivText = document.createTextNode('Welcome to');

// // (14) appendChild
// newDiv.appendChild(newDivText);

// // Now, Implement the Deleverables to the DOM
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// container.insertBefore(newDiv, h1);


// // I'm implement some changes for Page looking good
// itemList.children[1].textContent = 'List Element 2';
// itemList.children[2].textContent = 'List Element 3';



// TASK 08 Deliverables

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);

  // Create edit button element
  var editButton = document.createElement('button');
  editButton.className = "btn btn-primary btn-sm float-right edit";
  editButton.innerHTML = "Edit";
  li.appendChild(editButton);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
