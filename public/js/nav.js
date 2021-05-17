const ul = document.querySelector('ul');
const btnNav = document.querySelector('.icon-btn');
const cross = document.querySelector('.cross');

btnNav.addEventListener('click', show);
cross.addEventListener('click', hide);
document.querySelector('body').addEventListener('click', hide);

function show(event){
    event.stopPropagation();
    btnNav.classList.add('off');
    cross.classList.remove('off');
    ul.classList.add('on');
}
function hide(){
    btnNav.classList.remove('off');
    cross.classList.add('off');
    ul.classList.remove('on');
}


