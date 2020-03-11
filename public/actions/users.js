$(document).ready(function () {
    $.get('http://localhost:3000/users', data => {

        data.forEach(usuario => {
            $('tbody').append(`
            <tr>
                <td>${usuario.nombre.replace(/ñ/g, 'nn')}</td>
                <td>${usuario.apellido.replace(/ñ/g, 'nn')}</td>
                <td>${usuario.correo}</td>
            </tr>
        `)
        });
    })
})

$('form').submit(function (e) {
    e.preventDefault();
    nuevoUsuario();
})

function nuevoUsuario() {
    const nombre = document.querySelector('#nombre_usuario').value;
    const apellido = document.querySelector('#apellido_usuario').value;
    const correo = document.querySelector('#correo_usuario').value;
    const RUT = document.querySelector('#RUT').value;
    const contrasena = document.querySelector('#contrasena_usuario').value;


    const data = {
        nombre,
        apellido,
        correo,
        RUT,
        contrasena
    };

    console.log(data)
    $.post('http://localhost:3000/users', data, (resp, status) => {
        console.log(JSON.stringify(resp), status);
        window.location.href = '/'
    })
}