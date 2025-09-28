// DOM - Document Object Model

// Получаем элементы
const title = document.getElementById('title');
const nameInput = document.getElementById('name');
const hello = document.getElementById('hello');
const btn = document.getElementById('btn');
const status = document.getElementById('status');
const resultDiv = document.getElementById('result');
const destination = document.getElementById('destination');
const tickets = document.getElementById('tickets');


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
btn.addEventListener('click', function(){
    if(!nameInput.value || !destination.value || !tickets.value){
        alert('Пожалуйста, заполните все поля!');
        return;
    }

    const purchase = document.createElement('div');
    purchase.classList.add('purchase-row');
    purchase.textContent = `Имя: ${nameInput.value} | Куда: ${destination.value} | Кол-во билетов: ${tickets.value}`;
    resultDiv.appendChild(purchase);

    status.textContent = 'Вы купили билет!';
    status.style.color = 'green';
});
