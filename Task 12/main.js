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
    // create delete btn
    const deleteBtn = document.createElement('button');

    //create text node to li
    li.appendChild(document.createTextNode(`${nameInput.value} - ${emailInput.value} - ${phoneInput.value}`));
    //create text node to button
    deleteBtn.appendChild(document.createTextNode("Delete"))

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

    //storing the emailInput value
    let text = emailInput.value;
    
    //delete button event
    deleteBtn.addEventListener('click', (e) => {
        //delete the li from ul
        ul.removeChild(li);

        //delete data from local storage
        localStorage.removeItem(text);
        
    });

    //clear fields
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
   
});


