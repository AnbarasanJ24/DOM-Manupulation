<!-- 

/**
 * Styling
 */

// const input = document.querySelector("#addForm input[type='text']");

// input.className = 'expense-field';
// input.id = 'expense-field';

// input.style.backgroundColor = 'red';
// input.style.fontSize = '20px';

// input.style.cssText = "background-color:red;font-size:30px;"

// console.log(input.classList)
// input.classList.add('light-green')
// input.classList.remove('light-green')


/**
 * Event Properties
 */

// const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(e.target)
//     console.log(e.target.className)
//     console.log(e.target.classList)
//     console.log(e.target.id)

//     // Mouse position in window 
//     console.log(e.clientX)
//     console.log(e.clientY)

//     // Mouse position in selected target 
//     console.log(e.offsetX)
//     console.log(e.offsetY)

//     // Alt, shift,ctrl
//     console.log(e.altKey)
//     console.log(e.ctrlKey)
//     console.log(e.shiftKey)

// }

// const submit = document.querySelector('input[type="submit"]');
// submit.addEventListener('click', handleSubmit);

/**
 * Event Methods
 */

// const runEvent = (e) => {
//     e.preventDefault();
//     console.log("Event Type", e.type)
// }


// const add = document.querySelector('#expense-button');
// add.addEventListener('click', runEvent);
// add.addEventListener('dblclick', runEvent);
// add.addEventListener('mousedown', runEvent); //When we click the mouse
// add.addEventListener('mouseup', runEvent); //Once realase the click

/**
 * Other Methods
 */
// const box = document.querySelector('#box');
// box.style.width = '400px';
// box.style.height = '200px';
// box.style.background = '#80808029';
// box.style.marginTop = '20px';

// const runEvent = (e) => {
//     e.preventDefault();
//     console.log("Event Type", e.type)
//     e.target.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",50)";
// }
// // Event trigger for selected element
// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// // Event trigger for selected element and its childs
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// // Event trigger when we move inside the target
// box.addEventListener('mousemove', runEvent);

/**
 * Keyboard Methods
 */
// const runEvent = (e) => {
//     e.preventDefault();
//     console.log("Event Type", e.type)
//     console.log("Value", e.target.value)
// }

// const input = document.querySelector('input[type="text"]');
// input.addEventListener('keydown', runEvent);
// input.addEventListener('keyup', runEvent);
// input.addEventListener('keypress', runEvent);

// input.addEventListener('focus', runEvent); //once click on the input
// input.addEventListener('blur', runEvent); //once click outside of the input after its clicked

// input.addEventListener('cut', runEvent);
// input.addEventListener('paste', runEvent);

// input.addEventListener('input', runEvent);// All activity in the input



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

// const item5 = document.createElement('li');
// item5.className = 'list-group-item';
// item5.id = 'list-group-item';

// const button = document.createElement('button');
// button.className = 'btn btn-danger btn-sm float-right delete';


// // Create a Text Node & Append to Element Node 
// const item5Text = document.createTextNode('Item 5');
// item5.appendChild(item5Text);

// const buttonText = document.createTextNode('X');
// button.appendChild(buttonText);

// item5.appendChild(button);

// // Attach to DOM
// const parent = document.querySelector('.list-group');
// parent.appendChild(item5);


// // Remove a node from DOM
// const list = document.querySelector('.list-group');
// const item1 = list.firstElementChild;
// list.removeChild(item1); -->
