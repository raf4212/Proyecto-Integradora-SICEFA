/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

let indexsucursalSelect;
let sucursal = [];

export function sucu(){
    let codigo_sucursal, 
        nombre_sucursal, 
        nombre_titular, 
        rfc_titular, 
        telefono_sucursal, 
        estado_sucursal, 
        cp_sucursal,
        ciudad_sucursal, 
        domicilio_sucusal,
        colonia,
        estatus,
        latitud,
        longitud;

    codigo_sucursal = document.getElementById("txtCodSucu").value;
    nombre_sucursal = document.getElementById("txtNomSucu").value;
    nombre_titular = document.getElementById("txtNomTitular").value;
    rfc_titular = document.getElementById("txtRFC").value;
    telefono_sucursal = document.getElementById("txtTelefonoSucu").value;
    estado_sucursal = document.getElementById("txtEstadoSucu").value;
    cp_sucursal = document.getElementById("txtCPSucu").value;
    ciudad_sucursal = document.getElementById("txtCiudadSucu").value;
    domicilio_sucusal = document.getElementById("txtDomSucu").value;
    colonia = document.getElementById("txtColonia").value;
    estatus = document.getElementById("txtEsttus").value;
    latitud = document.getElementById("txtLatitud").value;
    longitud = document.getElementById("txtLongitud").value;
        
    let sucursaless = {};
    sucursaless.codigo_sucursal =  "RF01";
    sucursaless.nombre_sucursal = nombre_sucursal;
    sucursaless.nombre_titular = nombre_titular;
    sucursaless.rfc_titular = rfc_titular;
    sucursaless.telefono_sucursal = telefono_sucursal;
    sucursaless.estado_sucursal = estado_sucursal;
    sucursaless.cp_sucursal = cp_sucursal;
    sucursaless.ciudad_sucursal = ciudad_sucursal;
    sucursaless.domicilio_sucusal = domicilio_sucusal;
    sucursaless.colonia = colonia;
    sucursaless.estatus = estatus;
    sucursaless.latitud = latitud;
    sucursaless.longitud = longitud;
    sucursal.push(sucursaless);
    clean();
    Tabla();
}

