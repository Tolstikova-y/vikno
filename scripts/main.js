let holedoorEl = document.querySelector('.hole-door');
let vikno2El = document.querySelector('.vikno-2');
let vikno1El = document.querySelector('.vikno-1');
let leafunderEl = document.querySelector('.leaf-under');
let leafEl = document.querySelector('.leaf');


leafunderEl.addEventListener('click', (ev)=> {
    leafEl.classList.add('show')
})

vikno1El.addEventListener('click', (ev)=> {
    leafEl.classList.remove('show')
})