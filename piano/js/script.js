let keyCheck=document.querySelector('.keys-checkbox input');
let pianoKeys=document.querySelectorAll('.piano-keys .key');

let allKeys=[];
let audio=new Audio('tunes/a.wav');

keyCheck.addEventListener('click',function(e){
   
    pianoKeys.forEach(key =>{
        key.classList.toggle("hide");
    })
});

pianoKeys.forEach(item =>{
    allKeys.push(item.dataset.key);
    item.addEventListener('click',()=>{
        console.log('clicked key=',item.dataset.key);
        playTune(item.dataset.key);
    });
});
function playTune(key){
    audio.src=`tunes/${key}.wav`;
    audio.play();

    const clickedkey=document.querySelector(`[data-key=${key}]`);
    clickedkey.classList.add('active');

    setTimeout(() =>{
        clickedkey.classList.remove('active');
    },150);
}
document.addEventListener('keydown',function(e){
    if(allKeys.includes(e.key)){
        playTune(e.key);
    }
})