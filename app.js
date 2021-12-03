const titles = document.querySelectorAll('title');

const odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
const even = document.querySelectorAll('.list-group-item:nth-child(even)');

for (let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = '#ccc'
    even[i].style.backgroundColor = 'royalblue'
}
