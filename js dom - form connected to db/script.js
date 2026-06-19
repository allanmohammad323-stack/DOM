function getData() {
    const email = document.querySelector('input[type="email"]').value;
    const phone = document.getElementById('phone').value;
    const username = document.querySelector('input[placeholder="Username"]').value;
    const password = document.querySelector('input[type="password"]').value;
   
   console.log({name: username, email: email, phone: phone, password: password});

}

function inputBoxesToRed()
{
    const inputBoxes = document.querySelectorAll('input');
    inputBoxes.forEach(box => {
        box.classList.add('inputBoxesToRed');
    });
}
const form = document.querySelector('form');
if (form.hasAttribute('onsubmit')) 
    {
        console.log('Form has onsubmit attribute');
    }
else
    {
        form.setAttribute('onsubmit', 'getData()');
        console.log('Form onsubmit attribute added');
    }
if (form.classList.contains('Form-style'))
    {
        console.log('Form has Form-style class');
    }
else
    {
        form.classList.add('Form-style');
        console.log('Form-style class added');
    }

    const convertToRedBtn=document.getElementById('convert-to-red');

convertToRedBtn.onclick=function()
{
    if (convertToRedBtn.textContent === 'Convert To Red') {
        convertToRedBtn.textContent = 'Return From Red';
    } else {
        convertToRedBtn.textContent = 'Convert To Red';
    }
    
    const inputs= document.querySelectorAll('input');

    inputs.forEach(input => {
    input.classList.toggle('inputBoxesToRed');
    });
}

convertToRedBtn.classList.add('convertToRedBtn');
document.querySelector('title').textContent='DOM---';
/*
const txtarea=document.createElement('input');
txtarea.classList.add('txtArea');
txtarea.setAttribute('name','message');
txtarea.setAttribute('placeholder','Enter your text here...');
form.insertBefore(txtarea, form.querySelector('button[type="submit"]'));
*/
const containerDiv = document.querySelector('.container');
const divRemoveChild=document.createElement('div');

containerDiv.appendChild(divRemoveChild);

const removeChildBtn = document.createElement('button');
removeChildBtn.textContent = 'Remove Child';
removeChildBtn.classList.add('grid1-2');
form.insertBefore(removeChildBtn, form.querySelector('button[type="submit"]'));

const inputElementName =document.createElement('input');
inputElementName.setAttribute('placeholder','Enter element name...');
inputElementName.classList.add('grid1-2');
divRemoveChild.append(removeChildBtn);
divRemoveChild.insertBefore(inputElementName, removeChildBtn);

const textarea = document.createElement('textarea');
textarea.setAttribute('placeholder','my id is testRemoveItem');
textarea.setAttribute('id','testRemoveItem');

containerDiv.appendChild(textarea);

removeChildBtn.onclick=function()
{
    const elementName = inputElementName.value;
    if (elementName&& document.getElementById(elementName)) {
        const elementToRemove = document.getElementById(elementName);    
    document.querySelector('.container').removeChild(elementToRemove);
    } else {
        alert('Please enter a valid element name.');
    }
}