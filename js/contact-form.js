// Fetching HTML Elements in Variables by ID.
let x = document.getElementById('form_sample');
let createform = document.createElement('form'); // Create New Element Form
createform.setAttribute('action', ''); // Setting Action Attribute on Form
createform.setAttribute('method', 'post'); // Setting Method Attribute on Form
x.appendChild(createform);

let heading = document.createElement('h2'); // Heading of Form
heading.innerHTML = 'Contact Form ';
createform.appendChild(heading);

let line = document.createElement('hr'); // Giving Horizontal Row After Heading
createform.appendChild(line);

let linebreak = document.createElement('br');
createform.appendChild(linebreak);

let namelabel = document.createElement('label'); // Create Label for Name Field
namelabel.innerHTML = 'Your Name : '; // Set Field Labels
createform.appendChild(namelabel);

let inputelement = document.createElement('input'); // Create Input Field for Name
inputelement.setAttribute('type', 'text');
inputelement.setAttribute('name', 'dname');
createform.appendChild(inputelement);

// var linebreak = document.createElement('br');
createform.appendChild(linebreak);

let emaillabel = document.createElement('label'); // Create Label for E-mail Field
emaillabel.innerHTML = 'Your Email : ';
createform.appendChild(emaillabel);

let emailelement = document.createElement('input'); // Create Input Field for E-mail
emailelement.setAttribute('type', 'text');
emailelement.setAttribute('name', 'demail');
createform.appendChild(emailelement);

let emailbreak = document.createElement('br');
createform.appendChild(emailbreak);

let messagelabel = document.createElement('label'); // Append Textarea
messagelabel.innerHTML = 'Your Message : ';
createform.appendChild(messagelabel);

let texareaelement = document.createElement('textarea');
texareaelement.setAttribute('name', 'dmessage');
createform.appendChild(texareaelement);

let messagebreak = document.createElement('br');
createform.appendChild(messagebreak);

let submitelement = document.createElement('input'); // Append Submit Button
submitelement.setAttribute('type', 'submit');
submitelement.setAttribute('name', 'dsubmit');
submitelement.setAttribute('value', 'Submit');
createform.appendChild(submitelement);
