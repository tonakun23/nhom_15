const listItems = document.querySelector('.list-items');
const btnLeft= document.querySelector('.btn-left')
const btnRight= document.querySelector('.btn-right')

const length = 3;
let current = 0;

const widthInRem = 76.5;
const handleChangeSlide = () =>{
    if (current == length - 1) {
        current = 0;
        listItems.style.transform = `translateX(0rem)`; 
        document.querySelector('.active4').classList.remove('active4')
        document.querySelector('.index-item-'+ current).classList.add('active4')
    } else {
        current++;
        listItems.style.transform = `translateX(${-widthInRem * current}rem)`;  
        document.querySelector('.active4').classList.remove('active4')
        document.querySelector('.index-item-'+ current).classList.add('active4')     
    }
}
let handleEventChangeSlide = setInterval(handleChangeSlide, 4000);


btnRight.addEventListener('click', () => {
    clearInterval(handleEventChangeSlide)
    handleChangeSlide()
    handleEventChangeSlide = setInterval(handleChangeSlide, 4000)
})

btnLeft.addEventListener('click', () => {
    clearInterval(handleEventChangeSlide)
    if (current === 0) {
        current = length - 1;
        document.querySelector('.active4').classList.remove('active4')
        document.querySelector('.index-item-'+ current).classList.add('active4') 
    } else {
        current--;
        document.querySelector('.active4').classList.remove('active4')
        document.querySelector('.index-item-'+ current).classList.add('active4') 
    }
    listItems.style.transform = `translateX(${-widthInRem * current}rem)`;   
    handleEventChangeSlide = setInterval(handleChangeSlide, 4000)
});
