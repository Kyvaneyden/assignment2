function cleanUpIndex() {
  const contacts = document.getElementsByClassName("contact");
  removeAllChildNodes(contacts);
}

function createSingleIndex(contact) {
  const contactcard = document.createElement("a");
  newDiv.setAttribute("href", "page3.html");

  const newDiv = document.createElement("div");
  newDiv.classList.add("contact");
  contactcard.appendChild(newDiv)

  const label = document.createElement("p");
  label.textContent = contact["title"];
  newDiv.appendChild(label);

  return contactcard;
}

function renderIndex(contactList) {
  let index = document.querySelectorAll(".main");
  for (i = 0; contactList.length > i; i++) {
    let contact = createSingleIndex(contactList[i]);
    index.appendChild(contact);
  }
}

function cleanUpView() {
  const contactinfo = document.getElementsByClassName("contactinfo");
  removeAllChildNodes(contactinfo);
}

function renderView() {
  let view = document.querySelectorAll(".main");
  for (i = 0; contact.length > i; i++) {
    let contact = createSingleIndex(contactinfo[i]);
    view.appendChild(contact);
}

cleanUpCreate()

renderCreate()

/*
- Create a function called renderCreate that creates all of the DOM nodes that are 
unique to the Create page. This function will take in a single parameter, which is 
an object that represents a single contact. Much like renderIndex, this function is 
reponsible for actually modifying the web page.

- write the page in javascript and index an object to add information while you do it
*/