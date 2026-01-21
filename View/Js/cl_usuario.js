class Usuario {

    constructor(objData){
        this._objData = objData;
    }

    mostrarUsuario(){
        let objData = new FormData();
        objData.append("mostrarUsuario", this._objData.mostrarUsuario)

            fetch( "Controller/UsuarioController.php", {
            method: "POST",
            body: objData
        })

            .then(response => response.json()).catch(error => {
                console.log(error);
            })
            .then((response)=> {
                console.log(response)

                if (response["codigo"] == "200") {
                    let dataSet = [];
                    response["listaUsuarios"].forEach(element => {
                        let objBotones = '<div class="btn-group" role="group">';
                         objBotones += '<button id="btnEditarUsuario" type="button" class="btn btn-info" usuario="' + element.id  + '" nombre="' + element.nombre +'" email="' + element.email + '" sede_id="' + element.sede_id + '" activo="' + element.activo +'"><i class="bi bi-pen"></i></button>';
                           objBotones += '<button id="btnEliminarUsuario" type="button" class="btn btn-danger" usuario="' + element.id + '"><i class="bi bi-x"></i></button>';
                        objBotones += '</div>';
dataSet.push([element.nombre , element.email , element.sede_id, element.activo , objBotones]);
                    });

                   $('#tablaUsuario').DataTable({
                        buttons: [{
                            extend: "colvis",
                            text: "Columnas"
                        },
                            "excel",
                            "pdf",
                            "print"
                        ],
                        dom: "Bfrtip",
                        responsive: true,
                        destroy: true,
                        data: dataSet
                    });
                } else {
                    console.log("error")
                }
            })
    }
}