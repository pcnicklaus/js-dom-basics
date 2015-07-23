// console.log("sanity check")

// var firstParagraph = document.getElementById('main');
// console.log(firstParagraph);

// var getAllElements = document.getElementsByTagName('ul');
// console.log(getAllElements)

var getSingleElement = document.getElementsByTagName('ul')[0];
console.log(getSingleElement)

var allListItems = document.getElementsByTagName('li');
console.log(allListItems)

// // for (var i = 0; i < allListItems.length; i++) {
// //   console.log(allListItems[i].innerText);
// // }

// for (var i = 0; i < allListItems.length; i++) {
//   console.log(allListItems[i].innerText = i);
// }
// console.log(allListItems);

var li = document.createElement('li');
console.log(li);

var newElement = li.innerText = "another list item";
console.log(newElement);
console.log(li);
getSingleElement.appendChild(li);
console.log(allListItems);

// prepend an element before the list
var myListItem = document.createElement("li");
var listItemText = document.createTextNode("text for my list item");
myListItem.appendChild(listItemText);
getSingleElement.insertBefore(myListItem, getSingleElement.childNodes[0]);

//remove an element from the list
getSingleElement.removeChild(getSingleElement.childNodes[6]);

//change some elements props
document.getElementById('main').style.backgroundColor = "red";
document.getElementById("main").style.fontSize = "3em";
document.getElementsByTagName("li")[1].style.border = "thick solid #0000FF";
document.getElementsByTagName("li")[4].style.backgroundColor = "pink";
document.getElementsByTagName("li")[3].style.cssFloat = "right";



//event listeners
var item1 = document.getElementById("main-button");
item1.onmouseover=function () {
  alert("stop hovering you silly fool")
}

var item2 = document.getElementsByTagName("h1")[0];
item2.onmouseover=function () {
  alert("is this working?")
}

