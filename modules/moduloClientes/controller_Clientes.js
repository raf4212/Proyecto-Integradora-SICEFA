let indexClienteSeleccionado;
let clientes = [];

export function addCliente(){
        let id_cliente, 
        codigo_cliente,
        nombre,
        apellido_paterno,
        apellido_materno,
        genero,
        rfc,
        curp,
        telefono,
        fecha_Nac,
        ciudad,
        domicilio,
        estado,
        codigo_postal,
        correo_electronico,
        fecha_Registro;

        id_cliente= document.getElementById("txtid").value;
        codigo_cliente=document.getElementById("txtcodigo").value;
        nombre= document.getElementById("txtNombre").value;
        apellido_paterno =document.getElementById("txtApePaterno").value;
        apellido_materno = document.getElementById("txtApeMaterno").value;
        genero= document.getElementById("txtGenero").value;
        rfc = document.getElementById("txtRfc").value;
        curp = document.getElementById("txtCurp").value;
        telefono = document.getElementById("txtTelefono").value;
        fecha_Nac = document.getElementById("txtFechaNac").value;
        ciudad = document.getElementById("txtCiudad").value;
        domicilio = document.getElementById("txtDomicilio").value;
        estado = document.getElementById("lstEstado").value;
        codigo_postal= document.getElementById("txtCodigoPostal").value;
        correo_electronico = document.getElementById("txtCorreo").value;
        fecha_Registro = document.getElementById("txtFechaRegistro").value;


let cliente = {};
    cliente.idCliente =  "ID01";
    cliente.codigo_cliente = codigo_cliente;
    cliente.nombre = nombre;
    cliente.apellido_paterno = apellido_paterno;
    cliente.apellido_materno = apellido_materno;
    cliente.genero = genero;
    cliente.telefono = telefono;
    cliente.fecha_Nac = fecha_Nac;
    cliente.correo_electronico = correo_electronico;
    cliente.rfc = rfc;
    cliente.curp = curp;
    cliente.ciudad = ciudad;
    cliente.domicilio = domicilio;
    cliente.estado = estado;
    cliente.codigo_postal = codigo_postal;
    cliente.fecha_Registro = fecha_Registro;
    cliente.estatus = "Activo";
    clientes.push(cliente);
    clean();
    loadTabla();
}

