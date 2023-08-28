const slider = document.querySelector(".items__slider-inner")
const sliderValue = document.querySelector(".items__slider-input")

let cart = 0
const cartText = document.querySelector('.request__discount-count')

noUiSlider.create(slider, {
    start: 0,
    connect: false,
    tooltips: [true],
    step: 1,
    range: {
        'min': 0,
        'max': 15
    },
    format: {
        from: function(value) {
            return parseInt(value);
        },
        to: function(value) {
            return parseInt(value);
        }
    }
})
slider.noUiSlider.on('update', function(value) {
    sliderValue.value = value
})

const squareSlider = document.querySelector(".square__slider-inner")
const squareValue = document.querySelector(".square__input-hide")
const squareText = document.querySelector(".square__input-text")

noUiSlider.create(squareSlider, {
    start: 10,
    connect: false,
    step: 1,
    range: {
        'min': 10,
        'max': 400
    },
    format: {
        from: function(value) {
            return parseInt(value);
        },
        to: function(value) {
            return parseInt(value);
        }
    }
})

squareSlider.noUiSlider.on('update', function(value) {
    squareValue.value = value
    squareText.textContent = `${value} кв. м`
})



// ------- Navigation ------- //
const background = document.querySelectorAll('.background__image')
const nextBtns = document.querySelectorAll('.footer__next')
const prevBtns = document.querySelectorAll('.footer__prev')
const stepCounter = document.querySelector('.footer__step')

const footer = document.querySelector('.footer')
const screen = {
    main: {
        el: document.querySelector('.main'),
        background: background[0]
    },
    service: {
        el: document.querySelector('.service'),
        background: background[1],
        nextBtn: nextBtns[0],
        prevBtn: prevBtns[0]
    },
    optionsFirst: {
        el: document.querySelector('.options__first'),
        background: background[2],
        nextBtn: nextBtns[1],
        prevBtn: prevBtns[1]
    },
    optionsSecond: {
        el: document.querySelector('.options__second'),
        background: background[3],
        nextBtn: nextBtns[2],
        prevBtn: prevBtns[2]
    },
    items: {
        el: document.querySelector('.items'),
        background: background[4],
        nextBtn: nextBtns[3],
        prevBtn: prevBtns[3]
    },
    special: {
        el: document.querySelector('.special'),
        background: background[5],
        nextBtn: nextBtns[4],
        prevBtn: prevBtns[4]
    },
    previously: {
        el: document.querySelector('.previously'),
        background: background[6],
        nextBtn: nextBtns[5],
        prevBtn: prevBtns[5]
    },
    square: {
        el: document.querySelector('.square'),
        background: background[7],
        nextBtn: nextBtns[6],
        prevBtn: prevBtns[6]
    },
    request: {
        el: document.querySelector('.request'),
        background: background[8]
    },
    specialCleaning: {
        el: document.querySelector('.special__cleaning'),
        background: background[9],
        nextBtn: nextBtns[7],
        prevBtn: prevBtns[7]
    }
}

const setScreen = (el) => {
    for(let prop in screen) {
        screen[prop].el.classList.add('hidden')
        screen[prop].background.classList.remove('active')
        if(screen[prop].nextBtn && screen[prop].prevBtn) {
            screen[prop].nextBtn.classList.remove('active')
            screen[prop].prevBtn.classList.remove('active')
        }

    }
    screen[el].el.classList.remove('hidden')
    screen[el].background.classList.add('active')
    if(screen[el].nextBtn && screen[el].prevBtn) {
        screen[el].nextBtn.classList.add('active')
        screen[el].prevBtn.classList.add('active')
    }


    if(el === 'main' || el === 'request') {
        footer.classList.add('hidden')
    } else {
        footer.classList.remove('hidden')
    }
}

setScreen("main")
footer.classList.add('hidden')

const mainBtn = document.querySelector('.main__btn')
mainBtn.addEventListener('click', () => {
    setScreen("service")
    footer.classList.remove('hidden')
})

// ----- Service ----- //
const serviceList = document.querySelector('.service__list')
const serviceListItems = serviceList.querySelectorAll('.list__input')

let selectedService = []

for(let i = 0; i < serviceListItems.length; i++) {
    serviceListItems[i].addEventListener('click', () => {
        serviceListItems.forEach(el => {
            el.value = 0
            el.checked = false
        })
        serviceListItems[i].checked = true
        serviceListItems[i].value = 1

        selectedService = Array.from(serviceListItems).map(el => el.value)
        console.log(selectedService);
    })
}

