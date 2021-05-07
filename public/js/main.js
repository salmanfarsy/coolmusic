const loader = document.querySelector('.loader');
window.addEventListener('load', ()=>{
loader.classList.add('off');
})


const btn = document.querySelector('.icon');
const form = document.querySelector('.search');

btn.addEventListener('click', ()=>{
    form.classList.toggle('off');
})