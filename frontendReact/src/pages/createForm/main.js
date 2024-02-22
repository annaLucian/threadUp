document.addEventListener('DOMContentLoaded', function () {
    var formulario = document.getElementById('Contacto');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe de forma convencional

        // Obtener datos del formulario
        const name = document.getElementById('name').value;
        const categoria = document.getElementById('categoria').value;
        const genero = document.getElementById('genero').value;
        const imagen = document.getElementById('imagen').value;
        const talla = document.getElementById('talla').value;
        const precio = document.getElementById('precio').value;
        const ubicacion = document.getElementById('ubicacion').value;
        const descripcion = document.getElementById('descripcion').value;

 
})

       // Puedes hacer algo con los datos aquí, como imprimirlos en la consola
        console.log('nombre', name);
        console.log('categoria', categoria);
        console.log('genero',  genero);
        console.log('imagen', imagen );
        console.log('talla', talla);
        console.log('precio', precio);
        console.log('ubicacion', ubicacion);
        console.log('descripcion', descripcion);
    });


// inicio form
function send() { 
    swal ('✅ Fomulario enviado correctamente');
 }
 
 function sendEnglish() { 
    swal ('✅ Form submitted successfully');
 }
 // fin form
 