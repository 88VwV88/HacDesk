const ul = document.getElementsByClassName('main-inner-div');

const cancel = () => {
    messg = '';
    document.querySelector('.dialouge-box').style.display = 'none';
}

const makeDialog = () => {
    document.querySelector('.dialouge-box').style.display = 'block';
}

let data = null;
async function initList() {
    await fetch('js/qna.json')
        .then(response => response.json())
        .then(json => data = json);
    data = data.QnAs;
    for (var msg of data) {
        let li = document.createElement('li');
        li.classList.add('slot');
        li.innerHTML = `${msg.Topic}
        <br>${msg.Q1}
        <br>${msg.Q2}`;
        ul[0].appendChild(li);
    }
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
    li.innerHTML = `${msg[0]}
    <br>${msg[1]}
    <br>${msg[2]}`;

    ul[0].appendChild(li);
    messg = '';
});