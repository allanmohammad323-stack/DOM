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

const containerDiv = document.querySelector('.container');
const divRemoveChild=document.createElement('div');

divRemoveChild.classList.add('grid1-2');

containerDiv.appendChild(divRemoveChild);

const removeChildBtn = document.createElement('button');
removeChildBtn.textContent = 'Remove Child';
removeChildBtn.classList.add('grid1-2','submit');
form.insertBefore(removeChildBtn, form.querySelector('button[type="submit"]'));


const inputElementName =document.createElement('input');
inputElementName.setAttribute('placeholder','Enter element id...');
inputElementName.classList.add('grid1-2');
divRemoveChild.append(removeChildBtn);
divRemoveChild.insertBefore(inputElementName, removeChildBtn);

removeChildBtn.style.maxWidth = inputElementName.offsetWidth + 'px'; 

const textarea = document.createElement('textarea');
textarea.setAttribute('placeholder','my id is testRemoveItem');
textarea.setAttribute('id','testRemoveItem');
textarea.classList.add('grid1-2');


divRemoveChild.appendChild(textarea);

removeChildBtn.onclick=function()
{
    const elementName = inputElementName.value;
    if (elementName&& document.getElementById(elementName)) {
        const elementToRemove = document.getElementById(elementName);    
    document.querySelector('.grid1-2').removeChild(elementToRemove);
        console.log(inputElementName.value+" removed");

    } else {
        alert('Please enter a valid element name.');
    }
}
console.log(containerDiv.children[0].textContent);


const cloneContainerBtn = document.createElement('button');
cloneContainerBtn.textContent = 'Clone container div';
cloneContainerBtn.classList.add('grid1-2','submit','buttonText');

cloneContainerBtn.style.maxWidth = removeChildBtn.offsetWidth + 'px';

containerDiv.appendChild(cloneContainerBtn);

const body = document.querySelector('body');
cloneContainerBtn.onclick=function()
{
    const clonedContainer = containerDiv.cloneNode(true);       
    body.appendChild(clonedContainer);
    console.log('Container div cloned');
}


const allDivs = document.querySelectorAll('div');
allDivs.forEach(div => {
    div.insertBefore(document.createElement('button'), div.firstChild).textContent = 'X';
    div.firstChild.classList.add('removeBtn');
    div.firstChild.onclick = function() {
        div.remove();
        console.log('Div removed');
    }
});

const keys = document.querySelector('.keys');
keys.removeChild(keys.querySelector('button'));


document.addEventListener('keydown', function(event) {
    
   
        document.getElementById(event.key.toUpperCase()).classList.add('clickedKey');
    
});
document.addEventListener('keyup', function(event) {
    
        document.getElementById(event.key.toUpperCase()).classList.remove('clickedKey');
    
});
