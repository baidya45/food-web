const navToggler = document.getElementById('btn');
const nav = document.querySelector('.nav');

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



