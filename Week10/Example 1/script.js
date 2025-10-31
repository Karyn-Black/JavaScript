// Step 1 Access the DOM element

const greetings = document.getElementsByClassName('greeting');
console.log(greetings);
console.log(greetings[0].innerHTML);
console.log(greetings.outerHTML);


const outputDiv = document.querySelector('#output');

const changeColorBtn = document.querySelector('.change-color-btn');

const addItemBtn = document.querySelector('.add-item-btn');

const hoverBtn = document.querySelector('.hover-btn');


changeColorBtn.addEventListener('click', () =>
    {
        greetings[0].style.color = "blue";

        const p = document.createElement('p');

        p.textContent = "The color has been changed!";

        console.log(p.textContent);

        outputDiv.appendChild(p);
    }
);

addItemBtn.addEventListener('click', () =>
    {
        const newPara = document.createElement('p');

        newPara.textContent = "This is a new paragraph. It is new. Now it is here. Therefore it is new.";

        outputDiv.appendChild(newPara);
    }
);

hoverBtn.addEventListener('mouseover', () =>
    {
        greetings[0].style.fontWeight = "bold";

        const p = document.createElement('p');
        p.textContent = "You hovered over the button!";

        outputDiv.appendChild(p);
    }
);

document.addEventListener('keydown', (event) =>
    {
        const p = document.createElement('p');
        p.textContent = `You pressed the "${event.key}" key`;
        outputDiv.appendChild(p);
    }
)