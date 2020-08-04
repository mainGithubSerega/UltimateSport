window.addEventListener('scroll', function(){
    const header = document.querySelector('.header-bottom')
    if(document.documentElement.scrollTop > 200){
        header.classList.add('header-fixed')
    } else {
        header.classList.remove('header-fixed')
    }
});
function addClass(selList, selBurger){
    const list = document.querySelector(selList),
          burger = document.querySelector(selBurger)

    burger.addEventListener('click', function(){
        this.classList.toggle('active')
        list.classList.toggle('active')
    })
}
addClass('.header-bottom__nav', '.header-bottom__burger')
;
const slider = (slides, prew, next) => {
    let index = 1
    const items = document.querySelectorAll(slides),
          prewBtn = document.querySelector(prew),
          nextBtn = document.querySelector(next);
    
    function showSlides (n){
        if(n > items.length){
            index = 1
        }
        
        if(n < 1){
            index = items.length
        }

        items.forEach(item => {
            item.style.display = 'none'
        })

        items[index - 1].style.display = 'block'
    }

    showSlides(index)

    function plusSlides(n){
        showSlides(index += n)
    }

    prewBtn.addEventListener('click', (e) => {
        e.preventDefault()
        plusSlides(-1)
    })

    nextBtn.addEventListener('click', (e) => {
        e.preventDefault()
        plusSlides(1)
    })

}
slider('.slider-content', '.arr-next', '.arr-prev');
function timer(id, deadline){
    const getTime = (finishTime) => {
        const t = Date.parse(finishTime) - Date.parse(new Date()),
              seconds = Math.floor((t / 1000) % 60),
              minutes = Math.floor((t / 1000 / 60) % 60),
              hours = Math.floor((t / 1000 / 60 / 60) % 24),
              days = Math.floor((t / 1000 / 60 / 60 / 24))
        
        return {
            'total' : t,
            'seconds' : seconds,
            'minutes' : minutes,
            'hours' : hours,
            'days' : days
        }
    }
    function setClock(selector, finishTime){
        const time = document.querySelector(selector),
              seconds = time.querySelector('.seconds'),
              minutes = time.querySelector('.minutes'),
              hours = time.querySelector('.hours'),
              days = time.querySelector('.days'),
              timeInterval = setInterval(getInterval, 1000)
        

        function getInterval () {
            const t = getTime(finishTime)
            seconds.textContent = zero(t.seconds)
            minutes.textContent = zero(t.minutes)
            hours.textContent = zero(t.hours)
            days.textContent = zero(t.days)
            
            if(t.total <= 0){
                seconds.textContent = '00'
                minutes.textContent = '00'
                hours.textContent = '00'
                days.textContent = '00'
                clearInterval(timeInterval)
            }
        }
    }
    function zero (num) {
        if(num <= 9){
            return '0' + num
        } else {
            return num
        }
    }
    setClock(id, deadline)
}
timer('.slider-content__timer', '2020-08-29');