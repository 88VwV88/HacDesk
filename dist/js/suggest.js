const ul = document.getElementsByClassName('main-inner-div');

let data = null;
await fetch('js/qna.json')
    .then(response => response.json())
    .then(json => data = json);
data = data.QnAs;
for (var msg of data) {
    let li = document.createElement('li');
    li.classList.add('slot');
    li.innerHTML = `${msg.Topic}
    <br>${msg.Q1}
    <br>${msg.A2}`;
    ul[0].appendChild(li);
    li.innerHTML = `${msg.Topic}
    <br>${msg.Q2}
    <br>${msg.A2}`;
    ul[0].appendChild(li);

}

const question = document.getElementById('submit-article');
let messg = '';
question.addEventListener('keypress', (event) => {
    if (event.key === 'Enter')
        messg += '!;'
    else messg += event.key;
})

const btn = document.querySelector('.submit');
btn.addEventListener('click', () => {
    messg = messg.split('!;');

    let li = document.createElement('li');
    li.classList.add('slot');
    if (msg != []) {
        li.innerHTML = `${messg[0]? messg[0]: ''}
        <br>${messg[1]? messg[1]: ''}
        <br>${messg[2]? messg[2]: ''}`;
    } else {
        alert('Enter a valid message!');
        return;
    }

    console.log(messg);
    document.querySelector('.Complaints-dialouge-box-box').click();

    ul[0].appendChild(li);
    messg = '';
});

btn = document.querySelector('.Complaints-dialouge-box');
btn.addEventListener('click', () => {
    btn.click();
});

/* 
Example Question:

Sustainable Living
Is vegetarianism more environmentally friendly?
Generally, a vegetarian diet has a lower environmental impact compared to a meat-heavy diet because of reduced greenhouse gas emissions associated with livestock farming.

*/