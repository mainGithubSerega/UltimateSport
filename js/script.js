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