export function Tabla() {
    let cuerpo = "";
    sucursal.forEach(function (sucursaless) {
        let registro =  
                '<tr onclick="moduloSucursal.SucursalSI('+ sucursal.indexOf(sucursaless) +');">'+
                '<td>' + sucursaless.codigo_sucursal + '</td>' +
                '<td>' + sucursaless.nombre_sucursal + '</td>' +
                '<td>' + sucursaless.nombre_titular + '</td>' +
                '<td>' + sucursaless.rfc_titular + '</td>' +
                '<td>' + sucursaless.telefono_sucursal + '</td>' +
                '<td>' + sucursaless.estado_sucursal + '</td>' +
                '<td>' + sucursaless.cp_sucursal + '</td>' +
                '<td>' + sucursaless.ciudad_sucursal + '</td>' +
                '<td>' + sucursaless.domicilio_sucusal + '</td>' +
                '<td>' + sucursaless.colonia + '</td>' +
                '<td>' + sucursaless.latitud + '</td>' +
                '<td>' + sucursaless.longitud + '</td>' +
                '<td>' + sucursaless.estatus + '</td></tr>' ; 
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblSucursal").innerHTML = cuerpo;
    
}

export function SucursalSI(index){
    document.getElementById("txtCodSucu").value = sucursal[index].codigo_sucursal;
    document.getElementById("txtNomSucu").value = sucursal[index].nombre_sucursal ;
    document.getElementById("txtNomTitular").value = sucursal[index].nombre_titular;
    document.getElementById("txtRFC").value = sucursal[index].rfc_titular;
    document.getElementById("txtTelefonoSucu").value = sucursal[index].telefono_sucursal;
    document.getElementById("txtEstadoSucu").value = sucursal[index].estado_sucursal;
    document.getElementById("txtCPSucu").value = sucursal[index].cp_sucursal;
    document.getElementById("txtCiudadSucu").value = sucursal[index].ciudad_sucursal;
    document.getElementById("txtDomSucu").value = sucursal[index].domicilio_sucusal;
    document.getElementById("txtColonia").value = sucursal[index].colonia;
    document.getElementById("txtEsttus").value = sucursal[index].estatus;
    document.getElementById("txtLatitud").value = sucursal[index].latitud;
    document.getElementById("txtLongitud").value = sucursal[index].longitud;   
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexsucursalSelect = index;
}

export function clean(){
    document.getElementById("txtCodSucu").value = "";
    document.getElementById("txtNomSucu").value = "" ;
    document.getElementById("txtNomTitular").value = "";
    document.getElementById("txtRFC").value = "";
    document.getElementById("txtTelefonoSucu").value = "";
    document.getElementById("txtEstadoSucu").value = "";
    document.getElementById("txtCPSucu").value = "";
    document.getElementById("txtCiudadSucu").value = "";
    document.getElementById("txtDomSucu").value = "";
    document.getElementById("txtColonia").value = "";
    document.getElementById("txtEsttus").value = "";
    document.getElementById("txtLatitud").value = "";
    document.getElementById("txtLongitud").value = "";
    
    document.getElementById("txtNomSucu").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexsucursalSelect = 0;
}

export function updateSucu(){
   let codigo_sucursal, 
        nombre_sucursal, 
        nombre_titular, 
        rfc_titular, 
        telefono_sucursal, 
        estado_sucursal, 
        cp_sucursal,
        ciudad_sucursal, 
        domicilio_sucusal,
        colonia,
        estatus,
        latitud,
        longitud;

    codigo_sucursal = document.getElementById("txtCodSucu").value;
    nombre_sucursal = document.getElementById("txtNomSucu").value;
    nombre_titular = document.getElementById("txtNomTitular").value;
    rfc_titular = document.getElementById("txtRFC").value;
    telefono_sucursal = document.getElementById("txtTelefonoSucu").value;
    estado_sucursal = document.getElementById("txtEstadoSucu").value;
    cp_sucursal = document.getElementById("txtCPSucu").value;
    ciudad_sucursal = document.getElementById("txtCiudadSucu").value;
    domicilio_sucusal = document.getElementById("txtDomSucu").value;
    colonia = document.getElementById("txtColonia").value;
    estatus = document.getElementById("txtEsttus").value;
    latitud = document.getElementById("txtLatitud").value;
    longitud = document.getElementById("txtLongitud").value;
    
    
    
    let sucursales = {};
    sucursales.codigo_sucursal =  codigo_sucursal;
    sucursales.nombre_sucursal = nombre_sucursal;
    sucursales.nombre_titular = nombre_titular;
    sucursales.rfc_titular = rfc_titular;
    sucursales.telefono_sucursal = telefono_sucursal;
    sucursales.estado_sucursal = estado_sucursal;
    sucursales.cp_sucursal = cp_sucursal;
    sucursales.ciudad_sucursal = ciudad_sucursal;
    sucursales.domicilio_sucusal = domicilio_sucusal;
    sucursales.colonia = colonia;
    sucursales.estatus = "Activo";
    sucursales.latitud = latitud;
    sucursales.longitud = longitud;
    sucursal[indexsucursalSelect] = sucursales;
    clean();
    Tabla();
}

export function deleteSucu(){
    sucursal[indexsucursalSelect].estatus = "Inactivo";
    clean();
    Tabla();
}

fetch("modules/moduloSucursal/datos_sucursal.json")
        .then(function(response){
            return response.json();
        })
        .then(function(jsondata){
                sucursal = jsondata;
                console.log(sucursal);
                Tabla();
            }            
        );

export function searchSucursal(){
    let filtro = document.getElementById("txtBusquedaCliente").value;
    
    let resultados = sucursal.filter(element => element.nombre === filtro);
    let cuerpo = "";
    resultados.forEach(function (sucursaless){
        let registro =  
                '<tr onclick="moduloSucursal.SucursalSI('+ sucursal.indexOf(sucursaless) +');">'+
                '<td>' + sucursaless.nombre_sucursal + '</td>' +
                '<td>' + sucursaless.nombre_titular + '</td>' +
                '<td>' + sucursaless.rfc_titular + '</td>' +
                '<td>' + sucursaless.telefono_sucursal + '</td>' +
                '<td>' + sucursaless.estado_sucursal + '</td>' +
                '<td>' + sucursaless.cp_sucursal + '</td>' +
                '<td>' + sucursaless.ciudad_sucursal + '</td>' +
                '<td>' + sucursaless.domicilio_sucusal + '</td>' +
                '<td>' + sucursaless.colonia + '</td>' +
                '<td>' + sucursaless.latitud + '</td>' +
                '<td>' + sucursaless.longitud + '</td>' +
                '<td>' + sucursaless.estatus + '</td></tr>' ; 
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblsucursal").innerHTML = cuerpo;
}
 
