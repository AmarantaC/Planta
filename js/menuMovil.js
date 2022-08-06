(function () {

    /*------Propiedades de menu movil-----*/
    
    const promenu = {
        burger_menu: document.getElementById('burger_menu'),
        slide_menu: document.getElementById('slideMenu'),
        menu_activo: false,
        elem_menu: document.querySelectorAll('#slideMenu .menu a')
    }
    
    /*-------Métodos de menu movil--------*/
    
    let metmenu = {
        inicio: function () {
            promenu.burger_menu.addEventListener('click', metmenu.toggleMenu);
    
            for (let i = 0; i < promenu.elem_menu.length; i++) {
                promenu.elem_menu[i].addEventListener('click', metmenu.ocultarMenu);
            }
        },
    
        toggleMenu: function () {
            if (promenu.menu_activo == false) {
                promenu.menu_activo = true;
                promenu.slide_menu.className = promenu.slide_menu.className + ' active';
            } else{
                promenu.menu_activo = false;
                promenu.slide_menu.className = promenu.slide_menu.className.replace('active', '');
            }
        },
    
        ocultarMenu: function () {
            promenu.menu_activo = false;
            promenu.slide_menu.className = promenu.slide_menu.className.replace('active', '');
        }
    }
    
    metmenu.inicio();
    
    }())