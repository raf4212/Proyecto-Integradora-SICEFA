let indexEmpleadoSeleccionado;
let empleados = [];
let rutaImagenSeleccionada = "";


export function añadirEmpl() {
    let numero_unico_empleado,
        nombre,
        apellido_paterno,
        apellido_materno,
        genero,
        rfc,
        telefono,
        telefono_movil,
        correo_electronico,
        fecha_nacimiento,
        curp,
        domicilio,
        ciudad,
        estado,
        codigo_postal,
        fecha_ingreso,
        puesto_laboral,
        salario_mensual,
        codigo_empleado,
        sucursal_empleado;
        

         let usuario = "";
            if (puesto_laboral === "Gerente") {
                usuario = "ADMS" + numero_unico_empleado;
            } else if (puesto_laboral === "Atención a Cliente") {
                usuario = "EMPS" + numero_unico_empleado;
            }

    numero_unico_empleado = document.getElementById("txtCodigoEmpl").value;
    nombre = document.getElementById("txtNombreEmpl").value;
    apellido_paterno = document.getElementById("txtApellP").value;
    apellido_materno = document.getElementById("txtApellM").value;
    genero = document.getElementById("txtGenero").value;
    rfc = document.getElementById("txtRfc").value;
    telefono = document.getElementById("txtTelefono").value;
    telefono_movil = document.getElementById("txtMovil").value;
    correo_electronico = document.getElementById("txtCorreo").value;
    fecha_nacimiento = document.getElementById("txtFechaNacimiento").value;
    curp = document.getElementById("txtCurp").value;
    domicilio = document.getElementById("txtDomicilio").value;
    ciudad = document.getElementById("txtCiudad").value;
    estado = document.getElementById("txtEstado").value;
    codigo_postal = document.getElementById("txtCodigoPostal").value;
    fecha_ingreso = document.getElementById("txtFechaIngreso").value;
    puesto_laboral = document.getElementById("txtPuestoLaboral").value;
    salario_mensual = document.getElementById("txtSalarioMensual").value;
    codigo_empleado = document.getElementById("").value;
    sucursal_empleado = document.getElementById("txtSucursalEmpleado").value;
    
    
//    let usuario = (puesto_laboral === "AtencionCliente") ? `EMPS${numero_unico_empleado}` : `ADMS${numero_unico_empleado}`;
//    let contraseña = numero_unico_empleado;

    let empleado = {
        numero_unico_empleado,
        nombre,
        apellido_paterno,
        apellido_materno,
        genero,
        rfc,
        telefono,
        telefono_movil,
        correo_electronico,
        fecha_nacimiento,
        curp,
        domicilio,
        ciudad,
        estado,
        codigo_postal,
        fecha_ingreso,
        puesto_laboral,
        salario_mensual,
        codigo_empleado,
        sucursal_empleado,
        ruta_imagen: rutaImagenSeleccionada,
        usuario,        
        contraseña: usuario,
        estatus: "Activo"
    };
    
    empleados.push(empleado);
//    enviarCorreoNuevoEmpleado(correo_electronico, usuario, contraseña);
    limpiar();
    cargarTabla();
    
    
}

export function cargarTabla() {
    let cuerpo = "";
    empleados.forEach(function (empleado) {
        let registro =
            '<tr onclick="moduloEmpleado.selectEmpleado(' + empleados.indexOf(empleado) + ');">' +
             '<td>' + empleado.codigo_empleado + '</td>' +
              '<td>' + empleado.nombre + '</td>' +
            '<td>' + empleado.apellido_paterno + ' ' + empleado.apellido_materno + '</td>' +
            '<td>' + empleado.genero + '</td>' +
        '<td>' + empleado.telefono + '</td>' +
            '<td>' + empleado.telefono_movil + '</td>' +
            '<td>' + empleado.estatus + '</td>' +
        '<td>' + empleado.rfc + '</td>' +
        '<td>' + empleado.correo_electronico + '</td>' +
        '<td>' + empleado.fecha_nacimiento + '</td>' +
        '<td>' + empleado.curp + '</td>' +
        '<td>' + empleado.domicilio + '</td>' +
        '<td>' + empleado.ciudad + '</td>' +
        '<td>' + empleado.estado + '</td>' +
        '<td>' + empleado.codigo_postal + '</td>' +
        '<td>' + empleado.fecha_ingreso + '</td>' +
        '<td>' + empleado.puesto_laboral + '</td>' +
        '<td>' + empleado.salario_mensual + '</td>' +
        '<td>' + empleado.usuario + '</td>' +
        '<td>' + empleado.sucursal_empleado+ '</td></tr>' ;
            
        cuerpo += registro;
    });
    document.getElementById("tblEmpleado").innerHTML = cuerpo;
}

