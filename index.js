/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

// Задание 2: Модальное окно
const openBtn = document.querySelector('#openModal');
const closeBtn = document.querySelector('#closeModal');
const overlay = document.querySelector('#modalOverlay');

openBtn.addEventListener('click', () => overlay.classList.remove('hidden'));
closeBtn.addEventListener('click', () => overlay.classList.add('hidden'));