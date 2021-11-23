function cleanUpIndex() {
  const contacts = document.getElementsByClassName("contact");
  removeAllChildNodes(contacts);
}

function createSingleIndex(contact) {
  let contdiv = document.querySelector(".main");

  const contactcard = document.createElement("a");
  newDiv.setAttribute("href", "page3.html");

  const label = document.createElement("p");
  label.labelContent = contact["name"];
  newDiv.appendChild(label);

  cont.appendChild(label);
  contdiv.appendChild(contactcard);

  return contdiv;
}

function renderIndex(contactList) {
  for (let i = 0; i < contactList.length; i++) {

    let contdiv = document.querySelector(".main");

    let cont = document.createElement("a");
    cont.setAttribute("href", "page3.html");

    let contact = document.createElement("div");
    contact.className = "contact";

    let label = document.createElement("p");
    label.innerHTML = contactList[i]["Name"];
    contact.appendChild(label);

    cont.appendChild(contact);
    contdiv.appendChild(cont);
}

function cleanUpView() {
  const info = document.getElementsByClassName("info");
  removeAllChildNodes(info);
}

function renderView() {
  let view = document.querySelector(".main");

  let newDiv = document.createElement("div");
  newDiv.className = "info";

  let contactName = document.createElement("div");
      contactName.className = "Name";
  contactName.innerHTML = contact["Name"];

  let avatar = document.createElement("img");
  avatar.src = "./img/profile.jpg";
  avatar.className = "avatar";
  contactName.appendChild(avatar);

  newDiv.appendChild(contactName);

  let email = document.createElement("div");
  email.className = "email";
  email.innerHTML = "Email: " + contact["email"];
  newDiv.appendChild(email);
  
  let Phone = document.createElement("div");
  Phone.className = "Phone";
  Phone.innerHTML = "Phone: " + contact["Phone"];
  newDiv.appendChild(Phone);

  let address = document.createElement("div");
  address.className = "address";
  address.innerHTML = "Address: " + contact["address"];
  newDiv.appendChild(address);

  let buttons = document.createElement("div");
  buttons.className = "buttons"

  let button1 = document.createElement("button1");
  button1.className = "editbutton";
  button1.innerHTML = "Edit";
  buttons.appendChild(button1);

  let button2 = document.createElement("button2");
  button2.className = "closebutton";
  button2.innerHTML = "Close";
  buttons.appendChild(button2);

  newDiv.appendChild(buttons);
  view.appendChild(newDiv);
  
  return view
}

function cleanUpCreate() {
  const editcontact = document.getElementsByClassName("editcontact");
  removeAllChildNodes(editcontact);
}

function renderCreate() {
  let createPage = document.querySelector(".main");

  let Edit = document.createElement("div");
  Edit.className = "edit contact";

  let avatarDiv = document.createElement("div");
  avatarDiv.className = "avatar";
  let createAvatar = document.createElement("img");
  createAvatar.className = "avatar";
  createAvatar.src = "./img/profile.jpg";
  Edit.appendChild(createAvatar);

  let formDiv = document.createElement("div");

  let formContainer = document.createElement("div");
  formContainer.className = "formcontainer"
  let input = document.createElement("input")
  input.type = "text";
  input.id = "contName";
  input.name = "contName";
  input.placeholder = "Contact Name";
  input.value = contact["name"];

  let plusSign = document.createElement("button")
  plusSign.className = "newfield";
  plusSign.id = "newnamefield";
  plusSign.name = "newnamefield";
  plusSign.innerHTML = "+"

  formContainer.appendChild(input);
  formContainer.appendChild(plusSign);
  formDiv.appendChild(formContainer);
  
  let Phone = document.createElement("div");
  Phone.className = "phoneinput"
  let phoneInput = document.createElement("input")
  phoneInput.type = "tel";
  phoneInput.id = "contPhone";
  phoneInput.name = "contPhone";
  phoneInput.placeholder = "Contact Phone Number";
  phoneInput.value = contact["phone"];

  let plusSign2 = document.createElement("button")
  plusSign2.classList = "newfield";
  plusSign2.id = "newphonefield";
  plusSign2.name = "newphonefield";
  plusSign2.innerHTML = "+"

  Phone.appendChild(phoneInput);
  Phone.appendChild(plusSign2);
  formDiv.appendChild(Phone);

  let Address = document.createElement("div");
  Address.className = "addressinput"
  let addressinput = document.createElement("input")
  addressinput.type = "text";
  addressinput.id = "contAddress";
  addressinput.name = "contAddress";
  addressinput.placeholder = "Contact Address";
  addressinput.value = contact["address"];

  let plusSign3 = document.createElement("button")
  plusSign3.classList = "newfield";
  plusSign3.id = "newaddressfield";
  plusSign3.name = "newaddressfield";
  plusSign3.innerHTML = "+"
  
  Address.appendChild(addressinput);
  Address.appendChild(plusSign3);
  formDiv.appendChild(Address);

  let Email = document.createElement("div");
  Email.className = "emailinput"
  let emailinput = document.createElement("input")
  emailinput.type = "email";
  emailinput.id = "contEmail";
  emailinput.name = "contEmail";
  emailinput.placeholder = "Contact Email";
  emailinput.value = contact["email"];

  let plusSign4 = document.createElement("button")
  plusSign4.classList = "newfield";
  plusSign4.id = "newemailfield";
  plusSign4.name = "newemailfield";
  plusSign4.innerHTML = "+"
  
  Email.appendChild(emailinput);
  Email.appendChild(plusSign4);
  formDiv.appendChild(Email);

  let buttonsDiv = document.createElement("div");
  buttonsDiv.className = "buttons"

  let submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.className = "save button";
  submitButton.id = "contSave";
  submitButton.name = "contSave";
  submitButton.innerHTML = "Save";

  let resetButton = document.createElement("button");
  resetButton.type = "reset";
  resetButton.className = "cancel button";
  resetButton.id = "contCancel";
  resetButton.name = "contCancel";
  resetButton.innerHTML = "Cancel";
  buttonsDiv.appendChild(submitButton);
  buttonsDiv.appendChild(resetButton);

  formDiv.appendChild(buttonsDiv);
  Edit.appendChild(formDiv);
  createPage.appendChild(Edit);

  return createPage
}
}