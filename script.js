cleanUpIndex()


/* 
- Create a function called cleanUpIndex that removes all of the DOM nodes 
that are unique to the Index page. This function takes no parameters.

- select all cards and write loop that removes them 
*/

createSingleIndex(contact)

/*
- Create a function called createSingleIndex that creates a DOM node that represents
a single index card for the Index page. This function will take in a single object,
where that object represents a single contact (see examples below).
It should output a DOM node. It does not need to attach the DOM node to the rest of the DOM.

- create a function that indexes an object with the name of a contact and puts it in a div
and then puts that div in a link
*/

renderIndex(contactList)

/*
- Create a function called renderIndex that creates all of the DOM nodes that are unique to the
Index page. This function will take in a single parameter, which is an array containing
many contacts, each of which represents a single contact. An example array of contacts is 
provided below. But be warned, I will supply the array, and I may change the details, like 
how many contacts there are. Obviously the reason you wrote createSingleIndex is because I 
thought it would help you write this function. Unlike createSingleIndex, which just sort of 
creates some stuff in isolation, this function must actually put DOM nodes onto the web page.

- write a loop that takes a list of contacts and calls createSingleIndex(contact) 
and appends each one to the main div.

- // Add new todo to the end of the list
todoList.appendChild(newTodo);

-- end of index page
*/

cleanUpView()

/*
- Create a function called cleanUpView that removes all of the DOM nodes that are unique 
to the View page. This function takes no parameters.

- just remove the .contactinfo
*/

renderView()

/*
- Create a function called renderView that creates all of the DOM nodes that are unique 
to the View page. This function will take in a single parameter, which is an object that 
represents a single contact. Much like renderIndex, this function is reponsible for 
actually modifying the web page.

- write the page in javascript and index an object to add information while you do it

-- end of view page
*/

cleanUpCreate()

/*
- Create a function called cleanUpCreate that removes all of the DOM nodes that are 
unique to the Create page. This function takes no parameters.

- just remove the .contactinfo
*/

renderCreate()

/*
- Create a function called renderCreate that creates all of the DOM nodes that are 
unique to the Create page. This function will take in a single parameter, which is 
an object that represents a single contact. Much like renderIndex, this function is 
reponsible for actually modifying the web page.

- write the page in javascript and index an object to add information while you do it
*/

let contactList = [
    {
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
  ]