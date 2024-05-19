const listItems = document.querySelector('.list-items');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');

const length = 3;
let current = 0;
const intervalTime = 4000;
let handleEventChangeSlide;

const updateSlidePosition = () => {
    const itemWidth = listItems.children[0].offsetWidth;
    const gap = parseInt(getComputedStyle(listItems).gap) || 0;
    const totalWidth = itemWidth + gap;
    listItems.style.transform = `translateX(${totalWidth * -1 * current}px)`;
};

const updateActiveClass = () => {
    document.querySelector('.active4').classList.remove('active4');
    document.querySelector(`.index-item-${current}`).classList.add('active4');
};

const handleChangeSlide = () => {
    current = (current + 1) % length;
    updateSlidePosition();
    updateActiveClass();
};

const startAutoSlide = () => {
    handleEventChangeSlide = setInterval(handleChangeSlide, intervalTime);
};

const resetAutoSlide = () => {
    clearInterval(handleEventChangeSlide);
    startAutoSlide();
};

btnRight.addEventListener('click', () => {
    resetAutoSlide();
    handleChangeSlide();
});

btnLeft.addEventListener('click', () => {
    resetAutoSlide();
    if (current === 0) {
        current = length - 1;
    } else {
        current--;
    }
    updateSlidePosition();
    updateActiveClass();
});

// Initialize the slider
updateSlidePosition();
updateActiveClass();
startAutoSlide();
