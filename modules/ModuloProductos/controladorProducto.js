let indexProductoSeleccionado;
let productos = [];
let rutaImagenSeleccionada = "";

document.getElementById('obtenerRuta').addEventListener('click', function() {
    const input = document.getElementById('inputImagen');
    rutaImagenSeleccionada = input.value;
    document.getElementById('rutaImagen').textContent = 'Ruta de la imagen seleccionada';
});

export function registrarProducto() {
    let nombreProducto,
        nombreGenerico,
        formaFarmaceutica,
        unidadMedida,
        presentacion,
        principalIndicacion,
        contraindicaciones,
        concentracion,
        unidadesEnvase,
        precioUnitario,
        codigoBarras;

    nombreProducto = document.getElementById("txtNombreProducto").value;
    nombreGenerico = document.getElementById("txtNombreGenerico").value;
    formaFarmaceutica = document.getElementById("txtFormaFarmaceutica").value;
    unidadMedida = document.getElementById("txtUnidadMedida").value;
    presentacion = document.getElementById("txtPresentacion").value;
    principalIndicacion = document.getElementById("txtIndicacion").value;
    contraindicaciones = document.getElementById("txtContraindicaciones").value;
    concentracion = document.getElementById("txtConcentracion").value;
    unidadesEnvase = document.getElementById("txtUnidadesEnvase").value;
    precioUnitario = document.getElementById("txtPrecioUnitario").value;
    codigoBarras = document.getElementById("txtCodigoBarras").value;

    let producto = {
        nombreProducto,
        nombreGenerico,
        formaFarmaceutica,
        unidadMedida,
        presentacion,
        principalIndicacion,
        contraindicaciones,
        concentracion,
        unidadesEnvase,
        precioUnitario,
        codigoBarras,
        rutaImagen: rutaImagenSeleccionada,
        estatus: "Activo"
    };

    productos.push(producto);
    limpiarCampos();
    cargarTabla();
}

export function cargarTabla() {
    let cuerpo = "";
    productos.forEach(function (producto) {
        let registro =
            '<tr onclick="moduloProductos.seleccionarProducto(' + productos.indexOf(producto) + ');">' +
            '<td>' + producto.nombreProducto + '</td>' +
            '<td>' + producto.nombreGenerico + '</td>' +
            '<td>' + producto.formaFarmaceutica + '</td>' +
            '<td>' + producto.unidadMedida + '</td>' +
            '<td>' + producto.presentacion + '</td>' +
            '<td>' + producto.estatus + '</td></tr>';
        cuerpo += registro;
    });
    document.getElementById("tblProducto").innerHTML = cuerpo;
}

export function limpiarCampos() {
    document.getElementById("txtNombreProducto").value = "";
    document.getElementById("txtNombreGenerico").value = "";
    document.getElementById("txtFormaFarmaceutica").value = "";
    document.getElementById("txtUnidadMedida").value = "";
    document.getElementById("txtPresentacion").value = "";
    document.getElementById("txtIndicacion").value = "";
    document.getElementById("txtContraindicaciones").value = "";
    document.getElementById("txtConcentracion").value = "";
    document.getElementById("txtUnidadesEnvase").value = "";
    document.getElementById("txtPrecioUnitario").value = "";
    document.getElementById("txtCodigoBarras").value = "";
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    rutaImagenSeleccionada = "";
    indexProductoSeleccionado = 0;
}

export function actualizarProducto() {
    let nombreProducto,
        nombreGenerico,
        formaFarmaceutica,
        unidadMedida,
        presentacion,
        principalIndicacion,
        contraindicaciones,
        concentracion,
        unidadesEnvase,
        precioUnitario,
        codigoBarras;

    nombreProducto = document.getElementById("txtNombreProducto").value;
    nombreGenerico = document.getElementById("txtNombreGenerico").value;
    formaFarmaceutica = document.getElementById("txtFormaFarmaceutica").value;
    unidadMedida = document.getElementById("txtUnidadMedida").value;
    presentacion = document.getElementById("txtPresentacion").value;
    principalIndicacion = document.getElementById("txtIndicacion").value;
    contraindicaciones = document.getElementById("txtContraindicaciones").value;
    concentracion = document.getElementById("txtConcentracion").value;
    unidadesEnvase = document.getElementById("txtUnidadesEnvase").value;
    precioUnitario = document.getElementById("txtPrecioUnitario").value;
    codigoBarras = document.getElementById("txtCodigoBarras").value;

    let producto = {
        nombreProducto,
        nombreGenerico,
        formaFarmaceutica,
        unidadMedida,
        presentacion,
        principalIndicacion,
        contraindicaciones,
        concentracion,
        unidadesEnvase,
        precioUnitario,
        codigoBarras,
        rutaImagen: rutaImagenSeleccionada,
        estatus: "Activo"
    };
    productos[indexProductoSeleccionado] = producto;
    limpiarCampos();
    cargarTabla();
}

export function eliminarProducto() {
    productos[indexProductoSeleccionado].estatus = "Inactivo";
    limpiarCampos();
    cargarTabla();
}

export function seleccionarProducto(index) {
    document.getElementById("txtNombreProducto").value = productos[index].nombreProducto;
    document.getElementById("txtNombreGenerico").value = productos[index].nombreGenerico;
    document.getElementById("txtFormaFarmaceutica").value = productos[index].formaFarmaceutica;
    document.getElementById("txtUnidadMedida").value = productos[index].unidadMedida;
    document.getElementById("txtPresentacion").value = productos[index].presentacion;
    document.getElementById("txtIndicacion").value = productos[index].principalIndicacion;
    document.getElementById("txtContraindicaciones").value = productos[index].contraindicaciones;
    document.getElementById("txtConcentracion").value = productos[index].concentracion;
    document.getElementById("txtUnidadesEnvase").value = productos[index].unidadesEnvase;
    document.getElementById("txtPrecioUnitario").value = productos[index].precioUnitario;
    document.getElementById("txtCodigoBarras").value = productos[index].codigoBarras;

    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexProductoSeleccionado = index;
}


fetch("modules/ModuloProductos/datos_Productos.json")
        .then(function(response){
            return response.json();
        })
        .then(function(jsondata){
                productos = jsondata;
                console.log(productos);
                cargarTabla();
            }            
        );

export function buscarProducto(){
    let filtro = document.getElementById("txtBusquedaProducto").value;
    let resultados = productos.filter(element => element.nombre === filtro);
    let cuerpo = "";
    resultados.forEach(function (producto){
        let registro =  
            '<tr onclick="moduloProductos.seleccionarProducto(' + productos.indexOf(producto) + ');">' +
            '<td>' + producto.nombreProducto + '</td>' +
            '<td>' + producto.nombreGenerico + '</td>' +
            '<td>' + producto.formaFarmaceutica + '</td>' +
            '<td>' + producto.unidadMedida + '</td>' +
            '<td>' + producto.presentacion + '</td>' +
            '<td>' + producto.estatus + '</td></tr>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblProducto").innerHTML = cuerpo;
}