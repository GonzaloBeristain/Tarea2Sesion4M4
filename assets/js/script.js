$(() => {
    let input = $("input");
    let objetos = new Set();
    let map = new Map();
    
    input.on({
        change: function () {
            let id = $(this).val()
            let objeto = $(this).siblings().val();
            let objetoTachado = $(this).siblings();

            if($(this).is(":checked") && $(this).siblings().val() != ""){
                agregar(id, objeto);
                tachar(objetoTachado)
                mapear(id, objeto)
            } else {
                objetoTachado.css("text-decoration", "none")
                borrar(id)
                borrarMap(id)
            }
        }
    })

    let agregar = (id, objeto) => {
        objetos.add({id, objeto})
        console.log(objetos)
    };

    let tachar = (tarea) => {
        tarea.css("text-decoration", "line-through")
    };

    let borrar = (id) => {
        objetos.forEach((i) => {
            if(i.id === id)
            objetos.delete(i)
        })
        console.log(objetos)
    };

    let mapear = (id, objeto) => {
        map.set(id, objeto)
        console.log(map)
    };

    let borrarMap = (id) => {
        map.forEach((valor, clave) => {
            if(clave === id) {
                map.delete(clave)
            }
            console.log(map)
        })
    }
})