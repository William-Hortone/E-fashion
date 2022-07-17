const navbarButton = document.querySelector('.navbar_header_button');
const navbar = document.querySelector('.navbar_container');
const main = document.querySelector('.main');
const cursor = document.querySelector('.cursor');
const sendBtn = document.getElementById('button_send');
const catalogueBtn = document.querySelectorAll('.button_catalogue');
// const imagesBox = document.querySelectorAll('.catalogue_box');
const homeImagesBox1 = document.querySelectorAll('.colection_images_box');
const homeImagesBox2 = document.querySelectorAll('.home_images_content');
const preloader = document.querySelector('.preloader_container');
const body = document.body;

let containerHide = document.querySelectorAll('.hider')

containerHide.forEach(item =>{
    item.classList.add('displa_containers')
})
console.log(preloader)
window.addEventListener('load', ()=>{
    preloader.classList.add('hide_preloader');
    body.classList.add('display_body');
})
function cursorPosition (e) {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
};
window.addEventListener('mousemove', cursorPosition);

homeImagesBox1.forEach(homeImg =>{
    homeImg.addEventListener('mouseover',()=>{
        cursor.classList.add('cursor_hover');
    });
    homeImg.addEventListener('mouseleave', ()=>{
        cursor.classList.remove('cursor_hover');
    });
});
homeImagesBox2.forEach(homeImg2 =>{
    homeImg2.addEventListener('mouseover',()=>{
        cursor.classList.add('cursor_hover');
    });
    homeImg2.addEventListener('mouseleave', ()=>{
        cursor.classList.remove('cursor_hover');
    });
});
navbarButton.addEventListener('click',() =>{
    navbar.classList.toggle('show_nav');
    navbarButton.classList.toggle('show_nav');
    main.classList.toggle('show_nav');
   
});
navbarButton.addEventListener('mouseover', ()=>{
    cursor.classList.add('cursor_hover')
    navbarButton.classList.add('navbar_button_hover')
})

navbarButton.addEventListener('mouseleave', ()=>{
    cursor.classList.remove('cursor_hover')
})

catalogueBtn.forEach(btnCatalogue =>{
    btnCatalogue.addEventListener('mouseover',()=>{
        cursor.classList.add('cursor_hover');
    });
    btnCatalogue.addEventListener('mouseleave', ()=>{
        cursor.classList.remove('cursor_hover');
    });
});
sendBtn.addEventListener('mouseover', ()=>{
    cursor.classList.add('cursor_hover')
   
})

sendBtn.addEventListener('mouseleave', ()=>{
    cursor.classList.remove('cursor_hover')
})


// imagesBox.forEach(imgBox =>{
//     imgBox.addEventListener('mouseover', ()=>{
//         cursor.classList.add('cursor_hover');
//     })
//     imgBox.addEventListener('mouseleave', ()=>{
//         cursor.classList.remove('cursor_hover');
//     })
// })
