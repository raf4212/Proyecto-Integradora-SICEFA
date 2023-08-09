let indexPedidoSeleccionado;
let pedidos = [];

export function addPedido(){
        let id_Pedido, 
        nombre_cliente,
        nombre_usuario,
        nom_sucursal,
        precio;

        id_Pedido= document.getElementById("txtPedido").value;
        nombre_cliente=document.getElementById("txtNombreCli").value;
        nombre_usuario= document.getElementById("txtNombreUsu").value;
        nom_sucursal =document.getElementById("txtNombreSucu").value;
        precio = document.getElementById("txtPrecio").value;
      


let pedido = {};
    pedido.id_Pedido =  "ID01";
    pedido.nombre_cliente = nombre_cliente;
    pedido.nombre_usuario = nombre_usuario;
    pedido.nom_sucursal = nom_sucursal;
    pedido.precio = precio;
    pedido.estatus = "Activo";
    pedidos.push(pedido);
    clean();
    loadTabla();
}

function loadTabla(){
    let cuerpo = "";
    pedidos.forEach(function (pedido){
        let registro =  
                '<tr onclick="moduloPedido.selectPedido('+ pedidos.indexOf(pedido) +');">'+
                '<td>' + pedido.id_Pedido + '</td>' +
                '<td>' + pedido.nombre_cliente + '</td>' +
                '<td>' + pedido.nombre_usuario +  '</td>' +
                '<td>' + pedido.nom_sucursal + '</td>' +
               '<td>' + pedido.precio + '</td>' +
                '<td>' + pedido.estatus + '</td></tr>' ; 
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblPedidos").innerHTML = cuerpo;
    
}

export function selectPedido(index){
    document.getElementById("txtPedido").value = pedidos[index].id_Pedido;
    document.getElementById("txtNombreCli").value = pedidos[index].nombre_cliente;
    document.getElementById("txtNombreUsu").value = pedidos[index].nombre_usuario ;
    document.getElementById("txtNombreSucu").value = pedidos[index].nom_sucursal;
    document.getElementById("txtPrecio").value = pedidos[index].precio;
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
     indexPedidoSeleccionado = index;
}

export function clean(){
    document.getElementById("txtPedido").value = " ";
    document.getElementById("txtNombreCli").value = " ";
    document.getElementById("txtNombreUsu").value= " ";
    document.getElementById("txtNombreSucu").value = " ";
    document.getElementById("txtPrecio").value= " ";
    
    document.getElementById("txtNombreCli").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexPedidoSeleccionado = 0;
}

export function updatePedido(){
 let   id_Pedido, 
        nombre_cliente,
        nombre_usuario,
        nom_sucursal,
        precio;

        id_Pedido= document.getElementById("txtPedido").value;
        nombre_cliente=document.getElementById("txtNombreCli").value;
        nombre_usuario= document.getElementById("txtNombreUsu").value;
        nom_sucursal =document.getElementById("txtNombreSucu").value;
        precio = document.getElementById("txtPrecio").value;

  
let pedido = {};
    pedido.id_Pedido =  "ID01";
    pedido.nombre_cliente = nombre_cliente;
    pedido.nombre_usuario = nombre_usuario;
    pedido.nom_sucursal = nom_sucursal;
    pedido.precio = precio;
    pedido.estatus = "Activo";
    pedidos[indexPedidoSeleccionado] = pedido;
    clean();
    loadTabla();
}

export function deletePedido(){
    pedidos[indexPedidoSeleccionado].estatus = "Inactivo";
    clean();
    loadTabla();
}

fetch("modules/moduloPedidos/data_Pedidos.json")
        .then(function(response){
            return response.json();
        })
        .then(function(jsondata){
                pedidos = jsondata;
                console.log(pedidos);
                loadTabla();
            }            
        );

export function searchPedido(){
    let filtro = document.getElementById("txtBusquedaPedido").value;
    
    let resultados = pedidos.filter(element => element.nombre_Cliente === filtro);
    let cuerpo = "";
    resultados.forEach(function (pedido){
        let registro =  
                '<tr onclick="moduloPedidos.selectPedido('+ pedidos.indexOf(pedido) +');">'+
                '<td>' + pedido.nombre_Cliente + '</td>' +
                '<td>' + pedido.nombre_Usuario + '</td>' +
                '<td>' + pedido.nom_Sucursal + '</td>' +
                '<td>' + pedido.precio + '</td></tr>' +
                '<td>' + pedido.estatus + '</td></tr>'  ; 
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblPedidos").innerHTML = cuerpo;
}