

const img = document.querySelectorAll('.image');
const topImage = document.querySelector('img');
let count = 0;
// img.forEach((x)=>{
//     console.log(x.src);
// });

function slide(){
    if(img.length>0){
        topImage.src = img[count].src;
        topImage.classList.toggle('animation')
        topImage.classList.toggle('animation0')
       console.log(img[count]);
       count++;
       check();
    }



}

function check(){
    if(count>= img.length){
        count=0;
    }
    
    
}
window.addEventListener('load', setInterval(slide, 10000));

