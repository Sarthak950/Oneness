const hamburger = document.querySelector('.ham-svg')
const cross     = document.querySelector('.cross-svg') 
const nav       = document.querySelector('.nav-overlay')




hamburger.addEventListener('click', () => {
    hamburger.style.display = 'none';
    cross.style.display = 'block';
    
    nav.classList.add('nav-show')
    nav.classList.remove('nav-hide')

})

cross.addEventListener('click',()=> {

    cross.style.display = 'none';
    hamburger.style.display = 'block'
    nav.classList.remove('nav-show')
    nav.classList.add('nav-hide')

})
