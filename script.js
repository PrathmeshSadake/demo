//console.log(document.URL);
//console.log("javascript")
//console.log(document.title);

//document.title="myList";

//console.log(document.all[10]);

//var headerTitle = document.getElementById('header-title');
//headerTitle.style.color="blue"

//headerTitle.style.borderBottom="solid 3px #000"

//var item=document.getElementsByClassName('title')
//item[0].style.color='green';
//item[0].style.fontWeight='bold';

//var items = document.getElementsByClassName('list-group-item');
//console.log(items)
//items[2].style.backgroundColor = 'green';

//for (let i=0;i<items.length;i++) {
//    items[i].style.fontWeight='bold';
//}

//for (let i=0;i<items.length;i++) {
//    items[i].style.color='blue';
//}

//var li = document.getElementsByTagName('li');
//for (let i=0;i<li.length;i++) {
//   li[i].style.color='red';
//}

//var secondItem = document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.backgroundColor='green';

//var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
//thirdItem.style.visibility='hidden';

//var titles = document.querySelectorAll('.list-group-item');
//titles[1].style.color = 'green'

//var odd = document.querySelectorAll('li:nth-child(odd)');

//for (var i=0;i<odd.length;i++) {
//    odd[i].style.backgroundColor = 'green';
//}

//TRANSVERSING DOM
var itemList = document.querySelector("#items");

//parentELement

//itemList.parentElement.style.backgroundColor='blue';
console.log(itemList.parentElement.parentElement.parentElement);

//childrenNodes
console.log(itemList.childNodes);
console.log(itemList.children);

//itemList.children[1].style.backgroundColor = 'red'

//firstChild
console.log(itemList.firstChild);

//firstElementChild
console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent = 'YOUTUBE';

//lastChild
console.log(itemList.lastChild);

//lastElementChild
console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent = 'YOUTUBE'

//nextSibling
console.log(itemList.nextSibling);

//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);

//previousElementSibling
console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color = 'blue';

//createElement

//create div
var newDiv = document.createElement("div");
console.log(newDiv);

//addClass
newDiv.className = "styling";

//addId
newDiv.id = "styling2";

//add attribute
newDiv.setAttribute("title", "styling3");

//createTextNode
var newDivText = document.createTextNode("Hello Word");

//addText to Div
newDiv.appendChild(newDivText);

var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");

container.insertBefore(newDiv, h1);

var newEle = document.createElement("div");
var newDivText2 = document.createTextNode("Hello Word");

newEle.appendChild(newDivText2);

var newHead = document.querySelector("div .list-group");
var h2 = document.querySelector("div li");

newHead.insertBefore(newEle, h2);
