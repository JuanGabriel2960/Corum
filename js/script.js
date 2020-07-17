(function(){
    'use strict';
    document.addEventListener('DOMContentLoaded',function(){
        console.log('Ready!!');

        const sliders = document.querySelectorAll('.slider')

        let index = 0
        window.addEventListener('keydown',function(){
           
            if(event.which==40){
                if (index>3){
                    return
                }
                index++
                sliders.forEach(function(slider,i){
                    slider.classList.remove('on')
                    if(i===index){
                        console.log('baja')
                        slider.classList.add('on')
                        slider.scrollIntoView()
                    }     
                })
            }
            if(event.which==38){
                if (index<1){
                    return
                }
                index--
                sliders.forEach(function(slider,i){
                    slider.classList.remove('on')
                    if(i===index){
                        slider.classList.add('on')
                        slider.scrollIntoView()
                    }
                })
            }
        })

        const openMenu = document.querySelector('.btn-menu')
        const closeMenu = document.querySelector('.menuClose')
        const sidebar = document.querySelector('.sidebar')

        openMenu.addEventListener('click',function(){
            sidebar.classList.add('show')
        })
        closeMenu.addEventListener('click',function(){
            sidebar.classList.remove('show')
        })
    });
})();