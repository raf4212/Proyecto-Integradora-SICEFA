let indexProductoSeleccionado;
let productos = [];
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


function cargarTabla() {
  let cuerpo = "";
    productos.forEach(function (producto) {
        let registro =
            '<tr onclick="moduloProductos1.seleccionarProducto(' + productos.indexOf(producto) + ');">' +
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