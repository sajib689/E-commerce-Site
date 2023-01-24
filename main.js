// const menuIcon = document.getElementById('menu-icon');
// const menu = document.getElementById('menu');

// menuIcon.addEventListener('click',()=> {
//     if (menu.className === 'open'){
//         menu.classList.remove('open');
//         menu.classList.toggle('bx-x')
//     } else{
//         menu.classList.add('open');
//     }
// })

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
};