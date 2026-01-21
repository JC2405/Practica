(function(){
    
    mostrarUsuario();

    function mostrarUsuario(){
        let objData = {"mostrarUsuario" : "ok"};
        let objTablaUsuario = new Usuario(objData);
        objTablaUsuario.mostrarUsuario();
    }
})();