let moduloCliente;

function cargarModuloClientes(){
    fetch("modules/moduloClientes/view_Clientes.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("../modules/moduloClientes/controller_Clientes.js").then(
                            function(controller){
                                moduloCliente = controller;
                            }
                            );
                }
            );
}

let moduloEmpleado;

function cargarRegistroEmpl(){
    fetch("modules/ModuloRegistroEmpleado/registroEmpleados.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("../modules/ModuloRegistroEmpleado/controladorRegistroEmpleados.js").then(
                            function(controller){
                                moduloEmpleado = controller;
                            }
                            );
                }
            );
}

let moduloSucursal;

function cargarModuloSucursal(){
    fetch("modules/moduloSucursal/view_Sucursal.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("../modules/moduloSucursal/controladorSucursal.js").then(
                            function(controller){
                                moduloSucursal = controller;
                            }
                            );
                }
            );
}

let moduloProductos;

function cargarModuloProductos(){
    fetch("modules/ModuloProductos/registroProductos.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("../modules/ModuloProductos/controladorProducto.js").then(
                            function(controller){
                                moduloProductos = controller;
                            }
                            );
                }
            );
}

let moduloPedido;

function cargarModuloPedidos(){
    fetch("modules/moduloPedidos/view_Pedidos.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("../modules/moduloPedidos/controller_Pedidos.js").then(
                            function(controller){
                                moduloPedido = controller;
                            }
                            );
                }
            );
}

let moduloUsuarios;

function cargarModuloUsuarios(){
    fetch("modules/moduloUsuarios/view_Usuarios.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("../modules/moduloUsuarios/controladorUsuario.js").then(
                            function(controller){
                                moduloUsuarios = controller;
                            }
                            );
                }
            );
    }
    
    let moduloUsuarios2;

function cargarModuloUsuarios2(){
    fetch("modules/moduloUsuarios/view_Usuarios_1.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("../modules/moduloUsuarios/controladorUsuario.js").then(
                            function(controller){
                                moduloUsuarios = controller;
                            }
                            );
                }
            );
    }
    
    let moduloUsuarios3;

function cargarModuloUsuarios3(){
    fetch("modules/moduloUsuarios/view_Usuarios_2.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("../modules/moduloUsuarios/controladorUsuario.js").then(
                            function(controller){
                                moduloUsuarios = controller;
                            }
                            );
                }
            );
    }
    
let moduloVentas;

function cargarModuloVentas(){
    fetch("modules/moduloVentas/view_Ventas.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("../modules/moduloVentas/controlador_Ventas.js").then(
                            function(controller){
                                moduloVentas = controller;
                            }
                            );
                }
            );
}

let moduloGestionPedido;

function cargarmoduloGestionPedido(){
    fetch("modules/moduloGestionPedido/view_GestionPed.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorPrincipal").innerHTML = html;
                    import ("../modules/moduloGestionPedido/controlador_GestionP.js").then(
                            function(controller){
                                moduloGestionPedido = controller;
                            }
                            );
                }
            );
}
function SICEFA1(){
    window.location="main.html";
}
function SICEFA2(){
    window.location="main_1.html";
}
function SICEFA3(){
    window.location="main_2.html";
}