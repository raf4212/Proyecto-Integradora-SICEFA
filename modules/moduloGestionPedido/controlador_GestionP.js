let indexgestionSelect;
let gestionar = [];

export function registrargestion(){
    let IDcompra,
        NombreSucursal,
        NombreEmpleado,
        CódigoPostal,
        Ciudad,
        Estado,
        TotalPedido,
        Fecha;

    IDcompra = document.getElementById("txtCompra").value;
    NombreSucursal = document.getElementById("txtNomSucu").value;
    NombreEmpleado = document.getElementById("txtNomEmpe").value;
    CódigoPostal = document.getElementById("txtCPS").value;
    Ciudad = document.getElementById("txtCiudad").value;
    Estado = document.getElementById("txtEstado").value;
    TotalPedido = document.getElementById("txtTotal").value;
    Fecha = document.getElementById("txtFecha").value;
    
        
  let gestion = {
        IDcompra,
        NombreSucursal,
        NombreEmpleado,
        CódigoPostal,
        Ciudad,
        Estado,
        TotalPedido,
        Fecha
    };
    
    
    gestionar.push(gestion);
    limpiarCampos();
    cargarTabla();
}

export function Tabla() {
    let cuerpo = "";
    gestionar.forEach(function (gestion) {
        let registro =  
                '<tr onclick="moduloSucursal.selectSucursal('+ gestionar.indexOf(gestion) +');">'+
                '<td>' + gestion.IDcompra + '</td>' +
                '<td>' + gestion.NombreSucursal + '</td>' +
                '<td>' + gestion.NombreEmpleado + '</td>' +
                '<td>' + gestion.CódigoPostal + '</td>' +
                '<td>' + gestion.Ciudad + '</td>' +
                '<td>' + gestion.Estado + '</td>' +
                '<td>' + gestion.TotalPedido + '</td>' +
                '<td>' + gestion.Fecha + '</td>' +
                '</td></tr>' ; 
        cuerpo += registro;
    });
    document.getElementById("tblGestion").innerHTML = cuerpo;
    
}
export function limpiarCampos(){
    document.getElementById("txtCompra").value = "";
    document.getElementById("txtNomSucu").value = "" ;
    document.getElementById("txtNomEmpe").value = "";
    document.getElementById("txtCPS").value = "";
    document.getElementById("txtCiudad").value = "";
    document.getElementById("txtEstado").value = "";
    document.getElementById("txtTotal").value = "";
    document.getElementById("txtFecha").value = "";
    
    document.getElementById("txtNomSucu").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexgestionSelect = 0;
}

export function actualizarGestion(){
   let IDcompra,
        NombreSucursal,
        NombreEmpleado,
        CódigoPostal,
        Ciudad,
        Estado,
        TotalPedido,
        Fecha;


    IDcompra = document.getElementById("txtCompra").value;
    NombreSucursal = document.getElementById("txtNomSucu").value;
    NombreEmpleado = document.getElementById("txtNomEmpe").value;
    CódigoPostal = document.getElementById("txtCPS").value;
    Ciudad = document.getElementById("txtCiudad").value;
    Estado = document.getElementById("txtEstado").value;
    TotalPedido = document.getElementById("txtTotal").value;
    Fecha = document.getElementById("txtFecha").value;
    
    
    let gestion = {
        IDcompra,
        NombreSucursal,
        NombreEmpleado,
        CódigoPostal,
        Ciudad,
        Estado,
        TotalPedido,
        Fecha
    };
    gestionar[indexgestionSelect] = gestion;
    limpiarCampos();
    cargarTabla();
}
export function eliminarGestion() {
    gestionar[indexgestionSelect].estatus = "Inactivo";
    limpiarCampos();
    cargarTabla();
}
    

export function seleccionarSucursal(index){
    document.getElementById("txtCompra").value = gestionar[index].IDcompra;
    document.getElementById("txtNomSucu").value = gestionar[index].NombreSucursal ;
    document.getElementById("txtNomEmpe").value = gestionar[index].NombreEmpleado;
    document.getElementById("txtCPS").value = gestionar[index].CódigoPostal;
    document.getElementById("txtCiudad").value = gestionar[index].Ciudad;
    document.getElementById("txtEstado").value = gestionar[index].Estado;
    document.getElementById("txtTotal").value = gestionar[index].TotalPedido;
    document.getElementById("txtFecha").value = gestionar[index].Fecha;
    
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexgestionSelect = index;
}


fetch("modules/moduloGestionPedido/datos_GestionPjson")
        .then(function(response){
            return response.json();
        })
        .then(function(jsondata){
                gestionar = jsondata;
                console.log(gestionar);
                Tabla();
            }            
        );

export function buscarGestion(){
    let filtro = document.getElementById("txtBusquedaGestion").value;
    
    let resultados = gestionar.filter(element => element.nombre === filtro);
    let cuerpo = "";
    resultados.forEach(function (gestion){
        let registro =  
                '<tr onclick="moduloGestionPedido.selectGestion('+ gestionar.indexOf(gestion) +');">'+
                '<td>' + gestion.IDcompra + '</td>' +
                '<td>' + gestion.NombreSucursal + '</td>' +
                '<td>' + gestion.NombreEmpleado + '</td>' +
                '<td>' + gestion.CódigoPostal + '</td>' +
                '<td>' + gestion.Ciudad + '</td>' +
                '<td>' + gestion.Estado + '</td>' +
                '<td>' + gestion.TotalPedido + '</td>' +
                '<td>' + gestion.Fecha + '</td></tr>';
              
              
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblGESTION").innerHTML = cuerpo;
}