<?php

include_once "../Model/UsuarioModel.php";

class UsuarioController {

    public $id;
    public $nombre;
    public $email;
    public $password_hash;
    public $sede_id;
    public $activo;

    public function ctrMostrarUsuarios(){
        $objRespuesta = UsuarioModel::mdlListarUsuarios();
        echo json_encode($objRespuesta);
    }
}

if(isset($_POST["mostrarUsuario"])){
    $objUsuario = new UsuarioController();
    $objUsuario->ctrMostrarUsuarios();
}