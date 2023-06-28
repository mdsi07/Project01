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
var secondItem = document.querySelectorAll('li');
secondItem[1].style.color = 'green';

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i = 0; i < odd.length; i++)
{
    odd[i].style.backgroundColor = 'green';
}