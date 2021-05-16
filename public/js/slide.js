

const img = document.querySelectorAll('.image');
const topImage = document.querySelector('img');
const div = document.querySelector('.slide');
console.log(div);
let count = 0;
// img.forEach((x)=>{
//     console.log(x.src);
// });

// function slide(){
//     if(img.length>0){
//         topImage.src = img[count].src;
//         topImage.classList.toggle('animation')
//         topImage.classList.toggle('animation0')
//        console.log(img[count]);
//        count++;
//        check();
//     }
// }
function slide(){
  
      div.style.background = `url(${img[count].src}) `;
      div.style.backgroundSize ='cover' ;
      

   
     
       count++;
       check();

}

function check(){
    if(count>= img.length){
        count=0;
    }
    
    
}
 setInterval(slide, 5000);
 function set(){
    div.style.background = `url(${img[0].src}) `;
    div.style.backgroundSize ='cover' ;
    div.style.backgroundAttachment ='fixed';
    div.style.transition = 'all 1s';
 };
 set();