export function selectEmpleado(index) {
    
    document.getElementById("txtNombreEmpl").value = empleados[index].nombre;
    document.getElementById("txtApellP").value = empleados[index].apellido_paterno;
    document.getElementById("txtApellM").value = empleados[index].apellido_materno;
    document.getElementById("txtTelefono").value = empleados[index].telefono;
    document.getElementById("txtMovil").value = empleados[index].telefono_movil;
    document.getElementById("txtCorreo").value = empleados[index].correo_electronico;
    document.getElementById("txtRfc").value = empleados[index].rfc;
    document.getElementById("txtGenero").value = empleados[index].genero;
    document.getElementById("txtFechaNacimiento").value = empleados[index].fecha_nacimiento;
    document.getElementById("txtCurp").value = empleados[index].curp;
    document.getElementById("txtDomicilio").value = empleados[index].domicilio;
    document.getElementById("txtCiudad").value = empleados[index].ciudad;
    document.getElementById("txtEstado").value = empleados[index].estado;
    document.getElementById("txtCodigoPostal").value = empleados[index].codigo_postal;
    document.getElementById("txtFechaIngreso").value = empleados[index].fecha_ingreso;
    document.getElementById("txtPuestoLaboral").value = empleados[index].puesto_laboral;
    document.getElementById("txtSalarioMensual").value = empleados[index].salario_mensual;
    document.getElementById("txtCodigoEmpleado").value = empleados[index].codigo_empleado;
    document.getElementById("txtSucursalEmpleado").value = empleados[index].sucursal_empleado;
    document.getElementById("txtUsuario").value = empleados[index].usuario;
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    
    indexEmpleadoSeleccionado = index;
}

export function limpiar() {
   
    document.getElementById("txtNombreEmpl").value = "";
    document.getElementById("txtUsuario").value = "";
    document.getElementById("txtApellP").value = "";
    document.getElementById("txtApellM").value = "";
    document.getElementById("txtTelefono").value = "";
    document.getElementById("txtMovil").value = "";
    document.getElementById("txtCorreo").value = "";
    document.getElementById("txtRfc").value = "";
    document.getElementById("txtGenero").value = "";
    document.getElementById("txtFechaNacimiento").value = "";
    document.getElementById("txtCurp").value = "";
    document.getElementById("txtDomicilio").value = "";
    document.getElementById("txtCiudad").value = "";
    document.getElementById("txtEstado").value = "";
    document.getElementById("txtCodigoPostal").value = "";
    document.getElementById("txtFechaIngreso").value = "";
    document.getElementById("txtPuestoLaboral").value = "";
    document.getElementById("txtSalarioMensual").value = "";
    document.getElementById("txtCodigoEmpleado").value = "";
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    document.getElementById("txtSucursalEmpleado").value = "";
    rutaImagenSeleccionada="";
    indexEmpleadoSeleccionado = 0;
}

export function actualizarEmpl() {
    
    let numero_unico_empleado,
        nombre,
        apellido_paterno,
        apellido_materno,
        genero,
        rfc,
        telefono,
        telefono_movil,
        correo_electronico,
        fecha_nacimiento,
        curp,
        domicilio,
        ciudad,
        estado,
        codigo_postal,
        fecha_ingreso,
        puesto_laboral,
        salario_mensual,
        sucursal_empleado,
        codigo_empleado;

    numero_unico_empleado = numero_unico_empleado;
    nombre = document.getElementById("txtNombreEmpl").value;
    apellido_paterno = document.getElementById("txtApellP").value;
    apellido_materno = document.getElementById("txtApellM").value;
    genero = document.getElementById("txtGenero").value;
    rfc = document.getElementById("txtRfc").value;
    telefono = document.getElementById("txtTelefono").value;
    telefono_movil = document.getElementById("txtMovil").value;
    correo_electronico = document.getElementById("txtCorreo").value;
    fecha_nacimiento = document.getElementById("txtFechaNacimiento").value;
    curp = document.getElementById("txtCurp").value;
    domicilio = document.getElementById("txtDomicilio").value;
    ciudad = document.getElementById("txtCiudad").value;
    estado = document.getElementById("txtEstado").value;
    codigo_postal = document.getElementById("txtCodigoPostal").value;
    fecha_ingreso = document.getElementById("txtFechaIngreso").value;
    puesto_laboral = document.getElementById("txtPuestoLaboral").value;
    salario_mensual = document.getElementById("txtSalarioMensual").value;
    sucursal_empleado = document.getElementById("txtSucursalEmpleado").value;
    codigo_empleado = document.getElementById("txtCodigoEmpleado").value;
    
    let usuario = "";
    if (puesto_laboral === "Gerente") {
        usuario = "ADMS" + numero_unico_empleado;
    } else if (puesto_laboral === "Atención a Cliente") {
        usuario = "EMPS" + numero_unico_empleado;
    }

    let empleado = {
        numero_unico_empleado,
        nombre,
        apellido_paterno,
        apellido_materno,
        genero,
        rfc,
        telefono,
        telefono_movil,
        correo_electronico,
        fecha_nacimiento,
        curp,
        domicilio,
        ciudad,
        estado,
        codigo_postal,
        fecha_ingreso,
        puesto_laboral,
        salario_mensual,
        codigo_empleado,
        sucursal_empleado,
        estatus: "Activo",
        usuario, 
        contraseña: usuario,
        ruta_imagen: rutaImagenSeleccionada
    };
    empleados[indexEmpleadoSeleccionado] = empleado;
    limpiar();
    cargarTabla();
}

