/* Here is an example of a contact list array, with two contacts already populated */
let contactList = [{
    name: "Roberta Dobbs",
    phone: "778-555-1234",
    address: "101 Main St, Anytown, USA",
    email: "subgenius@slack.example.com",
},
{
    name: "Bugs Bunny",
    phone: "123-867-5309",
    address: "Warner Brothers Animation Lot",
    email: "whatsup@doc.example.com",
},
];


function cleanUpIndex() {

    let main = document.querySelector("#page2");
    if (main) {
        main.remove();
    };

};

function createSingleIndex(contact) {

    let contactcard = document.createElement("a");
    contactcard.setAttribute("href", "page3.html");

    let label = document.createElement("p");
    label.textContent = contact["name"];
    label.classList.add("contact");
    contactcard.appendChild(label);
    contactcard.appendChild(label);

    contactcard.addEventListener("click", (event) => {

        event.preventDefault();
        let name = event.target.textContent;
        for (i = 0; i < contactList.length; i++) {
            let contactName = contactList[i]
            if (contactName["name"] == name) {
                cleanUpIndex();
                renderView(contactList[i]);
            };
        };
    });
    return contactcard;

};

function renderIndex(contactList) {
    let index = document.querySelector(".contacts");
    for (let i = 0; i < contactList.length; i++) {
        let contactcard = createSingleIndex(contactList[i]);
        index.appendChild(contactcard);
    };
};

function cleanUpView() {

    let main = document.querySelector(".main");
    main.innerHTML = "";

};


function renderView(contact) {

    let view = document.querySelector("main")

    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "page2");

    let contactEdit = document.createElement("div");
    contactEdit.classList.add("contactedit");

    let avatarimg = document.createElement("img");
    avatarimg.setAttribute("src", "./img/profile.jpg");
    avatarimg.setAttribute("class", "profilepic");
    avatarimg.setAttribute("alt", "Profile picture");

    let avatarDiv = document.createElement("div");
    avatarDiv.classList.add("avatar");

    let form = document.createElement("form");
    let formDiv = document.createElement("div");
    formDiv.classList.add("form");

    view.appendChild(newDiv);
    newDiv.appendChild(contactEdit);
    contactEdit.appendChild(avatarDiv);
    avatarDiv.appendChild(avatarimg);
    contactEdit.appendChild(formDiv);
    formDiv.appendChild(form);

    for (i = 0; i < 4; i++) {

        const input = "";
        const inputType = "";

        let fieldDiv = document.createElement("div");
        fieldDiv.classList.add("extrafield");

        if (i == 0) {
            input = "contactname";
            inputType = "text";

        } else if (i == 1) {
            input = "contactphone";
            inputType = "tel";

        } else if (i == 2) {
            input = "contactaddress";
            inputType = "text";

        } else {
            input = "contactemail";
            inputType = "email";
        };

        let userInput = document.createElement("userInput");
        userInput.setAttribute("inputType", inputType);
        userInput.setAttribute("id", `contact${input}`);
        userInput.setAttribute("contactname", `contact${input}`);
        userInput.setAttribute("placeholder", `Contact ${input.toUpperCase().substring(0, 1) + input.substring(1)}`);

        let plusButton = document.createElement("button");
        plusButton.classList.add("extrafield");
        plusButton.setAttribute("id", `extra${input}field`);
        plusButton.setAttribute("contactname", `extra${input}field`);
        plusButton.textContent = "+";

        if (input == "contactname") {
            plusButton.setAttribute("id", "emptyformat");
        } else {
            plusButton.setAttribute("id", `extra${input}field`);
        };

        form.appendChild(fieldDiv);
        fieldDiv.appendChild(userInput);
        fieldDiv.appendChild(plusButton);

    };

    let buttonDiv = document.createElement("div");
    buttonDiv.setAttribute("class", "buttons");

    let saveButton = document.createElement("button");
    saveButton.setAttribute("class", "redbutton");
    saveButton.classList.add("button", "save");
    saveButton.setAttribute("id", "savecontact");
    saveButton.setAttribute("name", "savecontact");
    saveButton.textContent = "Save Contact";

    form.appendChild(buttonDiv);
    buttonDiv.appendChild(saveButton);

    saveButton.addEventListener("click", (event) => {
        event.preventDefault()
        let inputName = document.querySelector("#contactname").value
        let inputPhone = document.querySelector("#contactphone").value
        let inputAddress = document.querySelector("#contactaddress").value
        let inputEmail = document.querySelector("#contactemail").value

        let inputContact = {
            name: inputName,
            phone: inputPhone,
            address: inputAddress,
            email: inputEmail,
        };

        contactList.push(inputContact);
        console.log(contactList);

        cleanUpView();
        cleanUpCreate();
        cleanUpIndex();
        renderIndex(contactList);
    });

    let cancelButton = document.createElement("button");
    cancelButton.setAttribute("type", "reset");
    cancelButton.classList.add("bluebutton");
    cancelButton.setAttribute("id", "cancel");
    cancelButton.setAttribute("name", "cancel");
    cancelButton.textContent = "Cancel";

    cancelButton.addEventListener("click", (event) => {
        cleanUpCreate();
        cleanUpIndex();
        cleanUpView();
        renderIndex(contactList);

    });

    buttonDiv.appendChild(cancelButton);

};

function clear_main(event) {
    event.preventDefault();
    cleanUpView();
    cleanUpCreate();
    cleanUpIndex();
    renderIndex(contactList);
};

let Contacts = document.querySelector("#contact");
Contacts.addEventListener("click", clear_main);

function clearContact(event) {

    event.preventDefault();
    cleanUpCreate();
    cleanUpIndex();
    cleanUpView();
    renderCreate(contactList);

};

let Create_new_contact = document.querySelector("#newcontact");
Create_new_contact.addEventListener("click", clearContact);