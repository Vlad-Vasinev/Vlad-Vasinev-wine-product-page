

let productContent = document.querySelector('.products__content-items');
if (productContent) {
    var mixer = mixitup('.products__content-items');
}

let productCount = document.querySelector('.product__count');
let countPlus = document.querySelector('.count-plus');
let countMinus = document.querySelector('.count-minus');

if (productCount) {
    
    productCount.addEventListener('mouseover', () => {
        countMinus.style.display = 'block';
        countPlus.style.display = 'block';
        countPlus.addEventListener('mouseover', () =>{
            countPlus.style.display = 'block';
        });
        countPlus.addEventListener('mouseout', () =>{
            countPlus.style.display = 'none';
        });
        countMinus.addEventListener('mouseover', () =>{
            countMinus.style.display = 'block';
        })
        countMinus.addEventListener('mouseout', () =>{
            countMinus.style.display = 'none';
        });
    });
    productCount.addEventListener('mouseout', () => {
        countMinus.style.display = 'none';
        countPlus.style.display = 'none';
    });

    var i = 1;
    countPlus.addEventListener('click', () => {
        i++;
        productCount.innerHTML = i;
    });
    countMinus.addEventListener('click', () => {
        if (i < 1 && i == 0) {
            productCount.innerHTML = 0;
        }
        else{
            i--;
           productCount.innerHTML = i;
        }
    });
}

let showFilters = document.querySelector('.show-filters');
let filters = document.querySelector('.products__filters');

if (showFilters) {
    showFilters.addEventListener('click', filterShow);
}

function filterShow(Event) {
    filters.classList.toggle('show-filters--active');
    if (filters.classList.contains('show-filters--active')) {
        showFilters.innerHTML = 'Скрыть фильтры';
    }
    else {
        showFilters.innerHTML = 'Показать фильтры';
    }
};


let item_1 = document.querySelector('.item1');
let item_2 = document.querySelector('.item2');
let item_3 = document.querySelector('.item3');
let wrapper = document.querySelector('.services__wrapper');
if (wrapper) {
    window.onload = function () {
        if (window.pageYOffset >= (wrapper.getBoundingClientRect().top)) {
            item_1.style.display = 'block';
            item_2.style.display = 'block';
            item_3.style.display = 'block';
        }
        else if (window.pageYOffset < (wrapper.getBoundingClientRect().top + 60)) {
            window.addEventListener('scroll', (Event) => {
                if (window.pageYOffset >= (wrapper.getBoundingClientRect().top + 60)) {
                    item_1.style.display = 'block';
                    item_1.classList.add('services-animation-item1');
                    item_2.style.display = 'block';
                    item_2.classList.add('services-animation-item2');
                    item_3.style.display = 'block';
                    item_3.classList.add('services-animation-item3');
                }
            });
        }
    }
}


let contentMore = document.querySelectorAll('.content-more');
let btnInfoShow = document.querySelectorAll('.btn-infoshow');
let btnInfoHidde = document.querySelectorAll('.btn-infohidde');


if (btnInfoShow.length != 0) {
    for (let i = 0; i < btnInfoShow.length; i++) {
        btnInfoShow[i].addEventListener('click', (Event) => {
            contentMore[i].classList.toggle('content-more--active');
            btnInfoShow[i].style.display = 'none';
            btnInfoHidde[i].style.display = 'block';
        });

        btnInfoHidde[i].addEventListener('click', (Event) => {
            contentMore[i].classList.toggle('content-more--active');
            btnInfoShow[i].style.display = 'block';
            btnInfoHidde[i].style.display = 'none';
        });
    }
}

let filtersTasteParent = document.querySelector('.filters__wrapper-sweety');
let filtersTaste = document.querySelectorAll('.product-content');

if (filtersTasteParent) {
    filtersTasteParent.addEventListener('click', (Event) => {

        if (Event.target.classList.contains('filters-label__taste')) {
            for (let i = 0; i < filtersTaste.length; i++) {
                if (Event.target.id == filtersTaste[i].getAttribute('data-id')) {
                    filtersTaste[i].setAttribute('clicked', 'true');
                    filtersTaste[i].classList.toggle('product-content--active');
                    filtersTaste[i].classList.add('product-animation');
                }

                if (Event.target.id != filtersTaste[i].getAttribute('data-id')) {
                    filtersTaste[i].removeAttribute('clicked');

                    filtersTaste[i].classList.add('hidde');
                }
            }
        }
    });
}

let titleColor = document.querySelector('.title-color .btn-minus');
let titleColorContent = document.querySelector('.filters__wrapper-color');

if (titleColor) {
    titleColor.addEventListener('click', (Event) => {
        titleColorContent.classList.add('filter-animation');
        titleColor.classList.toggle('btn-minus--active');
        if (titleColor.classList.contains('btn-minus--active')) {
            titleColor.innerHTML = ' <img src="/images/filters-plus-btn.jpg" alt="button plus">';
        }
        else {
            titleColor.innerHTML = '<img src="/images/filters-minus-btn.jpg" alt="button minus">';
        }
        titleColorContent.classList.toggle('hidde');
    });
}



let titleSweety = document.querySelector('.title-sweety .btn-minus');
let titleSweetyContent = document.querySelector('.filters__wrapper-sweety');

if (titleSweety) {
    titleSweety.addEventListener('click', (Event) => {
        titleSweetyContent.classList.add('filter-animation');
        titleSweety.classList.toggle('btn-minus--active');
        if (titleSweety.classList.contains('btn-minus--active')) {
            titleSweety.innerHTML = ' <img src="/images/filters-plus-btn.jpg" alt="button plus">';
        }
        else {
            titleSweety.innerHTML = '<img src="/images/filters-minus-btn.jpg" alt="button minus">';
        }
        titleSweetyContent.classList.toggle('hidde');
    });
}


let titlePrice = document.querySelector('.title-price .btn-minus');
let titlePriceContent = document.querySelector('.filters__wrapper-price');

if (titlePrice) {
    titlePrice.addEventListener('click', (Event) => {
        titlePriceContent.classList.add('filter-animation');
        titlePrice.classList.toggle('btn-minus--active');
        if (titlePrice.classList.contains('btn-minus--active')) {
            titlePrice.innerHTML = ' <img src="/images/filters-plus-btn.jpg" alt="button plus">';
        }
        else {
            titlePrice.innerHTML = '<img src="/images/filters-minus-btn.jpg" alt="button minus">';
        }
        titlePriceContent.classList.toggle('hidde');
    });
}


let header = document.querySelector('.header');
let copyrightLink = document.querySelector('.copyright');

if (copyrightLink) {
    copyrightLink.addEventListener('click', () => {
        header.scrollIntoView({ block: "center", behavior: "smooth" });
    });
}