function loadTabla(){
    let cuerpo = "";
    clientes.forEach(function (cliente){
        let registro =  
                '<tr onclick="moduloCliente.selectCliente('+ clientes.indexOf(cliente) +');">'+
                '<td>' + cliente.codigo_cliente + '</td>' +
                '<td>' + cliente.nombre + '</td>' +
                '<td>' + cliente.apellido_paterno +  ' '+ cliente.apellido_materno +'</td>' +
                '<td>' + cliente.genero + '</td>' +
               '<td>' + cliente.rfc + '</td>' +
               '<td>' + cliente.curp + '</td>' +
                '<td>' + cliente.telefono + '</td>' +                
                '<td>' + cliente.fecha_Nac+ '</td>' +
                '<td>' + cliente.ciudad + '</td>' +
                '<td>' + cliente.domicilio + '</td>' +
                 '<td>' + cliente.estado + '</td>' +
                '<td>' + cliente.codigo_postal + '</td>' +
                '<td>' + cliente.correo_electronico + '</td>' +
                 '<td>' + cliente.fecha_Registro+ '</td>' +
                '<td>' + cliente.estatus + '</td></tr>' ; 
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblClientes").innerHTML = cuerpo;
    
}

export function selectCliente(index){
    document.getElementById("txtid").value = clientes[index].id_cliente;
     document.getElementById("txtcodigo").value = clientes[index].codigo_cliente;
    document.getElementById("txtNombre").value = clientes[index].nombre ;
    document.getElementById("txtApePaterno").value = clientes[index].apellido_paterno;
    document.getElementById("txtApeMaterno").value = clientes[index].apellido_materno;
    document.getElementById("txtGenero").value = clientes[index].genero;
    document.getElementById("txtRfc").value = clientes[index].rfc;
    document.getElementById("txtCurp").value = clientes[index].curp;
    document.getElementById("txtTelefono").value = clientes[index].telefono;
    document.getElementById("txtFechaNac").value = clientes[index].fecha_Nac;
    document.getElementById("txtFechaRegistro").value = clientes[index].fecha_Registro;
    document.getElementById("txtCiudad").value = clientes[index].ciudad;
    document.getElementById("lstEstado").value = clientes[index].estado;
    document.getElementById("txtDomicilio").value = clientes[index].domicilio;
    document.getElementById("txtCodigoPostal").value = clientes[index].codigo_postal;  
    document.getElementById("txtCorreo").value = clientes[index].correo_electronico;  
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
     indexClienteSeleccionado = index;
}

export function clean(){
    document.getElementById("txtid").value = " ";
    document.getElementById("txtcodigo").value = " ";
    document.getElementById("txtNombre").value= " ";
    document.getElementById("txtApePaterno").value = " ";
    document.getElementById("txtApeMaterno").value= " ";
    document.getElementById("txtGenero").value= " ";
    document.getElementById("txtRfc").value= " ";
    document.getElementById("txtCurp").value= " ";
    document.getElementById("txtTelefono").value= " ";
    document.getElementById("txtFechaNac").value= " ";
    document.getElementById("txtCiudad").value= " ";
    document.getElementById("txtDomicilio").value= " ";
    document.getElementById("lstEstado").value= " ";
    document.getElementById("txtCodigoPostal").value= " ";
    document.getElementById("txtCorreo").value= " ";
    document.getElementById("txtFechaRegistro").value= " ";
    
    document.getElementById("txtNombre").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexClienteSeleccionado = 0;
}

export function updateCliente(){
 let id_cliente, 
        codigo_cliente,
        nombre,
        apellido_paterno,
        apellido_materno,
        genero,
        rfc,
        curp,
        telefono,
        fecha_Nac,
        ciudad,
        domicilio,
        estado,
        codigo_postal,
        correo_electronico,
        fecha_Registro;

        id_cliente= document.getElementById("txtid").value;
        codigo_cliente=document.getElementById("txtcodigo").value;
        nombre= document.getElementById("txtNombre").value;
        apellido_paterno =document.getElementById("txtApePaterno").value;
        apellido_materno = document.getElementById("txtApeMaterno").value;
        genero= document.getElementById("txtGenero").value;
        rfc = document.getElementById("txtRfc").value;
        curp = document.getElementById("txtCurp").value;
        telefono = document.getElementById("txtTelefono").value;
        fecha_Nac = document.getElementById("txtFechaNac").value;
        ciudad = document.getElementById("txtCiudad").value;
        domicilio = document.getElementById("txtDomicilio").value;
        estado = document.getElementById("lstEstado").value;
        codigo_postal= document.getElementById("txtCodigoPostal").value;
        correo_electronico = document.getElementById("txtCorreo").value;
        fecha_Registro = document.getElementById("txtFechaRegistro").value;

  
let cliente = {};
    cliente.idCliente =  "ID01";
    cliente.codigo_cliente = codigo_cliente;
    cliente.nombre = nombre;
    cliente.apellido_paterno = apellido_paterno;
    cliente.apellido_materno = apellido_materno;
    cliente.telefono = telefono;
    cliente.correo_electronico = correo_electronico;
    cliente.rfc = rfc;
    cliente.genero = genero;
    cliente.curp = curp;
    cliente.ciudad = ciudad;
    cliente.domicilio = domicilio;
    cliente.codigo_postal = codigo_postal;
    cliente.fecha_Nac = fecha_Nac;
    cliente.fecha_Registro = fecha_Registro;
    cliente.estado = estado;
    cliente.estatus = "Activo";
    clientes[indexClienteSeleccionado] = cliente;
    clean();
    loadTabla();
}

export function deleteCliente(){
    clientes[indexClienteSeleccionado].estatus = "Inactivo";
    clean();
    loadTabla();
}

fetch("modules/moduloClientes/data_Clientes.json")
        .then(function(response){
            return response.json();
        })
        .then(function(jsondata){
                clientes = jsondata;
                console.log(clientes);
                loadTabla();
            }            
        );

export function searchCliente(){
    let filtro = document.getElementById("txtBusquedaCliente").value;
    
    let resultados = clientes.filter(element => element.nombre === filtro);
    let cuerpo = "";
    resultados.forEach(function (cliente){
         let registro =  
                '<tr onclick="moduloCliente.selectCliente('+ clientes.indexOf(cliente) +');">'+
                '<td>' + cliente.codigo_cliente + '</td>' +
                '<td>' + cliente.nombre + '</td>' +
                '<td>' + cliente.apellido_paterno +  ' '+ cliente.apellido_materno +'</td>' +
                '<td>' + cliente.genero + '</td>' +
                '<td>' + cliente.rfc + '</td>' +
                '<td>' + cliente.curp + '</td>' +
                '<td>' + cliente.telefono + '</td>' +                
                '<td>' + cliente.fecha_Nac+ '</td>' +
                '<td>' + cliente.ciudad + '</td>' +
                '<td>' + cliente.domicilio + '</td>' +
                '<td>' + cliente.estado + '</td>' +
                '<td>' + cliente.codigo_postal + '</td>' +
                '<td>' + cliente.correo_electronico + '</td>' +
                '<td>' + cliente.fecha_Registro+ '</td>' +
                '<td>' + cliente.estatus + '</td></tr>' ; 
             cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblClientes").innerHTML = cuerpo;
}