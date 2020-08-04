// variable the list first
var list = document.getElementsByTagName('ul')[0];
// ADD NEW ITEM TO END OF LIST
// to create text names cream
var itmtxt = document.createTextNode('cream');
// to create list as li
var itm = document.createElement('li');
itm.appendChild(itmtxt);
list.appendChild(itm);

// ADD NEW ITEM START OF LIST
// to create text names Kale
itmtxt = document.createTextNode('kale');
// to create list as li
itm = document.createElement('li');
itm.appendChild(itmtxt);
list.insertBefore(itm, list.firstChild);
// To get all list items.
var liItm = document.getElementsByTagName('li');
var liItmNum = liItm.length;

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var i;
for (i = 0; i < liItmNum; ++i) {
    liItm[i].className = 'cool';
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
//to get the position at the end of h2 first
var NumItm = document.querySelector('h2');
//add the new span to it.
itm = document.createElement('span');
//then to create the nodes counts
itmtxt = document.createTextNode(liItmNum);
itm.appendChild(itmtxt);
//add the item to counts.
NumItm.appendChild(itm);
