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
    let contact = createSingleIndex(contactList[i]);
    view.appendChild(contact);
  }
}

function cleanUpCreate() {
  const contactedit = document.getElementsByClassName("contactedit");
  removeAllChildNodes(contactedit);
}

function renderCreate() {
  let view = document.querySelectorAll(".main");
  for (i = 0; contact.length > i; i++) {
    let contact = createSingleIndex(contactList[i]);
    view.appendChild(contact);
  }
}