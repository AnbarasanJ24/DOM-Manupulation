const form = document.querySelector('#addForm');
const list = document.querySelector('#items');
const filter = document.querySelector('#filter');


form.addEventListener('submit', addExpense);
list.addEventListener('click', removeExpense);
filter.addEventListener('keyup', filterExpense);

function addExpense(e) {
    e.preventDefault();

    const expense = document.querySelector('#item');

    const item = document.createElement('li');
    item.className = 'list-group-item'
    item.appendChild(document.createTextNode(expense.value));


    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));


    item.appendChild(deleteBtn);
    list.appendChild(item);
    expense.value = '';
}

function removeExpense(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure ?')) {
            const li = e.target.parentElement;
            list.removeChild(li);
        }
    }
}

function filterExpense(e) {
    const filterValue = e.target.value.toLowerCase();
    const allExpense = list.getElementsByTagName('li');
    console.log(allExpense);
    Array.from(allExpense).forEach(expense => {
        const expenseText = expense.firstChild.textContent;
        if (expenseText.toLowerCase().indexOf(filterValue) !== -1) {
            expense.style.display = 'block';
        } else {
            expense.style.display = 'none';
        }
    })
}