// ---- Options first ----- //
const optionsFirstList = screen.optionsFirst.el.querySelector('.list')
const optionsFirstItems = optionsFirstList.querySelectorAll('.list__input')
let selectedOptionsFirst = []

for(let i = 0; i < optionsFirstItems.length; i++) {
    optionsFirstItems[i].addEventListener('click', () => {
        optionsFirstItems.forEach(el => {
            el.value = 0
            el.checked = false
        })
        optionsFirstItems[i].checked = true
        optionsFirstItems[i].value = 1

        selectedOptionsFirst = Array.from(optionsFirstItems).map(el => el.value)
        console.log(selectedOptionsFirst);
    })
}

// ---- Special ----- //
const specialList = screen.special.el.querySelector('.list')
const specialItems = specialList.querySelectorAll('.list__input')
let selectedSpecial = []

for(let i = 0; i < specialItems.length; i++) {
    specialItems[i].value = "0"
    specialItems[i].addEventListener('click', () => {

        specialItems[i].value = specialItems[i].value === "1" ? "0" : "1"

        selectedSpecial = Array.from(specialItems).map(el => el.value)
        console.log(selectedSpecial);
    })
}


// ---- Special Cleaning ----- //
const specialCleaninglList = screen.specialCleaning.el.querySelector('.list')
const specialCleaningItems = specialCleaninglList.querySelectorAll('.list__input')
let selectedSpeciaCleaning = []

for(let i = 0; i < specialCleaningItems.length; i++) {
    specialCleaningItems[i].value = "0"
    specialCleaningItems[i].addEventListener('click', () => {

        specialCleaningItems[i].value = specialCleaningItems[i].value === "1" ? "0" : "1"

        selectedSpeciaCleaning = Array.from(specialCleaningItems).map(el => el.value)
        console.log(selectedSpeciaCleaning);
    })
}


// ---- Options second ----- //
const optionsSecondList = screen.optionsSecond.el.querySelector('.list')
const optionsSecondItems = optionsSecondList.querySelectorAll('.list__input')
let selectedOptionsSecond = []

for(let i = 0; i < optionsSecondItems.length; i++) {
    optionsSecondItems[i].addEventListener('click', () => {
        optionsSecondItems.forEach(el => {
            el.value = 0
            el.checked = false
        })
        optionsSecondItems[i].checked = true
        optionsSecondItems[i].value = 1

        selectedOptionsSecond = Array.from(optionsSecondItems).map(el => el.value)
        console.log(selectedOptionsSecond);
    })
}

// ---- Previously ----- //
const previouslyList = screen.previously.el.querySelector('.list')
const previouslyItems = previouslyList.querySelectorAll('.list__input')
let selectedPreviously = []

for(let i = 0; i < previouslyItems.length; i++) {
    previouslyItems[i].value = "0"
    previouslyItems[i].addEventListener('click', () => {

        previouslyItems[i].value = previouslyItems[i].value === "1" ? "0" : "1"

        selectedPreviously = Array.from(previouslyItems).map(el => el.value)
        console.log(selectedPreviously);
    })
}

// ---- Items ----- //
const itemsList = screen.items.el.querySelector('.items__container')
const itemsItems = itemsList.querySelectorAll('.list__input')
let selectedItems = []

for(let i = 0; i < itemsItems.length; i++) {
    itemsItems[i].value = "0"
    itemsItems[i].addEventListener('click', () => {

        itemsItems[i].value = itemsItems[i].value === "1" ? "0" : "1"

        selectedItems = Array.from(itemsItems).map(el => el.value)
        console.log(selectedItems);
    })
}

// ----- Steps ----- //

screen.service.nextBtn.addEventListener('click', () => {
    if(selectedService.length) {
        const selectedId = selectedService.indexOf("1")
        switch (selectedId) {
            case 0:
                setScreen('optionsFirst')
                stepCounter.textContent = '1/3'
                break
            case 1:
                setScreen('square')
                stepCounter.textContent = '1/1'
                break
            case 2:
                setScreen('optionsSecond')
                stepCounter.textContent = '1/2'
                break
            case 3:
                setScreen('items')
                stepCounter.textContent = '1/2'
                break
        }
        stepCounter.classList.add('active')
    }
})
screen.service.prevBtn.addEventListener('click', () => {
    setScreen('main')
})


