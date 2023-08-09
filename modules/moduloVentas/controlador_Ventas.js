let indexVentaSeleccionado;
let ventas = [];

export function addVentas(){
        let id_Ventas, 
        productos_Vendidos,
        empleado_Realizo_Venta,
        cantidad,
        fecha,
        hora,
        precio_Unitario;
        

        id_Ventas= document.getElementById("txtVentas").value;
        productos_Vendidos=document.getElementById("txtProdVen").value;
        empleado_Realizo_Venta= document.getElementById("txtRealizo").value;
        cantidad =document.getElementById("txtCantidad").value;
        fecha = document.getElementById("txtFecha").value;
        hora= document.getElementById("txtHora").value;
        precio_Unitario = document.getElementById("txtUnitario").value;
        


let venta = {};
    venta.id_Ventas =  "IV01";
    venta.productos_Vendidos = productos_Vendidos;
    venta.empleado_Realizo_Venta = empleado_Realizo_Venta;
    venta.cantidad = cantidad;
    venta.fecha = fecha;
    venta.hora = hora;
    venta.precio_Unitario = precio_Unitario;
    venta.estatus = "Activo";
    ventas.push(venta);
    clean();
    loadTabla();
}

function loadTabla(){
    let cuerpo = "";
    ventas.forEach(function (venta){
        let registro =  
                '<tr onclick="moduloVentas.selecVentas('+ ventas.indexOf(venta) +');">'+
                '<td>' + venta.id_Ventas + '</td>' +
                '<td>' + venta.productos_Vendidos + '</td>' +
                '<td>' + venta.empleado_Realizo_Venta + '</td>' +
                '<td>' + venta.cantidad + '</td>' +
               '<td>' + venta.fecha + '</td>' +
               '<td>' + venta.hora + '</td>' +
                '<td>' + venta.precio_Unitario + '</td>' +                
                '<td>' + venta.estatus+ '</td>'; 
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblVentas").innerHTML = cuerpo;
    
}

export function selecVentas(index){
    document.getElementById("txtVentas").value = ventas[index].id_Ventas;
    document.getElementById("txtProdVen").value = ventas[index].productos_Vendidos;
    document.getElementById("txtRealizo").value = ventas[index].empleado_Realizo_Venta ;
    document.getElementById("txtCantidad").value = ventas[index].cantidad;
    document.getElementById("txtFecha").value = ventas[index].fecha;
    document.getElementById("txtHora").value = ventas[index].hora;
    document.getElementById("txtUnitario").value = ventas[index].precio_Unitario;
   
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
     indexVentaSeleccionado = index;
}

export function clean(){
    document.getElementById("txtVentas").value = " ";
    document.getElementById("txtProdVen").value = " ";
    document.getElementById("txtRealizo").value= " ";
    document.getElementById("txtCantidad").value = " ";
    document.getElementById("txtFecha").value= " ";
    document.getElementById("txtHora").value= " ";
    document.getElementById("txtUnitario").value= " ";
    
    document.getElementById("txtProdVen").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexVentaSeleccionado = 0;
}

export function updateVenta(){
        let id_Ventas, 
        productos_Vendidos,
        empleado_Realizo_Venta,
        cantidad,
        fecha,
        hora,
        precio_Unitario;

         id_Ventas= document.getElementById("txtVentas").value;
        productos_Vendidos=document.getElementById("txtProdVen").value;
        empleado_Realizo_Venta= document.getElementById("txtRealizo").value;
        cantidad =document.getElementById("txtCantidad").value;
        fecha = document.getElementById("txtFecha").value;
        hora= document.getElementById("txtHora").value;
        precio_Unitario = document.getElementById("txtUnitario").value;

  
let venta = {};
    venta.id_Ventas =  "IV01";
    venta.productos_Vendidos = productos_Vendidos;
    venta.empleado_Realizo_Venta = empleado_Realizo_Venta;
    venta.cantidad = cantidad;
    venta.fecha = fecha;
    venta.hora = hora;
    venta.precio_Unitario = precio_Unitario;
    venta.estatus = "Activo";
    ventas[indexVentaSeleccionado] = venta;
    clean();
    loadTabla();
}

export function deleteVenta(){
    ventas[indexVentaSeleccionado].estatus = "Inactivo";
    clean();
    loadTabla();
}

fetch("modules/moduloVentas/data_Ventas.json")
        .then(function(response){
            return response.json();
        })
        .then(function(jsondata){
                Ventas = jsondata;
                console.log(Ventas);
                loadTabla();
            }            
        );

export function searchVenta(){
    let filtro = document.getElementById("txtBusquedaVentas").value;
    
    let resultados = ventas.filter(element => element.nombre === filtro);
    let cuerpo = "";
    resultados.forEach(function (venta){
         let registro =  
                '<tr onclick="moduloVentas.selecVentas('+ ventas.indexOf(venta) +');">'+
              '<td>' + venta.id_Ventas + '</td>' +
                '<td>' + venta.productos_Vendidos + '</td>' +
                '<td>' + venta.empleado_Realizo_Venta + '</td>' +
                '<td>' + venta.cantidad + '</td>' +
               '<td>' + venta.fecha + '</td>' +
               '<td>' + venta.hora + '</td>' +
                '<td>' + venta.precio_Unitario + '</td>' +                
                '<td>' + venta.estatus+ '</td>'; 
             cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblVentas").innerHTML = cuerpo;
}