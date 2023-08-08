let keyCheck=document.querySelector('.keys-checkbox input');
let pianoKeys=document.querySelectorAll('.piano-keys .key');

keyCheck.addEventListener('click',function(e){
    pianoKeys.forEach(key =>{
        key.classList.toggle('hide');
    })
});