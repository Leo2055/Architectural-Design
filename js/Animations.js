var enlaces = document.getElementsByClassName('options');
    for(var i=0; i < elements.length; i++){
        elements[i].addEventListener('click',function(){
            this.classList.toggle('Activo');
        })
    }
/*
enlaces.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        evento.preventDefault();
        enlaces.forEach((enlaces) => enlaces.classList.remove('Activo'))
        evento.target.classList.add('Activo');
    })
})*/