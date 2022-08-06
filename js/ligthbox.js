(function () {

    /*---------Objeto con las propiedades de la galería-------*/
    
    var propLightbox = {
    
        imgContainer: document.querySelectorAll('#te .lightbox'),
        imagen: null,
        cuerpoDom: document.querySelector('body'),
        imagenSrc: null,
        lightbox: null,
        modal: null,
        cerrarModal: null,
        animacion: 'fade'
    
    }
        
    /*---------Objeto con los métodos de la galería-------*/
    
    var metLightbox = {
    
        inicio: function () {
            for (var i = 0; i < propLightbox.imgContainer.length; i++) {
                propLightbox.imgContainer[i].addEventListener('click', metLightbox.capturaImagen);
            }
        },
    
        capturaImagen: function(e){
            propLightbox.imagen = e.target.parentElement;
            metLightbox.lightbox(propLightbox.imagen);
        },
    
        lightbox: function (imagen) {
            propLightbox.imagenSrc = window.getComputedStyle(imagen, null).backgroundImage.slice(5, -2);
    
            propLightbox.cuerpoDom.appendChild(document.createElement('DIV')).setAttribute('id', 'lightbox_container');
            propLightbox.lightbox = document.getElementById('lightbox_container');
    
            propLightbox.lightbox.style.width = '100%';
            propLightbox.lightbox.style.height = '100%';
            propLightbox.lightbox.style.position = 'fixed';
            propLightbox.lightbox.style.zIndex = '1000';
            propLightbox.lightbox.style.background = 'rgba(0,0,0,0.8)';
            propLightbox.lightbox.style.top = 0;
            propLightbox.lightbox.style.left = 0;
    
            propLightbox.lightbox.appendChild(document.createElement('DIV')).setAttribute('id', 'modal');
            propLightbox.modal = document.getElementById('modal');
            propLightbox.modal.style.height = '100%';
    
            propLightbox.modal.appendChild(document.createElement('IMG')).setAttribute('src', propLightbox.imagenSrc);
            propLightbox.modal.getElementsByTagName('img')[0].setAttribute('class', 'imagen-modal');
        
            propLightbox.modal.innerHTML += '<i id="cerrar_modal" class="fa fa-times" aria-hidden="true"></i>';
            propLightbox.cerrarModal = document.getElementById('cerrar_modal');
            propLightbox.cerrarModal.addEventListener('click', metLightbox.cerrarModal);
    
        },
    
        cerrarModal: function(){
            propLightbox.cuerpoDom.removeChild(propLightbox.lightbox);
        }
    
    }
    
    metLightbox.inicio();
    
    
    }())