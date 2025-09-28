// DOM - Document Object Model

// Получаем элементы
const title = document.getElementById('title');
const nameInput = document.getElementById('name');
const hello = document.getElementById('hello');
const btn = document.getElementById('btn');
const status = document.getElementById('status');

//Обработчик событий при вводе имени
nameInput.addEventListener('input', function(){
    hello.textContent = "Привет, " + nameInput.value + "!";
});

//При наведении на кнопку событие
btn.addEventListener("mouseover", function(){
    status.textContent = 'Вы готовы купить билет?';
    status.style.color = 'hwb(80 9% 43%)';
});

//При двойном нажатии на кнопку 
btn.addEventListener('dblclick', function(){
    status.textContent = 'Вы купили VIP-билет';
    status.style.color = '#BA55D3';
});


const resultDiv = document.createElement('div');
resultDiv.id = 'result';
document.body.appendChild(resultDiv);
resultDiv.style.display = 'flex';
resultDiv.style.flexDirection = 'column';
resultDiv.style.alignItems = 'center';
resultDiv.style.marginTop = '20px';

const destination = document.createElement('input');
destination.id = 'destination';
destination.placeholder = 'Куда хотите полететь?';
destination.style.margin = '5px';
document.body.insertBefore(destination, btn);

const tickets = document.createElement('input');
tickets.id = 'tickets';
tickets.type = 'number';
tickets.placeholder = 'Количество билетов';
tickets.min = 1;
tickets.style.margin = '5px';
document.body.insertBefore(tickets, btn);

btn.addEventListener('click', function(){
    if (!nameInput.value || !destination.value || !tickets.value) {
        alert('Пожалуйста, заполните все поля!');
        return;
    }

    const purchase = document.createElement('div');
    purchase.style.display = 'flex';
    purchase.style.justifyContent = 'space-between';
    purchase.style.width = '350px';
    purchase.style.border = '1px solid #333';
    purchase.style.padding = '5px 10px';
    purchase.style.margin = '5px';
    purchase.style.borderRadius = '5px';
    purchase.style.backgroundColor = '#f0f0f0';

    purchase.textContent = `Имя: ${nameInput.value} | Куда: ${destination.value} | Кол-во билетов: ${tickets.value}`;

    resultDiv.appendChild(purchase);

    status.textContent = 'Вы купили билет!';
    status.style.color = 'green';
});
