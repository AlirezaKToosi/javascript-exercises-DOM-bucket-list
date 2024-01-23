const newElement=document.createElement('p');
newElement.innerText="Travel to Japan";
document.querySelector('.list').appendChild(newElement);

const anotherElement = document.createElement('p');
anotherElement.innerText = 'Learn to play the guitar';
document.querySelector('.list').insertAdjacentElement('afterend', anotherElement);

const listContainer =document.querySelector('.list');
console.log(listContainer.innerHTML);

const newItemHTML = '<p>Write a book</p>';
listContainer.innerHTML = newItemHTML;

listContainer.insertAdjacentHTML('beforeend', '<p>Go skydiving</p>');
listContainer.insertAdjacentHTML('beforeend', '<p>Learn a new language</p>');
listContainer.insertAdjacentHTML('beforeend', '<p>Run a marathon</p>');

const additionalItems = ['Visit Paris', 'Start a business', 'Learn photography'];
for(let item of additionalItems){
    const newItem=document.createElement('p');
    newItem.innerText=item;
    listContainer.appendChild(newItem);
}

console.log(`There are ${listContainer.children.length} items in List.`)

document.querySelector('.owner').innerText='Alireza';

const firstElement=listContainer.querySelector('p');
const newItem=document.createElement('p');
newItem.innerText='Learn JS';
listContainer.replaceChild(newItem,firstElement);

let middleChildIndex=Math.floor(listContainer.children.length/2);
const middleItem = listContainer.children[middleChildIndex];
const newMiddleItem = document.createElement('p');
newMiddleItem.innerText = 'Take a road trip';
listContainer.replaceChild(newMiddleItem, middleItem);

const LastChildItem=listContainer.lastElementChild;
listContainer.removeChild(LastChildItem);