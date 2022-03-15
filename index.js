const navToggler = document.getElementById('btn');
const nav = document.querySelector('.nav');
const menuTab = document.querySelectorAll(".menu-tab-items")
const menuContent = document.querySelectorAll(".menu-tab-content")
console.log(menuContent);

menuTab[0].addEventListener('click',()=>{
    menuTab[0].classList.add("active")
    menuTab[1].classList.remove('active')
    menuTab[2].classList.remove('active')
    menuContent[0].classList.add("active2")
    menuContent[1].classList.remove("active2")
    menuContent[2].classList.remove("active2")
})
menuTab[1].addEventListener('click',()=>{
    menuTab[1].classList.add("active")
    menuTab[0].classList.remove('active')
    menuTab[2].classList.remove('active')
    menuContent[0].classList.remove("active2")
    menuContent[1].classList.add("active2")
    menuContent[2].classList.remove("active2")
})
menuTab[2].addEventListener('click',()=>{
    menuTab[2].classList.add("active")
    menuTab[1].classList.remove('active')
    menuTab[0].classList.remove('active')
    menuContent[0].classList.remove("active2")
    menuContent[1].classList.remove("active2")
    menuContent[2].classList.add("active2")
})

navToggler.addEventListener('click',toggle)

function toggle(){
    navToggler.classList.toggle('open')
    nav.classList.toggle('active');
}

document.addEventListener('click',function(e){
    if(e.target.closest('.list-op'))
    {
        toggle();
    }
})

window.addEventListener('scroll',function(){
    if(this.pageYOffset>50){
        document.querySelector('.header').classList.add('stickey')
    }
    else{
        document.querySelector('.header').classList.remove('stickey')
    }
})



