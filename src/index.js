import "./style.css";

const buttonProfile = document.querySelector('.menu__button-profile')
const buttonMessage = document.querySelector('.menu__button-messages')
const messages_div = document.querySelector('.card_messages')
const content = document.querySelector('.content')

const title = document.createElement('h1')
title.innerHTML = 'Профиль';

function profileAdd() {
    messages_div.parentNode.removeChild(messages_div)
    content.appendChild(title)
    console.log(123);
}

function messAdd() {
    title.parentNode.removeChild(title)
    content.appendChild(messages_div)
    console.log(312);
}

buttonProfile.addEventListener("click", profileAdd)
buttonMessage.addEventListener("click", messAdd)