
const icon = document.querySelectorAll('.icons')
const menu = document.querySelectorAll('.menu-style ')
const navbar = document.querySelector('.navbar')


// Navbar Code >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function NavMenu() {
icon.forEach((icons)=>{
    // Enter Event >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
icons.addEventListener('mouseenter', ()=>{
const target = icons.getAttribute('icon-index');
menu.forEach((Menus)=>{
const menuData = Menus.getAttribute('menu-data');
if(menuData === target){
    Menus.classList.remove('display-none') 
    Menus.style.height = '135px'
}
else{
    Menus.classList.add('display-none')
}
    })
})

// Leave Event >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
navbar.addEventListener('mouseleave', ()=>{
menu.forEach((Menus)=>{
    Menus.classList.add('display-none')
})

})

})
}
NavMenu();
// Navbar Code >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let moon = document.querySelector('.moon')
let settingIcon = document.querySelector('.icon-setting')
let sun = document.querySelector('.sun')
let xmark = document.querySelector('.icon-x')
// DARK MODE THEME CODE>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function darkTheme() {

    moon.addEventListener("click", () => {
        document.body.classList.add('dark-theme')
        document.querySelector('#page1').style.backgroundColor = 'unset'
        document.querySelector('#page3').style.backgroundColor = 'unset'
        moon.classList.add('display-active')
        sun.classList.remove('display-active')
    })
    sun.addEventListener('click', () => {
        sun.classList.add('display-active')
        moon.classList.remove('display-active')
        document.body.classList.remove('dark-theme')
        document.querySelector('#page1').style.backgroundColor = 'rgb(241, 235, 231)'
        document.querySelector('#page3').style.backgroundColor = 'rgb(241, 235, 231)'
    })

    settingIcon.addEventListener('click', () => {
        document.querySelector('.theme-menu').classList.add('menu-trans')
        settingIcon.classList.add('display-active')
        xmark.classList.remove('display-active')

    })

    xmark.addEventListener('click', () => {
        document.querySelector('.theme-menu').classList.remove('menu-trans')
        settingIcon.classList.remove('display-active')
        xmark.classList.add('display-active')
    })
}
darkTheme();
// DARK MODE THEME CODE>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let img = document.querySelectorAll('.container-img')
let con = document.querySelector('.row-container')


const containers = document.querySelectorAll('.row-container');
const images = document.querySelectorAll('.container-img');

function ImagesFunc() {
 containers.forEach((container)=>{

        container.addEventListener('mouseenter', ()=>{
            const target = container.getAttribute('data-target')
            images.forEach((img)=>{
                const imgdata = img.getAttribute('data-img');
          if( imgdata === target){
            img.style.display = 'block';
          }
          else{
            img.style.display = 'none';
          }
            })
        })

        container.addEventListener("mouseleave", ()=>{
            images.forEach((img)=>{
                img.style.display = 'none';
            })
        })

    })
    
}
ImagesFunc();

// responsive sidebar >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const openBar = document.querySelector('.menu');
let Sidebar = document.querySelector('.side-bar');
let arrow = document.querySelector('.up-arrow')

function ResponSidebar () {

 openBar.addEventListener('click', ()=>{
        Sidebar.style.transform = `translateY(0px)`
        arrow.style.transform = `translateY(0px)`
        
})
arrow.addEventListener('click', ()=>{
    Sidebar.style.transform = `translateY(-416px)`
    arrow.style.transform = `translateY(-416px)`
})
}

ResponSidebar();