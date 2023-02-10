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

    //create text node
    li.appendChild(document.createTextNode(`${nameInput.value} - ${emailInput.value} - ${phoneInput.value}`));

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
    console.log(userDetailsJson);

    //create localStorage
    localStorage.setItem( emailInput.value , userDetailsJson);

    //clear fields
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
});
