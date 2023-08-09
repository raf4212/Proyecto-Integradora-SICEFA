 document.addEventListener("DOMContentLoaded", function() {
        const jsonData = [{
            "Usuario": "ADMS001",
            "Contraseña": "ADMS001",
            "nombre_Empleado": "John Doe",
            "sucursal_Empleado": "Sucursal Central",
            "codigo_empleado": "ADMS001"
        }];

        const usuarioInput = document.getElementById("txtUsuario");
        const codigoEmpleadoInput = document.getElementById("txtCodigoEmpleado");
        const nombreEmpleadoInput = document.getElementById("txtNombreEmpl");
        const sucursalEmpleadoInput = document.getElementById("txtSucursalEmpl");

        if (jsonData.length > 0) {
            const data = jsonData[0];
            usuarioInput.value = data.Usuario;
            codigoEmpleadoInput.value = data.codigo_empleado;
            nombreEmpleadoInput.value = data.nombre_Empleado;
            sucursalEmpleadoInput.value = data.sucursal_Empleado;
        }
    });