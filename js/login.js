let empleados = []; // Initialize an empty array to store the user data

// Fetch user data from the JSON file
fetch("modules/moduloUsuarios/data_Usuario.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(jsondata) {
        empleados = jsondata;
    });

function validar() {
    const txtUser = document.getElementById("txtUser").value;
    const txtPassword = document.getElementById("txtPassword").value;

    const user = empleados.find((usuario) => {
        const usuarioSinNumeros = usuario.Usuario.replace(/[0-9]/g, ""); // Eliminar los números del nombre de usuario
        const txtUserSinNumeros = txtUser.replace(/[0-9]/g, ""); // Eliminar los números del nombre de usuario ingresado

        return (
            usuarioSinNumeros === txtUserSinNumeros &&
            usuario.Contraseña === txtPassword
        );
    });

    if (user) {
        // Redirigir a diferentes páginas según el usuario
        if (txtUser.includes("ADMS")) {
            if (txtUser.includes("ADMS001")) {
                window.location = "main.html";
            } else {
                window.location = "main_1.html";
            }
        } else if (txtUser.includes("EMPL")) {
            window.location = "main_2.html";
        } else {
            // Usuario no válido
            alert("Error, por favor verifica tus datos");
        }
    } else {
        // Inicio de sesión inválido
        alert("Error, por favor verifica tus datos");
    }
}


function volver(){
    window.location="index.html";
}
function informacionEmpresa1(){
    window.location="view_Informacion.html";
}
function informacionEmpresa2(){
    window.location="detalles_Empresa.html";
}
