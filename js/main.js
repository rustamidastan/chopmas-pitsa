let s = 0;
let mainCost = document.querySelector('.main-cost-number');
let nonType = document.querySelector('#pitsa-type');
let nonValue = document.querySelector('.non-value');
let modalNonValue = document.querySelector('.modal-non-value');
nonType.addEventListener('click', function () {
    nonValue.textContent = nonType.value;
    for (let i = 0; i < 3; i++) {
        if (nonType.value == nonCosts[i].name) {
            modalNonValue.textContent = nonType.value + " - " + nonCosts[i].cost + "  so'm";
        }
    }
})


let sizeBtns = document.querySelectorAll('.size-btn');
let sizeValue = document.querySelector('.siz-value');
let modalSizeValue = document.querySelector('.modal-siz-value')
sizeBtns.forEach(function (item) {
    item.addEventListener('click', function () {
        sizeBtns.forEach(function (index) {
            index.classList.remove('size-btn-active')
        })
        item.classList.add('size-btn-active');
        sizeValue.textContent = item.textContent;
        for (let i = 0; i < 4; i++) {
            if (item.textContent == sizeCost[i].size) {
                modalSizeValue.textContent = sizeCost[i].name + '(' + item.textContent + ')' + ' - ' + sizeCost[i].cost;
            }
        }
    })
})

let labelWrapperFirst = document.querySelector('.label-wrapper-first');
let ustidaList = document.querySelector('.ustida-list');
{
    let checkboxBtns = labelWrapperFirst.querySelectorAll('input');
    checkboxBtns.forEach(function (item) {
        item.addEventListener('click', function () {
            if (item.checked == true) {
                let listItem = document.createElement('li');
                listItem.textContent = item.value;
                listItem.classList.add('ustida-item')
                ustidaList.appendChild(listItem);
            }
            else {
                let items = document.querySelectorAll('.ustida-item');
                items.forEach(function (index) {
                    if (index.textContent == item.value) {
                        index.classList.add('ustida-item-hide')
                    }
                })
            }
        })
    })
}


let labelWrapperSecond = document.querySelector('.label-wrapper-second');
let qushimchaList = document.querySelector('.qushimcha-list');
{
    let checkboxBtns = labelWrapperSecond.querySelectorAll('input');
    checkboxBtns.forEach(function (item) {
        item.addEventListener('click', function () {
            if (item.checked == true) {
                let listItem = document.createElement('li');
                listItem.textContent = item.value;
                listItem.classList.add('qushimcha-item')
                qushimchaList.appendChild(listItem);
            }
            else {
                let items = document.querySelectorAll('.qushimcha-item');
                items.forEach(function (index) {
                    if (index.textContent == item.value) {
                        index.classList.add('qushimcha-item-hide')
                    }
                })
            }

        })
    })
}




// MODAL 
let modalCloseBtn = document.querySelector('.close-btn');
let modalOpenBtn = document.querySelector('.submit-btn');
let modal = document.querySelector('.modal')
modalOpenBtn.addEventListener('click', function () {
    modal.classList.add('modal-show')
})
modalCloseBtn.addEventListener('click', function () {
    modal.classList.remove('modal-show')
})


// START MODAL 
const nonCosts = [
    {
        name: 'yupqa',
        cost: 10000
    },
    {
        name: 'qalin',
        cost: 10000
    },
    {
        name: 'buxanka',
        cost: 7000
    }
];

const sizeCost = [
    {
        size: '25 cm',
        name: 'Kichik',
        cost: 25000
    },
    {
        size: '30 cm',
        name: "O'rta",
        cost: 30000
    },
    {
        size: '35 cm',
        name: 'Katta',
        cost: 45000
    },
    {
        size: '40 cm',
        name: 'Oilaviy',
        cost: 50000
    }
];

const ustigaCost = [
    {
        name: 'Pomidor',
        cost: 4000
    },
    {
        name: 'Tuzlangan bodring',
        cost: 5000
    },
    {
        name: "Kurka go'shti",
        cost: 10000
    },
    {
        name: "Qo'ziqorin",
        cost: 6000
    },
    {
        name: 'Zaytun',
        cost: 9000
    },
    {
        name: 'Qazi',
        cost: 12000
    }
]

const qushimchaCost = [
    {
        name: 'Achchiq sous',
        cost: 2000
    },
    {
        name: 'Sosiskali bort',
        cost: 7000
    },
    {
        name: 'Rayhon',
        cost: 2000
    }
];

mainCost.textContent = s;