screen.optionsFirst.nextBtn.addEventListener('click', () => {
    if(selectedOptionsFirst.length) {
        setScreen('special')
        stepCounter.textContent = '2/3'
    }
})
screen.optionsFirst.prevBtn.addEventListener('click', () => {
    setScreen('service')
    stepCounter.classList.remove('active')
})


screen.special.nextBtn.addEventListener('click', () => {
    setScreen('square')
    stepCounter.textContent = '3/3'
})
screen.special.prevBtn.addEventListener('click', () => {
    setScreen('optionsFirst')
    stepCounter.textContent = '1/3'
})


screen.square.nextBtn.addEventListener('click', () => {
    if(selectedService.indexOf("1") === 0) {
        if(+selectedOptionsFirst[0] === 1) {
            cart += 4
            console.log("ok")
        }
        if(+selectedOptionsFirst[1] === 1) cart += 6
        if(+selectedSpecial[0] === 1) cart += cart / 100 * 10
        if(+selectedSpecial[1] === 1) cart += cart / 100 * 20
        if(+selectedSpecial[2] === 1) cart += cart / 100 * 15
    }


    if(selectedService.indexOf("1") === 1) {
        cart += 6
    }

    if(selectedService.indexOf("1") === 2) {
        if(+selectedOptionsSecond[0] === 1) cart += 8
        if(+selectedOptionsSecond[1] === 1) cart += 4
        if(+selectedOptionsSecond[2] === 1) cart += 5
        if(+selectedOptionsSecond[3] === 1) cart += 3

        if(+selectedPreviously[0] === 1) cart += cart / 100 * 30
        if(+selectedPreviously[1] === 1) cart += cart / 100 * 20
        if(+selectedPreviously[2] === 1) cart += cart / 100 * 20
    }

    if(selectedService.indexOf("1") === 3) {
        if(+selectedItems[0] === 1) cart += 0
        if(+selectedItems[1] === 1) cart += 0
        if(+selectedItems[2] === 1) cart += 0
        if(+selectedItems[3] === 1) cart += 0
        if(+selectedItems[4] === 1) cart += 0
        if(+selectedItems[5] === 1) cart += 0
        if(+selectedItems[6] === 1) cart += 0
        if(+selectedItems[7] === 1) cart += 0

        cart += +sliderValue.value * 20

        if(+selectedSpeciaCleaning[0] === 1) cart += cart / 100 * 20
        if(+selectedSpeciaCleaning[1] === 1) cart += cart / 100 * 20
        if(+selectedSpeciaCleaning[2] === 1) cart += cart / 100 * 40 // 30-50
    }


    cart = Math.round(cart * +squareValue.value)
    cartText.textContent = `${cart} ЛЕВА`

    console.log(cart, +squareValue.value);
    setScreen('request')
})
screen.square.prevBtn.addEventListener('click', () => {
    if(selectedService.indexOf("1") === 0) {
        setScreen('special')
        stepCounter.textContent = '2/3'
    }
    if(selectedService.indexOf("1") === 1) {
        setScreen('service')
        stepCounter.classList.remove('active')
    }
})


screen.optionsSecond.nextBtn.addEventListener('click', () => {
    if(selectedOptionsSecond.length) {
        setScreen('previously')
        stepCounter.textContent = '2/2'
    }
})
screen.optionsSecond.prevBtn.addEventListener('click', () => {
    setScreen('service')
    stepCounter.classList.remove('active')
})


screen.previously.nextBtn.addEventListener('click', () => {
    if (selectedPreviously.length) {
        setScreen('request')
    }
})
screen.previously.prevBtn.addEventListener('click', () => {
    setScreen('optionsSecond')
    stepCounter.textContent = '1/2'
})


screen.items.nextBtn.addEventListener('click', () => {
    if(selectedItems.length) {
        setScreen('specialCleaning')
        stepCounter.textContent = '2/2'
    }
})
screen.items.prevBtn.addEventListener('click', () => {
    setScreen('service')
    stepCounter.classList.remove('active')
})


screen.specialCleaning.nextBtn.addEventListener('click', () => {
    setScreen('request')
})
screen.specialCleaning.prevBtn.addEventListener('click', () => {
    setScreen('items')
    stepCounter.textContent = '1/2'
})