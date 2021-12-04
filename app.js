
// DOM Navigation

// ParentNode and Parent Element
// const list = document.querySelector('#items');
// console.log(list.parentNode)
// console.log(list.parentNode.parentNode)
// console.log(list.parentElement)
// console.log(list.parentElement.parentElement)

// // Child Nodes & Children
// const list = document.querySelector('#items');
// console.log(list.childNodes)
// console.log(list.children)

// // First child & Last Child
// const list = document.querySelector('#items');
// console.log(list.firstChild)
// console.log(list.lastChild)
// console.log(list.firstElementChild)
// console.log(list.lastElementChild)

// // Next sibling & Previous sibling
// const form = document.querySelector('#addForm');
// console.log(form.nextSibling)
// console.log(form.previousSibling)
// console.log(form.nextElementSibling)
// console.log(form.previousElementSibling)



// Create a Elemnet Node

const item5 = document.createElement('li');
item5.className = 'list-group-item';
item5.id = 'list-group-item';

const button = document.createElement('button');
button.className = 'btn btn-danger btn-sm float-right delete';


// Create a Text Node & Append to Element Node 
const item5Text = document.createTextNode('Item 5');
item5.appendChild(item5Text);

const buttonText = document.createTextNode('X');
button.appendChild(buttonText);

item5.appendChild(button);

// Attach to DOM
const parent = document.querySelector('.list-group');
parent.appendChild(item5);


// Remove a node from DOM
const list = document.querySelector('.list-group');
const item1 = list.firstElementChild;
list.removeChild(item1);
