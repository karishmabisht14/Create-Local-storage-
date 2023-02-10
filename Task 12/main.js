//get input field by its id
const form = document.querySelector('#myForm')
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');

//create ul
const ul = document.createElement('ul');

//event on submitBtn
form.addEventListener('submit', (e) => {
    e.preventDefault();

    //create li for the ul
    const li = document.createElement('li');
    //create edit btn
    const editBtn = document.createElement('button');
    // create delete btn
    const deleteBtn = document.createElement('button');

    //create text node to li
    li.appendChild(document.createTextNode(`${nameInput.value} - ${emailInput.value} - ${phoneInput.value}`));
    //create tect node to edit btn
    editBtn.appendChild(document.createTextNode('Edit'));
    //create text node to delete button
    deleteBtn.appendChild(document.createTextNode("Delete"))

    //append that editBtn to li
    li.appendChild(editBtn);
    //append that deleteBtn to li
    li.appendChild(deleteBtn);
    //append that li to ul
    ul.appendChild(li);
    
    //insert it into html
    form.insertAdjacentElement('afterend', ul);

    //create Object for local storage
    let userDetails = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value
    };

    //convert it into Json format
    let userDetailsJson = JSON.stringify(userDetails);

    //create localStorage
    localStorage.setItem( emailInput.value , userDetailsJson);

    //storing the Inputs value
    let nameText = nameInput.value;
    let emailText = emailInput.value;
    let phoneText = phoneInput.value;
    
    //edit button event
    editBtn.addEventListener('click', (e) => {

        //displaying the input values
        nameInput.value = nameText;
        emailInput.value = emailText;
        phoneInput.value = phoneText;
        //delete the li from ul
        ul.removeChild(li);
        //delete data from local storage
        localStorage.removeItem(emailText);    
    });

    //delete button event
    deleteBtn.addEventListener('click', (e) => {
        //delete the li from ul
        ul.removeChild(li);

        //delete data from local storage
        localStorage.removeItem(emailText);
        //clear fields
        nameInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';
        
    });

    //clear fields
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
   
});