export function eliminarEmpl() {
    empleados[indexEmpleadoSeleccionado].estatus = "Inactivo";
    limpiar();
    cargarTabla();
}

fetch("modules/ModuloRegistroEmpleado/data_Empleados.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(jsondata) {
        empleados = jsondata;
        
        // Agregar el campo "usuario" y "contraseña" a cada empleado en el arreglo
        empleados.forEach(function(empleado) {
            if (empleado.puesto_laboral === "Gerente") {
                empleado.usuario = "ADMS" + empleado.numero_unico_empleado;
            } else if (empleado.puesto_laboral === "Atención a Cliente") {
                empleado.usuario = "EMPS" + empleado.numero_unico_empleado;
            }
            empleado.contraseña = empleado.usuario;
        });

        cargarTabla();
    });
    
export function buscarEmpl(){
    let filtro = document.getElementById("txtBusquedaEmpleado").value;
    let resultados = empleados.filter(element => element.nombre === filtro);
    let cuerpo = "";
    resultados.forEach(function (empleado){
        let registro =  
            '<tr onclick="moduloEmpleado.selectEmpleado('+ empleados.indexOf(empleado) +');">'+
             '<td>' + empleado.numero_unico_empleado + '</td>' +
            '<td>' + empleado.nombre + '</td>' +
            '<td>' + empleado.ApellP + ' ' + empleado.ApellM + '</td>' +
            '<td>' + empleado.genero + '</td>' +
            '<td>' + empleado.telefono + '</td>' +
        '<td>' + empleado.telefono_movil + '</td>' +
            '<td>' + empleado.estatus + '</td></tr>';
            '<td>' + empleado.genero + '</td>' +
            '<td>' + empleado.telefono_movil + '</td>' +
            '<td>' + empleado.estatus + '</td>' +
        '<td>' + empleado.rfc + '</td>' +
        '<td>' + empleado.correo_electronico + '</td>' +
        '<td>' + empleado.fecha_nacimiento + '</td>' +
        '<td>' + empleado.curp + '</td>' +
        '<td>' + empleado.domicilio + '</td>' +
        '<td>' + empleado.ciudad + '</td>' +
        '<td>' + empleado.estado + '</td>' +
        '<td>' + empleado.codigo_postal + '</td>' +
        '<td>' + empleado.fecha_ingreso + '</td>' +
        '<td>' + empleado.puesto_laboral + '</td>' +
        '<td>' + empleado.salario_mensual + '</td>' +
        '<td>' + empleado.codigo_empleado + '</td>' +
        '<td>' + empleado.sucursal_empleado+ '</td></tr>' ;
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblEmpleado").innerHTML = cuerpo;
}


//import emailjs from 'emailjs-com';
//
//emailjs.init('user_yourEmailJSUserId');
//
//function enviarCorreoNuevoEmpleado(destinatario, usuario, contraseña) {
//    const templateParams = {
//        to_email: destinatario,
//        message: `¡Bienvenido! Te has registrado como nuevo empleado. Aquí están tus datos de inicio de sesión:\nUsuario: ${usuario}\nContraseña: ${contraseña}`
//    };
//
//    emailjs.send('your_service_id', 'your_template_id', templateParams)
//        .then(function(response) {
//            console.log('Correo electrónico enviado al nuevo empleado:', response);
//        })
//        .catch(function(error) {
//            console.error('Error al enviar el correo electrónico:', error);
//        });
//}
